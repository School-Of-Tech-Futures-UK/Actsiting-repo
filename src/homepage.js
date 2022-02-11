import React from 'react'
import './homepage.css'
import Banner from './banner'
import VenueCard from './venueCard'

function Homepage() {
  return (
    <div className='homepage'>
      <Banner />
      <div className='homepage-venue-card'>
        <VenueCard />
        <VenueCard />
        <VenueCard />
      </div>
    </div>
  )
}

export default Homepage