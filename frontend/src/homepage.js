import React from 'react'
import './homepage.css'
import Banner from './banner'
import VenueCard from './venueCard'
import Footer from './footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VenueSummaryPage from './venueSummaryPage'
import { useState, useEffect } from 'react'


function Homepage(props) {
  
  console.log('type of venue_id(homepage):', typeof props.venues.venue_id)


  return (
    <>
    <div className='homepage'>
      <Banner />
        <div className='homepage-venue-card-container'>
          
          {props.venues.map(place => <VenueCard venueId={place.venue_id} src={place.venue_image} venueName={place.venue_name} venueAddress={place.venue_address} />)}

            {/* TEST ELEMENT */}
          {/* <VenueCard venueId="1" src="https://static.ra.co/images/events/flyer/2019/10/uk-1026-1311764-front.jpg?dateUpdated=1571407208463" venueName="King's Cross Fortress" venueAddress="London" />
          <VenueCard venueId="1" src="https://static.ra.co/images/events/flyer/2019/10/uk-1026-1311764-front.jpg?dateUpdated=1571407208463" venueName="King's Cross Fortress" venueAddress="London" />
             */}
        </div>
    </div>

    </>
  )
}

export default Homepage
