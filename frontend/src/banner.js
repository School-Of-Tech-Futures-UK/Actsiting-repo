import React from 'react'
import './banner.css'
import { Button } from '@material-ui/core'

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-info'>
            <h1>Welcome [user]</h1>
            <h3>It's time to get 'Actsited'... with venue hosting made easy!</h3>
            <Button variant='outlined' className='banner-info-button'>
                Add New Venue
            </Button>
        </div>
    </div>
  )
}

export default Banner