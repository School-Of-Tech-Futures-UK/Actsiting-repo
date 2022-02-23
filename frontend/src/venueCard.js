import React, { useState } from 'react'
import './venueCard.css'
import VenueSummaryPage from './venueSummaryPage'
import AddVenuePage from './addVenuePage'

function VenueCard({src, venueName, venueAddress}) {
   
  return (
    <div className='venue-card-item'>
      <img src={src} alt="venue with text description"/>
      <div className='venue-card-item-info'>
        <h2>{venueName}</h2>
        <h4>{venueAddress}</h4>
        <button>Open Venue Summary</button>
      </div>
    </div>
  )
}

export default VenueCard