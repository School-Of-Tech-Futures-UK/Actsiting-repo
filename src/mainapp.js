/* this is our main parent component that every
other component gets passed through/re-routed through
*/

import React from 'react';
import App from './App';
import Homepage from './homepage';


// to change <App /> to instead be <AddVenuePage /> once page created
function MainApp() {
    return (
        <>
        <h1>Hello World from MainApp rendered!</h1>
        <Homepage />
        </>
    )

}

export default MainApp;