import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './venueSummaryPage.css'
import Venues from './Venues';

const VenueSummaryPage = () => {

let venue = [
  {name: 'Venue', id:1},
  {name: 'Venue', id:2},
  {name: 'Venue', id:3},
]

  return (
    <>
    <div className='venue-summary-page-body'>
      <Router>
        <h1>I'm the Venue Summary Page</h1>
        {
          venue.map((venue) =>
          <div>
            <Link to={'/venue-summary/'+venue.id + '/' + venue.name}>{venue.name}</Link>
            </div>)
        }
        <Route path='/venue-summary/:id/:name'>
          <Venues />
        </Route>
      </Router>
      <Link to='/'>
          <button>Back to Homepage</button>
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