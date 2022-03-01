import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './venueSummaryPage.css'
import { useParams } from "react-router-dom";


  function VenueSummaryPage(props) {

    console.log(props)

    const { id } = useParams()

    const venue = props.venues.filter(v => {
      return v.venue_id == id
    })[0]

  return (
    <>
    <div className='venue-summary-page-body'>
        <h1>I'm the Venue Summary Page</h1> 
        <h2>Venue: {venue.venue_name} Info </h2> 
          <p>{venue.venue_id} , {venue.venue_name}, {venue.venue_capacity} , {venue.venue_address} , {venue.venue_geolocation} , {venue.venue_owner_email} , {venue.venue_start_date} , {venue.venue_end_date}</p>
          
          <h2>Event Info for Venue: {venue.venue_name}</h2>
          {/* <p>{events.venue_id} , {events.event_id} , {events.date} , {events.event_name} , {events.status}</p> */}
      <Link to='/'>
          <button>Back to Homepage</button>
        </Link>
    </div>
    </>
  )}



export default VenueSummaryPage;




// {"event_id":1,"venue_id":1,"date":"2022-03-05T00:00:00.000Z","event_name":"Andre Ice Cold","event_description":"Outkast Show","event_image":"https://numero.twic.pics/images/article/homepage/full/push-cover-andre3000-numero-magazine.jpg?twic=v1/cover=16:10/resize=1900","artist_name":"Outkast","artist_email":"outkast@gigstr.com","genre":"Hip Hop","status":"confirmed"}
