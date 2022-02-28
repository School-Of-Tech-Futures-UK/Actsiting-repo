import React from 'react'
import './homepage.css'
import Banner from './banner'
import VenueCard from './venueCard'
import Footer from './footer'
//import App from './App'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import VenueSummaryPage from './venueSummaryPage'
import { useState, useEffect } from 'react'


function Homepage() {
      
  const [venues, setVenues] = useState([])

// let venues = [
//   {name: 'London', id:1, desc: 'this is a lovely space 1'},
//   {name: 'Manchester', id:2, desc: 'this is a lovely space 2'},
//   {name: 'Newcastle', id:3, desc: 'this is a lovely space 3'},
// ]

useEffect(() => {
  // Update the document title using the browser API
    fetch(process.env.REACT_APP_URI + "/venue_info")
    .then(response => response.json())
    .then(json => setVenues(json))
    .catch(console.log())

    
}, [venues]);


  return (
    <>
    <div className='homepage'>
      <Banner />
        <div className='homepage-venue-card-container'>
          <div className='homepage-venue-card'>
          {venues.map(place => <VenueCard venueId={place.venue_id} src={place.venue_photo} venueName={place.venue_name} venueAddress={place.venue_address} />)}
            </div>
        </div>
    </div>
    </>
  )
}

export default Homepage





// <VenueCard
// src="https://th.bing.com/th/id/R.23161c2d6e534bbdec393e551e525f65?rik=q2Hw%2fm95gw3fkg&pid=ImgRaw&r=0"
// venueName="Venue 1"
// venueAddress="London, UK"
// />
// </div>
// <div className='homepage-venue-card'>
// <VenueCard
// src="https://th.bing.com/th/id/R.9bfe4c68cd6beeed1be7eb251bfe627f?rik=XgF0GPvWi38RCA&pid=ImgRaw&r=0"
// venueName="Venue 2"
// venueAddress="Cambridge, UK"
// />
// </div>
// <div className='homepage-venue-card'>
// <VenueCard
// src="https://cdn.homes.com/cgi-bin/readimage/02f2f8e82df8a3e48e7ac6022b3c1d9f/393-maple-ave-swansea-ma-02777-1.jpg"
// venueName="Venue 3"
// venueAddress="Swansea, UK"
// />