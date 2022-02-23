import React, { useState } from 'react'
import styles from './venueCard.css'
import VenueSummaryPage from './venueSummaryPage'

function VenueCard({src, venueName, venueAddress, venuePrice}) {

  // const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='venue-card-item'>
      <img src={src} /*<img src={venuePhoto}*/ alt="" /*onClick={() => setIsOpen(true)}*/  />
      {/* {isOpen && <VenueSummaryPage setIsOpen={setIsOpen} />} */}

      {/* {isOpen ? <VenueSummaryPage setIsOpen={setIsOpen} /> : null} */}

      
      
      <div className='venue-card-item-info'>
        <h2>{venueName}</h2>
        <h4>{venueAddress}</h4>
        <h3>{venuePrice}</h3>
      </div>
    </div>
  )
}

export default VenueCard

//THIS IS THE APP