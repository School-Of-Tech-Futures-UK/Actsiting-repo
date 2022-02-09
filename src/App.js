import React from 'react'
import './App.css';



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
          <button>SUBMIT</button>
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

export default App;
