//homepage component -- will pull in the AddVenuePage component as part of its hierarchy

// AddVenuePage feeds into Homepage
// Info populated from VenueSummaryPage updates state in Homepage "venue info" bit
// from homepage wireframe

import React from 'react'
import { useState, useEffect } from "react";
import {} from "./venueCardHomepage.js"



function HomepageAddButton() {
    return (
        
    )
}

function Homepage() {

    const [clickAddVenue, setClickAddVenue] = useState()



    return (
        <>
            <h1>Venue Homepage</h1>
            <section id='add-new-venue'></section>
        </>

    )
}

export default Homepage