//homepage component -- will pull in the AddVenuePage component as part of its hierarchy

// AddVenuePage feeds into Homepage
// Info populated from VenueSummaryPage updates state in Homepage "venue info" bit
// from homepage wireframe

import React from 'react'
import { useState, useEffect } from "react";


function HomepageVenueImage() {
    return (

    )
}


function HomepageVenueDetails() {
    return (
        
    )
}

function HomepageEditButton() {
    return (
        
    )
}

function HomepageAddButton() {
    return (
        
    )
}

function Homepage() {

    const [editVenue, setEditVenue] = useState([]);
    const [addVenue, setAddVenue] = useState()

    return (

    )
}

export default Homepage