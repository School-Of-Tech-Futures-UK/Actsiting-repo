/* this is our main parent component that every
other component gets passed through/re-routed through
*/

import React from 'react';
import App from './App';
import Homepage from './homepage';
import Header from './header'


// to change <App /> to instead be <AddVenuePage /> once page created
function MainApp() {
    return (
        <>
        <Header />
        <Homepage />
        </>
    )

}

export default MainApp;