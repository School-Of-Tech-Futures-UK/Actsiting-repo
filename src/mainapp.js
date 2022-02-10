/* this is our main parent component that every
other component gets passed/rendered through
*/

import React from 'react'


function MainApp() {
    return (
        <>
            <AddVenuePage />
            <Homepage />
            <VenueSummaryPage />
        </>
    )

}

export default MainApp;