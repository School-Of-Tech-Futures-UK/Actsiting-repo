import React, { useState } from 'react'
import './venueCard.css'
import VenueSummaryPage from './venueSummaryPage'
import AddVenuePage from './addVenuePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from "styled-components";



function VenueCard({src, venueName, venueAddress, venueId}) {
  console.log('type of venue_id(venuecard):', typeof venueId)

  return (
    <div className='venue-card-item'>
      <img src={src} alt="venue with text description"/>
      <br></br>
      <div className='venue-card-item-info'> 
        <h2>{venueName}</h2>
        <h4>{venueAddress}</h4>
        <Link to={'/venue-summary/' + venueId}>
          <button id="summary-button">Open Venue Summary</button>
        </Link>
      </div>
    </div>
  )
}

export default VenueCard