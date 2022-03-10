import React from 'react'
import './addVenuePage.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function AddVenuePage() {
  const [venueName, setVenueName] = useState([])
  const inputRefName = useRef(null)
  const [venueCapacity, setVenueCapacity] = useState([])
  const inputRefCapacity = useRef(null)
  const [venueAddress, setVenueAddress] = useState([])
  const inputRefAddress = useRef(null)
  const [venueGeoLocation, setVenueGeoLocation] = useState([])
  const inputRefGeoLocation = useRef(null)
  const [venueOwnerEmail, setVenueOwnerEmail] = useState([])
  const inputRefOwnerEmail = useRef(null)
  const [venueStartDate, setVenueStartDate] = useState([])
  const inputRefStartDate = useRef(null)
  const [venueEndDate, setVenueEndDate] = useState([])
  const inputRefEndDate = useRef(null)
  const [venueImage, setVenueImage] = useState([])
  const inputRefImage = useRef(null)

  const PostVenueName = async (e) => {
    console.log(inputRefName)
    const venueBoard = JSON.stringify(
        {   
            venue: inputRefName.current.value,
            capacity: inputRefCapacity.current.value,
            address: inputRefAddress.current.value,
            geolocation: inputRefGeoLocation.current.value,
            email: inputRefOwnerEmail.current.value,
            startDate: inputRefStartDate.current.value,
            endDate: inputRefEndDate.current.value,
            venueImage: inputRefImage.current.value
        }
    )

    await fetch(process.env.REACT_APP_URI + "/venue_info", {
        headers:{ 'Content-Type': 'application/json'},
        method: 'POST',
        body: venueBoard
    })

    const response = await fetch(process.env.REACT_APP_URI + "/venue_info")

    const json = await response.json()
    console.log(json)
    setVenueName(json)
    setVenueCapacity(json)
    setVenueAddress(json)
    setVenueGeoLocation(json)
    setVenueOwnerEmail(json)
    setVenueStartDate(json)
    setVenueEndDate(json)
    setVenueImage(json)


    alert('Venue has been successfully added')
    window.location.reload()
  }

  return (
    <div className='add-venue-page'>
      <h1>Enter details of your venue</h1>
      <form class="form-group">
        <div class="form-texts">
          <div class="form-input">
            
            <div id="form-elements"><label for="venueName">Give your venue a name  </label></div>
            <div id="form-elements"><input class ="input-field" ref = {inputRefName} type="text" id="venueName" placeholder="venueName" ></input></div>


            <div id="form-elements"><label for="venueCapacity">What is your venue capacity?  </label></div>
            <div id="form-elements"><input class ="input-field" ref = {inputRefCapacity} type="number" id="venueCapacity" placeholder="venueCapacity"></input></div>
      

        
            <div id="form-elements"><label for="venueAddress">Enter venue address  </label></div>
            <div id="form-elements"><input class ="input-field" ref = {inputRefAddress} type="text" id="venueAddress" placeholder="venueAddress"></input></div>
          

          
            <div id="form-elements"><label for="venueGeoLocation">Enter Geolocation  </label></div>
            <div id="form-elements"><input class ="input-field" ref = {inputRefGeoLocation} type="text" id="venueGeoLocation" placeholder="venueGeoLocation"></input></div>
     

            <div id="form-elements"><label for="venueImage">Please provide an image URL of your venue  </label></div>
            <div id="form-elements"><input class ="input-field" ref = {inputRefImage} type="text" id="venueImage" placeholder="venueImage"></input></div>


            <div id="form-elements"><label for="venueOwnerEmail">Enter your email  </label></div>
            <div id="form-elements"><input class ="input-field" ref = {inputRefOwnerEmail} id="venueOwnerEmail" placeholder="venueEmailOwner"/></div>
      

            <div id="form-elements"><label for="venueStartDate">When will your venue be available from?  </label></div>
            <div id="form-elements"><input class ="form-control input-sm" ref = {inputRefStartDate} type="date" id="venueStartDate" placeholder="venueStartDate"></input></div>
      
      
            <div id="form-elements"><label for="venueEndDate">When will your venue be available to?  </label></div>
            <div id="form-elements"><input class ="form-control input-sm" ref = {inputRefEndDate} type="date" id="venueEndDate" placeholder="venueEndDate"></input></div>
        
           </div>
        </div>
     </form>

      <div className='button-container'>
          <button className='button-area-item' id="submit" onClick={PostVenueName}>SUBMIT</button>
          <Link to='/'>
          <button className='button-area-item' id="back-to-home">Back to Homepage</button>
          </Link>
      </div>

    </div>
  )
}

export default AddVenuePage;