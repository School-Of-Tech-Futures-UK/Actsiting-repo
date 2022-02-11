import React from 'react'
import './homepage.css'
import Banner from './banner'
import VenueCard from './venueCard'
import Footer from './footer'
//import App from './App'

function Homepage() {
  return (
    <div className='homepage'>
      <Banner />
      <div className='homepage-venue-card'>
        <VenueCard
          src="https://th.bing.com/th/id/R.23161c2d6e534bbdec393e551e525f65?rik=q2Hw%2fm95gw3fkg&pid=ImgRaw&r=0"
          venueName="Home 1"
          venueAddress="London, UK"
          venuePrice="£100/night"
          // venuePhoto={"https://th.bing.com/th/id/R.875aaf37df57e6bb69f52fcb9cf99df7?rik=UyRR31WJ%2bRzVwQ&pid=ImgRaw&r=0"}
          // venueName={document.getElementById('venueName').value}
          // venueAddress={document.getElementById('venueAddress').value}
          // venuePrice={document.getElementById('venuePrice').value}
        />
        <VenueCard
          src="https://th.bing.com/th/id/R.9bfe4c68cd6beeed1be7eb251bfe627f?rik=XgF0GPvWi38RCA&pid=ImgRaw&r=0"
          venueName="Home 2"
          venueAddress="Cambridge, UK"
          venuePrice="£70/night"
        />
        <VenueCard
          src="https://cdn.homes.com/cgi-bin/readimage/02f2f8e82df8a3e48e7ac6022b3c1d9f/393-maple-ave-swansea-ma-02777-1.jpg"
          venueName="Home 3"
          venueAddress="Swansea, UK"
          venuePrice="£60/night"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage