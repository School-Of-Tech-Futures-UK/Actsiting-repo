import React from 'react' 
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './venueSummaryPage.css'
import { useParams } from "react-router-dom";


  function VenueSummaryPage(props) {

    // const [accept, setAccept] = useState(false)
    // const [decline, setDecline] = useState(false)

    // const acceptToggled = () => setAccept(previous => !previous);

    // const declineToggled = () => setDecline(previous => !previous);

    const acceptEventRequest = async (id) => {
      console.log(id)
      const confirmEvent = JSON.stringify(
        {
          event_id: id, 
          status: 'confirmed',
        }
      )
  
        await fetch(process.env.REACT_APP_EVENT_API + "/event/status", {
          headers:{ 'Content-Type': 'application/json'},
          method: 'PUT',
          body: confirmEvent
      })

      alert('You have successfully accepted this event request')
      window.location.reload()
    }

    const declineEventRequest = async (id) => {
      const declineEvent = JSON.stringify(
        {
          event_id: id, 
          status: 'declined',
        }
      )

        await fetch(process.env.REACT_APP_EVENT_API + "/event/status", {
          headers:{ 'Content-Type': 'application/json'},
          method: 'PUT',
          body: declineEvent
      })
      
      alert('You have successfully declined this event request')
      window.location.reload()
    }

    const { id } = useParams()

    console.log(id)
    console.log(props.venues)
    const venue = props.venues.filter(v => {
      return v.venue_id == id})[0]
    
      if (venue === undefined) {
        return <div>Loading...</div>
      }

    const events = props.showEvents.filter(e => {
      return e.venue_id === venue.venue_id
    });

    // console.log('type of venue_id(summarypage):', typeof venue.venue_id)
  

  return (
    <>
    <div className='venue-summary-page-body'>
          <h1>Venue Summary Page</h1>
          <div class='summary-details'>  
          <div><strong key={venue.venue_id}>Venue ID</strong>:  {venue.venue_id}</div>  
          <div><strong>Venue Name</strong>:  {venue.venue_name}</div> 
          <div><strong>Venue Capacity</strong>: {venue.venue_capacity}</div>  
          <div><strong>Venue Address</strong>: {venue.venue_address}</div>  
          <div><strong>Venue Geolocation</strong>:  {venue.venue_geolocation}</div>  
          <div><strong>Email</strong>:  {venue.venue_owner_email}</div>  
          <div><strong>Venue Start Date</strong>:  {venue.venue_start_date} </div> 
          <div><strong>Venue End Date</strong>:  {venue.venue_end_date}</div>
          </div>
          <br></br>

          <h1>Events for this Venue</h1>  
      <div>{events.map(event =><div class='event-details'><strong key={event.venue_id}>Venue ID:</strong> {event.venue_id} , <strong>Event ID:</strong> {event.event_id}, <strong>Event Date:</strong> {event.date} , <strong>Event Booking Status:</strong> {event.status} <button id="accept-button" onClick={()=> acceptEventRequest(event.event_id)}>Accept</button> <button id="decline-button" onClick={() => declineEventRequest(event.event_id)}>Decline</button></div>)}</div>

      <div>
      <Link to='/'>
          <button id="homepage-button">Back to Homepage</button>
        </Link>
        </div>
        <br></br>
    </div>
    </>
  )}



export default VenueSummaryPage;

