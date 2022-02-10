/* this is our main parent component that every
other component gets passed/rendered through
*/

import React from 'react'


function MainApp() {
    return (
        <>
        <h1>Hello World!</h1>
            <AddVenuePage />
            <ShowHomepage />
            <AddVenueSummaryPage />
        </>
    )

}

export default MainApp;