import React from 'react'
import {withRouter} from 'react-router-dom'

function Venue(props) {
    console.log(props)

const filterVenue = props.venues.filter(v => {
  return v.id == props.match.params.id
})[0]

console.log(filterVenue)

  return (
    <div><h1>{filterVenue.name} {filterVenue.id} Summary</h1>
    <p>
    {filterVenue.desc}
    </p>
    </div>
  )
}

export default withRouter(Venue)