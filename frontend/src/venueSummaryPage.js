import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './venueSummaryPage.css'
import { useParams } from "react-router-dom";


  function VenueSummaryPage(props) {

    console.log(props)

    const { id } = useParams()

    const venue = props.venues.filter(v => {
      return v.venue_id == id})[0]

    const events = props.showEvents.filter(e => {
      return e.venue_id == venue.venue_id
    });
    console.log(events)

    // let itemNames = nestedObject.filter(
    //   eachObj => eachObj.itemDetails.price === 1500);


    // let eventsArray = []
    // for (let i = 0; i < venue.length; i++) {
    //   for (let j = 0; j < events.length; j++) {
    //     if (events.venue_id === venue.venue_id) {
    //         eventsArray.push(events.venue_id)
    //     } else {
    //      return null
    //     }        
    //   } 
    // }

    // console.log(eventsArray)


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

          <h1>Events for this Venue</h1>  
      <p>{events.map(event => <p>{event.venue_id} , {event.event_id}, {event.date} , {event.status}</p>)}</p>


      <Link to='/'>
          <button id="homepage-button">Back to Homepage</button>
        </Link>
    </div>
    </>
  )}



export default VenueSummaryPage;




// {"event_id":1,"venue_id":1,"date":"2022-03-05T00:00:00.000Z","event_name":"Andre Ice Cold","event_description":"Outkast Show","event_image":"https://numero.twic.pics/images/article/homepage/full/push-cover-andre3000-numero-magazine.jpg?twic=v1/cover=16:10/resize=1900","artist_name":"Outkast","artist_email":"outkast@gigstr.com","genre":"Hip Hop","status":"confirmed"}
