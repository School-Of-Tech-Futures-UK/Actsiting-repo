/* this is our main parent component that every
other component gets passed through/re-routed through
*/

import React from 'react';
import Homepage from './homepage';
import Header from './header';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddVenuePage from './addVenuePage';
import VenueSummaryPage from './venueSummaryPage';


function MainApp() {
    return (
        <>
            <Router>
            <Header />

            <Switch>
                <Route path="/add-venue">
                    <AddVenuePage />
                </Route>
                <Route path="/venue-summary">
                    <VenueSummaryPage />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>

            <Footer />
            </ Router>
        </>
    )

}

export default MainApp;

