import React from 'react'
import './addVenuePage.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Map from './map.js'

console.log("edmund is a spoon")
   


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
  const [venueDescription, setVenueDescription] = useState([])
  const inputRefDescription = useRef(null) 


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
            image: inputRefImage.current.value,
            description: inputRefDescription.current.value
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
    setVenueImage(json) //set venue image as json for now?
    setVenueDescription(json)
  }
  

  return (
    <div className='add-venue-page'>
      
      <form>
      <div class="form-group">
        <label for="venueName">Give your venue a name  </label>
        <input ref = {inputRefName} type="text" id="venueName" placeholder="venueName"></input>
      </div>
      <div>
        <label for="venueCapacity">What is your venue capacity?  </label>
        <input ref = {inputRefCapacity} type="number" id="venueCapacity" placeholder="venueCapacity"></input>
      </div> 
      <div>
        <label for="venueAddress">Enter venue address  </label>
        <input ref = {inputRefAddress} type="text" id="venueAddress" placeholder="venueAddress"></input>
      </div> 
      <div>
        <label for="venueGeoLocation">Enter Geolocation  </label>
        <input ref = {inputRefGeoLocation} type="text" id="venueGeoLocation" placeholder="venueGeoLocation"></input>
      </div>
      <div>
<<<<<<< HEAD
      <input ref = {inputRefImage} type="text" id="venueImage" placeholder="venueImage"></input>
      <input ref = {inputRefDescription} type="text" id="venueDescription" placeholder="venueDescription"></input>
      </div>
=======
        <label for="venueOwnerEmail">Enter your email  </label>
        <input ref = {inputRefOwnerEmail} type="text" id="venueOwnerEmail" placeholder="venueEmailOwner"></input>
      </div>
      <div>
        <label for="venueStartDate">When will your venue be available from?  </label>
        <input ref = {inputRefStartDate} type="date" id="venueStartDate" placeholder="venueStartDate"></input>
      </div>
      <div>
        <label for="venueEndDate">When will your venue be available to?  </label>
        <input ref = {inputRefEndDate} type="date" id="venueEndDate" placeholder="venueEndDate"></input></div>
     </form>
>>>>>>> 07d66a9435ba01cb3bc7a5715c965a3b0b0d8a52

     <div><Map /></div>

      <div>
        <button id="submit" onClick={PostVenueName}>SUBMIT</button> 
      </div>
      


      

      
      <p>{venueName.map(place => <p>{place.venue_id} , {place.venue_name}, {place.venue_capacity} , {place.venue_address} , {place.venue_geolocation} , {place.venue_owner_email} , {place.venue_start_date} , {place.venue_end_date}, {place.venue_image}, {place.venue.description}</p>)}</p>
      {/* <p>{venueCapacity.map(place => <p>{place.venue_id} , {place.venue_capacity}</p>)}</p>
      <p>{venueAddress.map(place => <p>{place.venue_id} , {place.venue_address}</p>)}</p>
      <p>{venueGeoLocation.map(place => <p>{place.venue_id} , {place.venue_geolocation}</p>)}</p> */}

    </div>
  )
}

export default AddVenuePage;

//-------------------------------------------------------------------

// function AddVenueButton() {
//   console.log('i was clicked')
//   const getVenueInfo = async () => {
//     const resp = await fetch('http://localhost:3000/get_venue_info') 
//     console.log('i was clicked twice')
//     return await resp.json()
//   }

//   const addVenue = async (e) => {
//     const name = document.getElementById('venueName').value 
  
//     const info = JSON.stringify(
//         {
//             venueName: name
//         }
//     )
  
//     await fetch('http://localhost:3000/venue_info', {
//         headers: { 'Content-Type': 'application/json' },
//         method: 'POST',
//         body: info
//     })
  
     

//     document.getElementById('venuelist').innerHTML = ''

//     getVenueInfo().then(
//         json => json.forEach(info => {
//             const listElement = document.createElement('li')
//             listElement.innerHTML = `Name: ${info.venueName}`
//             document.getElementById('venuelist').appendChild(listElement)
//         }
//         )
//         console.log(document.getElementById('venuelist'))
//   }
// }

// function AddVenueName() {
//   return (
//     <div>
//       <input type="text" id="venueName" placeholder="venueName"></input>
//       </div>
//   )
// }

