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
    const [showEvents, setShowEvents] = useState([])

    
    useEffect(() => {
        // fetch the venues API and update showEvent state
        fetch(process.env.REACT_APP_URI + "/venue_info")
        .then(response => response.json())
        .then(json => setVenues(json))
        .catch(console.log())
    }, []);
    
    useEffect(() => {
        // fetch the events API and update showEvent state       
          fetch(process.env.REACT_APP_EVENT_API + "/events")
          .then(response => response.json())
          .then(json => setShowEvents(json))
          .catch(console.log())
      }, []);

console.log('value of venues', venues)
console.log('value of events', showEvents)
console.log('type of venue_id(mainapp):', typeof venues.venue_id)


    return (
        <>
            <Router>
            <Header />

            <Switch>

                <Route path="/add-venue" component={AddVenuePage}>
                    <AddVenuePage />
                </Route>

                <Route path="/venue-summary/:id" component={VenueSummaryPage}>
                    <VenueSummaryPage venues={venues} showEvents={showEvents} />
                </Route>

                <Route exact path="/" component={Homepage}>
                    <Homepage venues={venues} showEvents={showEvents} />
                </Route>

            </Switch>

            <Footer />
            </ Router>
        </>
    )

}

export default MainApp;

