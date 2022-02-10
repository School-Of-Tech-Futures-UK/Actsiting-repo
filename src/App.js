import React from 'react'
import './App.css';
import { ShowHomepage } from "./homepage.js"

/* when submit button clicked then it pushes the new venue details
into the <ul> tag in the homepage component (in homepage.js) */


/* function AddVenueButton(e) {
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
} */


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <form action="">
      <h2 class="heading">LIST YOUR VENUE</h2>

      {/* venueName input field */}
      <div class="controls">   
        <label for="Venue name">Venue name </label>
        <input type="text" id="venueName" placeholder="venueName"></input>    
      </div>

      {/* venueOwnerEmail input field */}
      <div class="controls">   
        <label for="Email">Email </label>
        <input type="text" id="venueOwnerEmail" placeholder="venueOwnerEmail"></input>    
      </div>

      {/* venueCapacity input field */}
      <div class="controls">   
        <label for="Capacity">Capacity </label>
        <input type="number" id="venueCapacity" placeholder="venueCapacity"></input>    
      </div>

      {/* venueAddress input field */}
      <div class="controls">   
        <label for="Address">Address </label>
        <input type="text" id="venueAddress" placeholder="venueAddress"></input>    
      </div>

      {/* Opening Hours input field */}
      <div class="controls">   
        <label for="Opening Hours">Opening Hours </label>
        <input type="time" id="venueStartTime" placeholder="venueOpeningHours" value="09:00"></input> to 
        <input type="time" id="venueEndTime" placeholder="venueOpeningHours" value="20:00"></input>   
      </div>

      {/* Availability input field */}
      <div class="controls">   
        <label for="Available Dates">Available Dates </label>
        <input type="date" id="venueStartDate" placeholder="venueAvailability" value="<?php echo date('Y-m-d'); ?>"></input> to 
        <input type="date" id="venueEndDate" placeholder="venueAvailability" value="<?php echo date('Y-m-d'); ?>"></input>   
      </div>

      </form>

      <br></br>
        <div>
          <button id="submit" onclick="addVenue(event);">SUBMIT </button> 
        </div>
        {/* <div>
        <ul id="venuelist"> </ul>
        </div> */}
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

//comments by Anna for tomorrow
/*
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

export default App;
