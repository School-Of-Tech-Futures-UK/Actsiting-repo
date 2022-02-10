/* homepage component -- will pull in the relevant
components from venueSummaryPage and AddVenuePage files
as part of its hierarchy */

// AddVenuePage feeds into Homepage
// Info populated from VenueSummaryPage updates state in Homepage "venue info" bit
// from homepage wireframe

import React from 'react'
import { useState, useEffect } from "react";
import { HomepageVenueImage, HomepageVenueDetails, HomepageEditButton, VenueCard } from "./venueCardHomepage.js"


function HomepageAddButton() {
    return (
        
    )
}

function ShowHomepage() {

    const [clickAddVenue, setClickAddVenue] = useState()



    return (
        <>
            <h1>Venue Homepage</h1>
            <section id='venue-card-container'>
                <ul id='venue-card-item'></ul>
            </section>
            <button type="button" name="button" id="add-new-venue-button" onClick="HomepageAddButton(event);">Add New Venue</button>
        </>

    )
}

export default ShowHomepage