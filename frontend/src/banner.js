import React from 'react'
import './banner.css'
import { Button } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-info'>
            <h1>Welcome [user]</h1>
            <h3>It's time to get 'Actcited'... with venue hosting made easy!</h3>
            <Link to='/add-venue' className='banner-info-button'>
              <Button variant='outlined'>
                  Add New Venue
              </Button>
              </Link>
        </div>
    </div>
  )
}

export default Banner