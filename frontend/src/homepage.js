import React from 'react'
import './homepage.css'
import Banner from './banner'
import VenueCard from './venueCard'
import Footer from './footer'
//import App from './App'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VenueSummaryPage from './venueSummaryPage'
import { useState, useEffect } from 'react'


function Homepage(props) {
  

  return (
    <>
    <div className='homepage'>
      <Banner />
        <div className='homepage-venue-card-container'>
          
          {props.venues.map(place => <VenueCard venueId={place.venue_id} src={place.venue_image} venueName={place.venue_name} venueAddress={place.venue_address} />)}


            {/* TEST ELEMENT */}
          <VenueCard venueId="1" src="https://static.ra.co/images/events/flyer/2019/10/uk-1026-1311764-front.jpg?dateUpdated=1571407208463" venueName="King's Cross Fortress" venueAddress="London" />
          <VenueCard venueId="1" src="https://static.ra.co/images/events/flyer/2019/10/uk-1026-1311764-front.jpg?dateUpdated=1571407208463" venueName="King's Cross Fortress" venueAddress="London" />
            
        </div>
    </div>
    
    </>
  )
}

export default Homepage





// <VenueCard
// src="https://th.bing.com/th/id/R.23161c2d6e534bbdec393e551e525f65?rik=q2Hw%2fm95gw3fkg&pid=ImgRaw&r=0"
// venueName="Venue 1"
// venueAddress="London, UK"
// />
// </div>
// <div className='homepage-venue-card'>
// <VenueCard
// src="https://th.bing.com/th/id/R.9bfe4c68cd6beeed1be7eb251bfe627f?rik=XgF0GPvWi38RCA&pid=ImgRaw&r=0"
// venueName="Venue 2"
// venueAddress="Cambridge, UK"
// />
// </div>
// <div className='homepage-venue-card'>
// <VenueCard
// src="https://cdn.homes.com/cgi-bin/readimage/02f2f8e82df8a3e48e7ac6022b3c1d9f/393-maple-ave-swansea-ma-02777-1.jpg"
// venueName="Venue 3"
// venueAddress="Swansea, UK"
// />