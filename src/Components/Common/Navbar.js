import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <React.Fragment>
            <nav className="navbar header-navbar pcoded-header">
                        <div className="navbar-wrapper">

                            <div className="navbar-logo">
                                <a className="mobile-menu" id="mobile-collapse" href="#!">
                                    <i className="feather icon-menu"></i>
                                </a>
                                <a href="index.html">
                                    <img className="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" />
                                </a>
                                <a className="mobile-options">
                                    <i className="feather icon-more-horizontal"></i>
                                </a>
                            </div>

                            <div className="navbar-container">
                                <ul className="nav-left">
                                    <li className="header-search">
                                        <div className="main-search morphsearch-search">
                                            <div className="input-group">
                                                <span className="input-group-addon search-close"><i className="feather icon-x"></i></span>
                                                <input type="text" className="form-control" />
                                                <span className="input-group-addon search-btn"><i className="feather icon-search"></i></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#!" onclick="javascript:toggleFullScreen()">
                                            <i className="feather icon-maximize full-screen"></i>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="nav-right">
                                    <li className="header-notification">
                                        <div className="dropdown-primary dropdown">
                                            <div className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="feather icon-bell"></i>
                                                <span className="badge bg-c-pink">5</span>
                                            </div>
                                            <ul className="show-notification notification-view dropdown-menu"
                                                data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                <li>
                                                    <h6>Notifications</h6>
                                                    <label className="label label-danger">New</label>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img className="d-flex align-self-center img-radius"
                                                            src="assets/images/avatar-4.jpg"
                                                            alt="Generic placeholder image" />
                                                        <div className="media-body">
                                                            <h5 className="notification-user">John Doe</h5>
                                                            <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                                                                elit.</p>
                                                            <span className="notification-time">30 minutes ago</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img className="d-flex align-self-center img-radius"
                                                            src="assets/images/avatar-3.jpg"
                                                            alt="Generic placeholder image" />
                                                        <div className="media-body">
                                                            <h5 className="notification-user">Joseph William</h5>
                                                            <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                                                                elit.</p>
                                                            <span className="notification-time">30 minutes ago</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <img className="d-flex align-self-center img-radius"
                                                            src="assets/images/avatar-4.jpg"
                                                            alt="Generic placeholder image" />
                                                        <div className="media-body">
                                                            <h5 className="notification-user">Sara Soudein</h5>
                                                            <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer
                                                                elit.</p>
                                                            <span className="notification-time">30 minutes ago</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="header-notification">
                                        <div className="dropdown-primary dropdown">
                                            <div className="displayChatbox dropdown-toggle" data-toggle="dropdown">
                                                <i className="feather icon-message-square"></i>
                                                <span className="badge bg-c-green">3</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-profile header-notification">
                                        <div className="dropdown-primary dropdown">
                                            <div className="dropdown-toggle" data-toggle="dropdown">
                                                <img src="assets/images/avatar-4.jpg" className="img-radius"
                                                    alt="User-Profile-Image" />
                                                <span>John Doe</span>
                                                <i className="feather icon-chevron-down"></i>
                                            </div>
                                            <ul className="show-notification profile-notification dropdown-menu"
                                                data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                                <li>
                                                    <a href="#!">
                                                        <i className="feather icon-settings"></i> Settings
                                                    </a>
                                                </li>
                                                <Link to='/profile'>
                                                <li>
                                                    <a href="default/user-profile.html">
                                                        <i className="feather icon-user"></i> Profile
                                                    </a>
                                                </li>
                                                </Link>
                                                <li>
                                                    <a href="default/email-inbox.html">
                                                        <i className="feather icon-mail"></i> My Messages
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="default/auth-lock-screen.html">
                                                        <i className="feather icon-lock"></i> Lock Screen
                                                    </a>
                                                </li>
                                                <Link to='/'>
                                                <li>
                                                    <a href="default/auth-normal-sign-in.html">
                                                        <i className="feather icon-log-out"></i> Logout
                                                    </a>
                                                </li>
                                                </Link>
                                            </ul>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div id="sidebar" className="users p-chat-user showChat">
                        <div className="had-container">
                            <div className="card card_main p-fixed users-main">
                                <div className="user-box">
                                    <div className="chat-inner-header">
                                        <div className="back_chatBox">
                                            <div className="right-icon-control">
                                                <input type="text" className="form-control  search-text" placeholder="Search Friend"
                                                    id="search-friends" />
                                                <div className="form-icon">
                                                    <i className="icofont icofont-search"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-friend-list">
                                        <div className="media userlist-box" data-id="1" data-status="online"
                                            data-username="Josephin Doe" data-toggle="tooltip" data-placement="left"
                                            title="Josephin Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius img-radius"
                                                    src="assets/images/avatar-3.jpg" alt="Generic placeholder image " />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Josephin Doe</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online"
                                            data-username="Lary Doe" data-toggle="tooltip" data-placement="left"
                                            title="Lary Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-2.jpg"
                                                    alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Lary Doe</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice"
                                            data-toggle="tooltip" data-placement="left" title="Alice">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-4.jpg"
                                                    alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Alice</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="online" data-username="Alia"
                                            data-toggle="tooltip" data-placement="left" title="Alia">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-3.jpg"
                                                    alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Alia</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="online" data-username="Suzen"
                                            data-toggle="tooltip" data-placement="left" title="Suzen">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="assets/images/avatar-2.jpg"
                                                    alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Suzen</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="showChat_inner">
                        <div className="media chat-inner-header">
                            <a className="back_chatBox">
                                <i className="feather icon-chevron-left"></i> Josephin Doe
                            </a>
                        </div>

                        <div className="media chat-messages">
                            <a className="media-left photo-table" href="#!">
                                <img className="media-object img-radius img-radius m-t-5" src="assets/images/avatar-3.jpg"
                                    alt="Generic placeholder image" />
                            </a>
                            <div className="media-body chat-menu-content">
                                <div className="">
                                    <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                    <p className="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                        </div>

                        <div className="media chat-messages">
                            <div className="media-body chat-menu-reply">
                                <div className="">
                                    <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                    <p className="chat-time">8:20 a.m.</p>
                                </div>
                            </div>
                            <div className="media-right photo-table">
                                <a href="#!">
                                    <img className="media-object img-radius img-radius m-t-5"
                                        src="assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                                </a>
                            </div>
                        </div>

                        <div className="chat-reply-box p-b-20">
                            <div className="right-icon-control">
                                <input type="text" className="form-control search-text" placeholder="Share Your Thoughts" />
                                <div className="form-icon">
                                    <i className="feather icon-navigation"></i>
                                </div>
                            </div>
                        </div>
                    </div>

      </React.Fragment>
  )
}
