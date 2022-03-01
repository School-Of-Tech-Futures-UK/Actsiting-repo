import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './venueSummaryPage.css'
import Venue from './Venue';
import { useParams } from "react-router-dom";
import AddVenuePage from './addVenuePage'



  function VenueSummaryPage(props) {

    const { id } = useParams()

console.log(id)

const venue = props.venues.filter(v => {
  return v.venue_id == id
})[0]

  return (
    <>
    <div className='venue-summary-page-body'>
          <h1>Venue Summary Page</h1>  
          <div><strong>Venue ID</strong>:  {venue.venue_id}</div>  
          <div><strong>Venue Name</strong>:  {venue.venue_name}</div> 
          <div><strong>Venue Capacity</strong>: {venue.venue_capacity}</div>  
          <div><strong>Venue Address</strong>: {venue.venue_address}</div>  
          <div><strong>Venue Geolocation</strong>:  {venue.venue_geolocation}</div>  
          <div><strong>Email</strong>:  {venue.venue_owner_email}</div>  
          <div><strong>Venue Start Date</strong>:  {venue.venue_start_date} </div> 
          <div><strong>Venue End Date</strong>:  {venue.venue_end_date}</div>
          <br></br>
      <Link to='/'>
          <button id="homepage-button">Back to Homepage</button>
        </Link>
    </div>
    </>
  )}



export default VenueSummaryPage;

































// THIS IS THE MODAL



// <>

// {/* <div class="container" >
//       <div className="modal">
//         <h2>This is a Modal</h2>
//         <button onClick={() => setIsOpen(false)}>X</button>
//       </div>
//     </div>,
//  */}

//  {/* TESTING BOOTSTRAP MODAL BELOW */}

//  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

     
//     </>
    
//   )};