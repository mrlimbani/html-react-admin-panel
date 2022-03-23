import React from 'react';
import Navbar from './Navbar';
import Pro from './Pro';
import Sidebar from './Sidenav';

export default function Profile() {
    return (
        <React.Fragment>
           <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                <div className="pcoded-container navbar-wrapper">
                    <Navbar />
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <nav className="pcoded-navbar">
                                <div className="pcoded-inner-navbar main-menu">
                                    {/* <div className="pcoded-navigatio-lavel">Navigation</div> */}
                                    <Sidebar />
                                </div>
                            </nav>
                            <Pro/>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}
