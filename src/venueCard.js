import React from 'react'
import './venueCard.css'

function VenueCard({src, venueName, venueAddress, venuePrice /*venuePhoto*/ }) {
  return (
    <div className='venue-card-item'>
      <img src={src} /*<img src={venuePhoto}*/ alt="" />
      <div className='venue-card-item-info'>
        <h2>{venueName}</h2>
        <h4>{venueAddress}</h4>
        <h3>{venuePrice}</h3>
      </div>
    </div>
  )
}

export default VenueCard