import React, { useState } from 'react'
import './venueCard.css'
import VenueSummaryPage from './venueSummaryPage'
import AddVenuePage from './addVenuePage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from "styled-components";



function VenueCard({src, venueName, venueAddress, venueId}) {
  
  // const linkStyle = {
  //   padding: "1rem",
  //   fontFamily: "inherit",
  //   fontWeight: "bold",
  //   fontSize: "1rem",
  //   margin: "1rem",
  //   border: "2px solid #ff7779",
  //   background: "transparent",
  //   borderRadius: "5%"
  // };

  return (
    <div className='venue-card-item'>
      <img src={src} alt="venue with text description"/>
      <div className='venue-card-item-info'>
        <h2>{venueName}</h2>
        <h4>{venueAddress}</h4>
        <Link to={'/venue-summary/' + venueId}>
        {/* to add inside 1st Link tag >>> style={linkStyle} */}
          <button>Open Venue Summary</button>
        </Link>
      </div>
    </div>
  )
}

export default VenueCard