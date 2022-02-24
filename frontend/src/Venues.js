import React from 'react'
import {withRouter} from 'react-router-dom'

function Venues(props) {
  return (
    <div><h1>{props.match.params.name} {props.match.params.id} Summary</h1></div>
  )
}

export default withRouter(Venues)