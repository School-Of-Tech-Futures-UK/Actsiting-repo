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

ReactDOM.render(<MainApp />, document.getElementById('root'));
