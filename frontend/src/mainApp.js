/* this is our main parent component that every
other component gets passed through/re-routed through
*/

import React from 'react';
import Homepage from './homepage';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import AddVenuePage from './addVenuePage';
import VenueSummaryPage from './venueSummaryPage';
import {useState, useEffect} from 'react'


function MainApp() {

    const [venues, setVenues] = useState([])
    
    useEffect(() => {
      // Update the document title using the browser API
        fetch(process.env.REACT_APP_URI + "/venue_info")
        .then(response => response.json())
        .then(json => setVenues(json))
        .catch(console.log())
    
        
    }, []);

console.log(venues)

    return (
        <>
            <Router>
            <Header />

            <Switch>

                <Route path="/add-venue">
                    <AddVenuePage />
                </Route>

                <Route path="/venue-summary/:id">
                    <VenueSummaryPage venues={venues} />
                </Route>

                <Route path="/">
                    <Homepage venues={venues} />
                </Route>

            </Switch>

            <Footer />
            </ Router>
        </>
    )

}

export default MainApp;

