import React from 'react';
import Headerbar from './Common/Headerbar';

function Dashboard() {
    return (
        <React.Fragment>
            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                <div className="pcoded-container navbar-wrapper">
                    <Headerbar />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;
