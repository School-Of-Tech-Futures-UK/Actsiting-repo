import React from 'react'
import './banner.css'
import { Button } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-info'>
            <p id="banner-welcome">Welcome to ActSiting</p>
            <p id="banner-message">It's time to get 'Actcited'... with venue hosting made easy!             <b></b></p>
            <p id="banner-instruction">Click on the <em>ADD VENUE </em>  button below to get started</p>
            <Link to='/add-venue' className='banner-info-button'>
              <Button variant='outlined' id='add-venue-button'>
                  Add New Venue
              </Button>
              </Link>
        </div>
    </div>
  )
}

export default Banner