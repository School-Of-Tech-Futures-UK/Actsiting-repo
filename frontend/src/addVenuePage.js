import React from 'react'
import './addVenuePage.css';
import { useState, useEffect, useRef } from 'react';
    
// function ListOfVenue(){
//   return (
//     <div>
//       <ul id="venueList"></ul>
//       </div>
//   )
// }




function AddVenuePage() {
  const [venueName, setVenueName] = useState([])
  const inputRef = useRef(null)

  // const edmundVenue = setVenueName(venueName = {GetVenueInfo()})

  const PostVenueName = async (e) => {
    console.log(inputRef)
    const venueBoard = JSON.stringify(
        {   
            venue: inputRef.current.value
        }
    )
    
    await fetch('http://localhost:3000/venue_info', {
        headers:{ 'Content-Type': 'application/json'},
        method: 'POST',
        body: venueBoard
    })

    const response = await fetch('http://localhost:3000/venue_info')

    const json = await response.json()
    console.log(json)
    setVenueName(json)
  }
  

  return (
    <div className='add-venue-page'>
      
      <input ref = {inputRef} type="text" id="venueName" placeholder="venueName"></input>
      
      <button id="submit" onClick={PostVenueName}>SUBMIT</button> 
      
      <p>{venueName.map(place => <p>{place.venue}</p>)}</p>
      
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
    const startTime = document.getElementById('venueStartTime').value //syntax?
    const endTime = document.getElementById('venueEndTime').value //syntax?
    const email = document.getElementById('venueOwnerEmail').value
    const startDate = document.getElementById('venueStartDate').value //syntax?
    const endDate = document.getElementById('venueEndDate').value //syntax?
  
  
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