// function AddVenueButton(){
//   return (
//     <div>
//       <button id="submit" onClick=({onButtonClick})>SUBMIT </button> 
//    </div>
//   )
//   }


//-------------------------------------------------

/* when submit button clicked then it pushes the new venue details
into the <ul> tag in the homepage component (in homepage.js)


 function AddVenueButton(e) {
  const getVenueInfo = async () => {
    const resp = await fetch('http://localhost:3000/get_venue_info')
    return await resp.json()
  }
  
  
  const addVenue = async (e) => {
    //ID!!!
    const name = document.getElementById('venueName').value
    //Photo!!!
    const capacity = document.getElementById('venueCapacity').value
    const address = document.getElementById('venueAddress').value
    const startTime = document.getElementById('venueStartTime').value //syntax? DO WE NEED THIS??
    const endTime = document.getElementById('venueEndTime').value //syntax? DO WE NEED THIS??
    const email = document.getElementById('venueOwnerEmail').value
    const startDate = document.getElementById('venueStartDate').value //syntax? DO WE NEED THIS??
    const endDate = document.getElementById('venueEndDate').value //syntax? DO WE NEED THIS??
    add availability input field 
    add description input field 
    pull in Booking Status via event ID from Acscent
    stretch goal user review from Actcept to show on venue page
  
  
    const info = JSON.stringify(
        {
            //venueID: ID,
            venueName: name,
            venueOwnerEmail: email,
            venueCapacity: capacity,
            venueAddress: address,
            venueStartTime: startTime,
            venueEndTime: endTime,
            venueStartDate: startDate,
            venueEndDate: endDate
        }
    )
  
    await fetch('http://localhost:3000/venue_info', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: info
    })
  
    document.getElementById('venue-card-item').innerHTML = ''
    getVenueInfo().then(
        json => json.forEach(info => {
            const listElement = document.createElement('li')
            listElement.innerHTML = `Name: ${info.venueName}, Capacity: ${info.capacity}, Location: ${info.venueGeoLocation}`
            document.getElementById('venue-card-item').appendChild(listElement)
        }
        ))
  
  }
}

//need to add price input field as well (venuePrice) e.g. price per day
//need to add Regular expression functions to validate each input field
*/
/*//
function AddVenuePage() {
  return (
    <div className="App">
      <header className="App-header">
        
      <form action="">
      <h2 class="heading">LIST YOUR VENUE</h2>

      <div class="controls">   
        <label for="Venue name">Venue name </label>
        <input type="text" id="venueName" placeholder="venueName"></input>    
      </div>

      <div class="controls">   
        <label for="Email">Email </label>
        <input type="text" id="venueOwnerEmail" placeholder="venueOwnerEmail"></input>    
      </div>

      <div class="controls">   
        <label for="Capacity">Capacity </label>
        <input type="number" id="venueCapacity" placeholder="venueCapacity"></input>    
      </div>

      <div class="controls">   
        <label for="Address">Address </label>
        <input type="text" id="venueAddress" placeholder="venueAddress"></input>    
      </div>

      <div class="controls">   
        <label for="Opening Hours">Opening Hours </label>
        <input type="time" id="venueStartTime" placeholder="venueOpeningHours" value="09:00"></input> to 
        <input type="time" id="venueEndTime" placeholder="venueOpeningHours" value="20:00"></input>   
      </div>

      <div class="controls">   
        <label for="Available Dates">Available Dates </label>
        <input type="date" id="venueStartDate" placeholder="venueAvailability"></input> to 
        <input type="date" id="venueEndDate" placeholder="venueAvailability"></input>   
      </div>

      </form>

    <br></br>

<div>
<ul id="venuelist"> </ul>
</div>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
</div>
);
}

export default AddVenuePage;


/*
//comments by Anna for tomorrow
1. i have added server with get and post request
2. getvenueinfo fetching data
3. addVenue added:
4. reads values from fields added by Mundy and packs into json that is posts later
5. submit button has now onclick
6. prints venues list under submit button
P.S. problems that might occur when uncomment:
1. might need to change link localhost:3000 into .../get_venue_info or .../venue_info, later different one
2. Note to Mundy: venuelist and everything else need to rendered accordingly to react rules, u did this in pure html
3. i might need to change how date/time values are read from text fields
*/