import React from 'react';

function Dashboard() {
    return (
        <React.Fragment>
            <div className="theme-loader">
                <div className="ball-scale">
                    <div className='contain'>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                        <div className="ring">
                            <div className="frame"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pcoded" className="pcoded">
                <div className="pcoded-overlay-box"></div>
                <div className="pcoded-container navbar-wrapper">

                    <nav className="navbar header-navbar pcoded-header">
                        <div className="navbar-wrapper">

                            <div className="navbar-logo">
                                <a className="mobile-menu" id="mobile-collapse" href="#!">
                                    <i className="feather icon-menu"></i>
                                </a>
                                <a href="index.html">
                                    <img className="img-fluid" src="files/assets/images/logo.png" alt="Theme-Logo" />
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
                                                            src="files/assets/images/avatar-4.jpg"
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
                                                            src="files/assets/images/avatar-3.jpg"
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
                                                            src="files/assets/images/avatar-4.jpg"
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
                                                <img src="files/assets/images/avatar-4.jpg" className="img-radius"
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
                                                <li>
                                                    <a href="default/user-profile.html">
                                                        <i className="feather icon-user"></i> Profile
                                                    </a>
                                                </li>
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
                                                <li>
                                                    <a href="default/auth-normal-sign-in.html">
                                                        <i className="feather icon-log-out"></i> Logout
                                                    </a>
                                                </li>
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
                                                    src="files/assets/images/avatar-3.jpg" alt="Generic placeholder image " />
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
                                                <img className="media-object img-radius" src="files/assets/images/avatar-2.jpg"
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
                                                <img className="media-object img-radius" src="files/assets/images/avatar-4.jpg"
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
                                                <img className="media-object img-radius" src="files/assets/images/avatar-3.jpg"
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
                                                <img className="media-object img-radius" src="files/assets/images/avatar-2.jpg"
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
                                <img className="media-object img-radius img-radius m-t-5" src="files/assets/images/avatar-3.jpg"
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
                                        src="files/assets/images/avatar-4.jpg" alt="Generic placeholder image" />
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
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                            <nav className="pcoded-navbar">
                                <div className="pcoded-inner-navbar main-menu">
                                    <div className="pcoded-navigatio-lavel">Navigation</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu active pcoded-trigger">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-home"></i></span>
                                                <span className="pcoded-mtext">Dashboard</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="active">
                                                    <a href="default/index.html">
                                                        <span className="pcoded-mtext">Default</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/dashboard-crm.html">
                                                        <span className="pcoded-mtext">CRM</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dashboard-analytics.html">
                                                        <span className="pcoded-mtext">Analytics</span>
                                                        <span className="pcoded-badge label label-info ">NEW</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-sidebar"></i></span>
                                                <span className="pcoded-mtext">Page layouts</span>
                                                <span className="pcoded-badge label label-warning">NEW</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" pcoded-hasmenu">
                                                    <a href="javascript:void(0)">
                                                        <span className="pcoded-mtext">Vertical</span>
                                                    </a>
                                                    <ul className="pcoded-submenu">
                                                        <li className=" ">
                                                            <a href="default/menu-static.html">
                                                                <span className="pcoded-mtext">Static Layout</span>
                                                            </a>
                                                        </li>
                                                        <li className=" ">
                                                            <a href="default/menu-header-fixed.html">
                                                                <span className="pcoded-mtext">Header Fixed</span>
                                                            </a>
                                                        </li>
                                                        <li className=" ">
                                                            <a href="default/menu-compact.html">
                                                                <span className="pcoded-mtext">Compact</span>
                                                            </a>
                                                        </li>
                                                        <li className=" ">
                                                            <a href="default/menu-sidebar.html">
                                                                <span className="pcoded-mtext">Sidebar Fixed</span>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className=" pcoded-hasmenu">
                                                    <a href="javascript:void(0)">
                                                        <span className="pcoded-mtext">Horizontal</span>
                                                    </a>
                                                    <ul className="pcoded-submenu">
                                                        <li className=" ">
                                                            <a href="default/menu-horizontal-static.html" target="_blank">
                                                                <span className="pcoded-mtext">Static Layout</span>
                                                            </a>
                                                        </li>
                                                        <li className=" ">
                                                            <a href="default/menu-horizontal-fixed.html" target="_blank">
                                                                <span className="pcoded-mtext">Fixed layout</span>
                                                            </a>
                                                        </li>
                                                        <li className=" ">
                                                            <a href="default/menu-horizontal-icon.html" target="_blank">
                                                                <span className="pcoded-mtext">Static With Icon</span>
                                                            </a>
                                                        </li>
                                                        <li className=" ">
                                                            <a href="default/menu-horizontal-icon-fixed.html" target="_blank">
                                                                <span className="pcoded-mtext">Fixed With Icon</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/menu-bottom.html">
                                                        <span className="pcoded-mtext">Bottom Menu</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/box-layout.html" target="_blank">
                                                        <span className="pcoded-mtext">Box Layout</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/menu-rtl.html" target="_blank">
                                                        <span className="pcoded-mtext">RTL</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="default/navbar-light.html">
                                                <span className="pcoded-micon"><i className="feather icon-menu"></i></span>
                                                <span className="pcoded-mtext">Navigation</span>
                                            </a>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-layers"></i></span>
                                                <span className="pcoded-mtext">Widget</span>
                                                <span className="pcoded-badge label label-danger">100+</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/widget-statistic.html">
                                                        <span className="pcoded-mtext">Statistic</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/widget-data.html">
                                                        <span className="pcoded-mtext">Data</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/widget-chart.html">
                                                        <span className="pcoded-mtext">Chart Widget</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">UI Element</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-box"></i></span>
                                                <span className="pcoded-mtext">Basic Components</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/alert.html">
                                                        <span className="pcoded-mtext">Alert</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/breadcrumb.html">
                                                        <span className="pcoded-mtext">Breadcrumbs</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/button.html">
                                                        <span className="pcoded-mtext">Button</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/box-shadow.html">
                                                        <span className="pcoded-mtext">Box-Shadow</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/accordion.html">
                                                        <span className="pcoded-mtext">Accordion</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/generic-class.html">
                                                        <span className="pcoded-mtext">Generic Class</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/tabs.html">
                                                        <span className="pcoded-mtext">Tabs</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/color.html">
                                                        <span className="pcoded-mtext">Color</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/label-badge.html">
                                                        <span className="pcoded-mtext">Label Badge</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/progress-bar.html">
                                                        <span className="pcoded-mtext">Progress Bar</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/preloader.html">
                                                        <span className="pcoded-mtext">Pre-Loader</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/list.html">
                                                        <span className="pcoded-mtext">List</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/tooltip.html">
                                                        <span className="pcoded-mtext">Tooltip And Popover</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/typography.html">
                                                        <span className="pcoded-mtext">Typography</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/other.html">
                                                        <span className="pcoded-mtext">Other</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-gitlab"></i></span>
                                                <span className="pcoded-mtext">Advance Components</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/draggable.html">
                                                        <span className="pcoded-mtext">Draggable</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/bs-grid.html">
                                                        <span className="pcoded-mtext">Grid Stack</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/light-box.html">
                                                        <span className="pcoded-mtext">Light Box</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/modal.html">
                                                        <span className="pcoded-mtext">Modal</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/notification.html">
                                                        <span className="pcoded-mtext">Notifications</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/notify.html">
                                                        <span className="pcoded-mtext">PNOTIFY</span>
                                                        <span className="pcoded-badge label label-info">NEW</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/rating.html">
                                                        <span className="pcoded-mtext">Rating</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/range-slider.html">
                                                        <span className="pcoded-mtext">Range Slider</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/slider.html">
                                                        <span className="pcoded-mtext">Slider</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/syntax-highlighter.html">
                                                        <span className="pcoded-mtext">Syntax Highlighter</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/tour.html">
                                                        <span className="pcoded-mtext">Tour</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="treeview.html">
                                                        <span className="pcoded-mtext">Tree View</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/nestable.html">
                                                        <span className="pcoded-mtext">Nestable</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/toolbar.html">
                                                        <span className="pcoded-mtext">Toolbar</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/x-editable.html">
                                                        <span className="pcoded-mtext">X-Editable</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-package"></i></span>
                                                <span className="pcoded-mtext">Extra Components</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/session-timeout.html">
                                                        <span className="pcoded-mtext">Session Timeout</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/session-idle-timeout.html">
                                                        <span className="pcoded-mtext">Session Idle Timeout</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/offline.html">
                                                        <span className="pcoded-mtext">Offline</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className=" ">
                                            <a href="default/animation.html">
                                                <span className="pcoded-micon"><i
                                                    className="feather icon-aperture rotate-refresh"></i><b>A</b></span>
                                                <span className="pcoded-mtext">Animations</span>
                                            </a>
                                        </li>
                                        <li className=" ">
                                            <a href="default/sticky.html">
                                                <span className="pcoded-micon"><i className="feather icon-cpu"></i></span>
                                                <span className="pcoded-mtext">Sticky Notes</span>
                                                <span className="pcoded-badge label label-danger">HOT</span>
                                            </a>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-command"></i></span>
                                                <span className="pcoded-mtext">Icons</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/icon-font-awesome.html">
                                                        <span className="pcoded-mtext">Font Awesome</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-themify.html">
                                                        <span className="pcoded-mtext">Themify</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-simple-line.html">
                                                        <span className="pcoded-mtext">Simple Line Icon</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-ion.html">
                                                        <span className="pcoded-mtext">Ion Icon</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-material-design.html">
                                                        <span className="pcoded-mtext">Material Design</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-icofonts.html">
                                                        <span className="pcoded-mtext">Ico Fonts</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-weather.html">
                                                        <span className="pcoded-mtext">Weather Icon</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-typicons.html">
                                                        <span className="pcoded-mtext">Typicons</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/icon-flags.html">
                                                        <span className="pcoded-mtext">Flags</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">Forms</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-clipboard"></i></span>
                                                <span className="pcoded-mtext">Form Components</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/form-elements-component.html">
                                                        <span className="pcoded-mtext">Form Components</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/form-elements-add-on.html">
                                                        <span className="pcoded-mtext">Form-Elements-Add-On</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/form-elements-advance.html">
                                                        <span className="pcoded-mtext">Form-Elements-Advance</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/form-validation.html">
                                                        <span className="pcoded-mtext">Form Validation</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className=" ">
                                            <a href="default/form-picker.html">
                                                <span className="pcoded-micon"><i className="feather icon-edit-1"></i></span>
                                                <span className="pcoded-mtext">Form Picker</span>
                                                <span className="pcoded-badge label label-warning">NEW</span>
                                            </a>
                                        </li>
                                        <li className=" ">
                                            <a href="default/form-select.html">
                                                <span className="pcoded-micon"><i className="feather icon-feather"></i></span>
                                                <span className="pcoded-mtext">Form Select</span>
                                            </a>
                                        </li>
                                        <li className=" ">
                                            <a href="default/form-masking.html">
                                                <span className="pcoded-micon"><i className="feather icon-shield"></i></span>
                                                <span className="pcoded-mtext">Form Masking</span>
                                            </a>
                                        </li>
                                        <li className=" ">
                                            <a href="default/form-wizard.html">
                                                <span className="pcoded-micon"><i className="feather icon-tv"></i></span>
                                                <span className="pcoded-mtext">Form Wizard</span>
                                            </a>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-book"></i></span>
                                                <span className="pcoded-mtext">Ready To Use</span>
                                                <span className="pcoded-badge label label-danger">HOT</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/ready-cloned-elements-form.html">
                                                        <span className="pcoded-mtext">Cloned Elements Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-currency-form.html">
                                                        <span className="pcoded-mtext">Currency Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-form-booking.html">
                                                        <span className="pcoded-mtext">Booking Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-form-booking-multi-steps.html">
                                                        <span className="pcoded-mtext">Booking Multi Steps Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-form-comment.html">
                                                        <span className="pcoded-mtext">Comment Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-form-contact.html">
                                                        <span className="pcoded-mtext">Contact Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-job-application-form.html">
                                                        <span className="pcoded-mtext">Job Application Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-js-addition-form.html">
                                                        <span className="pcoded-mtext">JS Addition Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-login-form.html">
                                                        <span className="pcoded-mtext">Login Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-popup-modal-form.html" target="_blank">
                                                        <span className="pcoded-mtext">Popup Modal Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-registration-form.html">
                                                        <span className="pcoded-mtext">Registration Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-review-form.html">
                                                        <span className="pcoded-mtext">Review Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-subscribe-form.html">
                                                        <span className="pcoded-mtext">Subscribe Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-suggestion-form.html">
                                                        <span className="pcoded-mtext">Suggestion Form</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/ready-tabs-form.html">
                                                        <span className="pcoded-mtext">Tabs Form</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">Tables</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-credit-card"></i></span>
                                                <span className="pcoded-mtext">Bootstrap Table</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/bs-basic-table.html">
                                                        <span className="pcoded-mtext">Basic Table</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/bs-table-sizing.html">
                                                        <span className="pcoded-mtext">Sizing Table</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/bs-table-border.html">
                                                        <span className="pcoded-mtext">Border Table</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/bs-table-styling.html">
                                                        <span className="pcoded-mtext">Styling Table</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-inbox"></i></span>
                                                <span className="pcoded-mtext">Data Table</span>
                                                <span className="pcoded-mcaret"></span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/dt-basic.html">
                                                        <span className="pcoded-mtext">Basic Initialization</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-advance.html">
                                                        <span className="pcoded-mtext">Advance Initialization</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-styling.html">
                                                        <span className="pcoded-mtext">Styling</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-api.html">
                                                        <span className="pcoded-mtext">API</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ajax.html">
                                                        <span className="pcoded-mtext">Ajax</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-server-side.html">
                                                        <span className="pcoded-mtext">Server Side</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-plugin.html">
                                                        <span className="pcoded-mtext">Plug-In</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-data-sources.html">
                                                        <span className="pcoded-mtext">Data Sources</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-server"></i></span>
                                                <span className="pcoded-mtext">Data Table Extensions</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className=" ">
                                                    <a href="default/dt-ext-autofill.html">
                                                        <span className="pcoded-mtext">AutoFill</span>
                                                    </a>
                                                </li>
                                                <li className="pcoded-hasmenu">
                                                    <a href="javascript:void(0)">
                                                        <span className="pcoded-mtext">Button</span>
                                                    </a>
                                                    <ul className="pcoded-submenu">
                                                        <li className=" ">
                                                            <a href="default/dt-ext-basic-buttons.html">
                                                                <span className="pcoded-mtext">Basic Button</span>
                                                            </a>
                                                        </li>
                                                        <li className=" ">
                                                            <a href="default/dt-ext-buttons-html-5-data-export.html">
                                                                <span className="pcoded-mtext">Html-5 Data Export</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-col-reorder.html">
                                                        <span className="pcoded-mtext">Col Reorder</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-fixed-columns.html">
                                                        <span className="pcoded-mtext">Fixed Columns</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-fixed-header.html">
                                                        <span className="pcoded-mtext">Fixed Header</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-key-table.html">
                                                        <span className="pcoded-mtext">Key Table</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-responsive.html">
                                                        <span className="pcoded-mtext">Responsive</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-row-reorder.html">
                                                        <span className="pcoded-mtext">Row Reorder</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-scroller.html">
                                                        <span className="pcoded-mtext">Scroller</span>
                                                    </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="default/dt-ext-select.html">
                                                        <span className="pcoded-mtext">Select Table</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className=" ">
                                            <a href="default/foo-table.html">
                                                <span className="pcoded-micon"><i className="feather icon-hash"></i></span>
                                                <span className="pcoded-mtext">FooTable</span>
                                            </a>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-airplay"></i></span>
                                                <span className="pcoded-mtext">Handson Table</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/handson-appearance.html">
                                                        <span className="pcoded-mtext">Appearance</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-data-operation.html">
                                                        <span className="pcoded-mtext">Data Operation</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-rows-cols.html">
                                                        <span className="pcoded-mtext">Rows Columns</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-columns-only.html">
                                                        <span className="pcoded-mtext">Columns Only</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-cell-features.html">
                                                        <span className="pcoded-mtext">Cell Features</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-cell-types.html">
                                                        <span className="pcoded-mtext">Cell Types</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-integrations.html">
                                                        <span className="pcoded-mtext">Integrations</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-rows-only.html">
                                                        <span className="pcoded-mtext">Rows Only</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/handson-utilities.html">
                                                        <span className="pcoded-mtext">Utilities</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="default/editable-table.html">
                                                <span className="pcoded-micon"><i className="feather icon-edit"></i></span>
                                                <span className="pcoded-mtext">Editable Table</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">Chart And Maps</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span>
                                                <span className="pcoded-mtext">Charts</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/chart-google.html">
                                                        <span className="pcoded-mtext">Google Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-echart.html">
                                                        <span className="pcoded-mtext">Echarts</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-chartjs.html">
                                                        <span className="pcoded-mtext">ChartJs</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-list.html">
                                                        <span className="pcoded-mtext">List Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-float.html">
                                                        <span className="pcoded-mtext">Float Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-knob.html">
                                                        <span className="pcoded-mtext">Knob chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-morris.html">
                                                        <span className="pcoded-mtext">Morris Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="chart-nvd3.html">
                                                        <span className="pcoded-mtext">Nvd3 Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-peity.html">
                                                        <span className="pcoded-mtext">Peity Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-radial.html">
                                                        <span className="pcoded-mtext">Radial Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-rickshaw.html">
                                                        <span className="pcoded-mtext">Rickshaw Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-sparkline.html">
                                                        <span className="pcoded-mtext">Sparkline Chart</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/chart-c3.html">
                                                        <span className="pcoded-mtext">C3 Chart</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-map"></i></span>
                                                <span className="pcoded-mtext">Maps</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/map-google.html">
                                                        <span className="pcoded-mtext">Google Maps</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/map-vector.html">
                                                        <span className="pcoded-mtext">Vector Maps</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/map-api.html">
                                                        <span className="pcoded-mtext">Google Map Search API</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/location.html">
                                                        <span className="pcoded-mtext">Location</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="files/extra-pages/landingpage/index.html" target="_blank">
                                                <span className="pcoded-micon"><i className="feather icon-navigation-2"></i></span>
                                                <span className="pcoded-mtext">Landing Page</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">Pages</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-unlock"></i></span>
                                                <span className="pcoded-mtext">Authentication</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/auth-normal-sign-in.html" target="_blank">
                                                        <span className="pcoded-mtext">Login With BG Image</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-sign-in-social.html" target="_blank">
                                                        <span className="pcoded-mtext">Login With Social Icon</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-sign-in-social-header-footer.html" target="_blank">
                                                        <span className="pcoded-mtext">Login Social With Header And Footer</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-normal-sign-in-header-footer.html" target="_blank">
                                                        <span className="pcoded-mtext">Login With Header And Footer</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-sign-up.html" target="_blank">
                                                        <span className="pcoded-mtext">Registration BG Image</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-sign-up-social.html" target="_blank">
                                                        <span className="pcoded-mtext">Registration Social Icon</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-sign-up-social-header-footer.html" target="_blank">
                                                        <span className="pcoded-mtext">Registration Social With Header And
                                                            Footer</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-sign-up-header-footer.html" target="_blank">
                                                        <span className="pcoded-mtext">Registration With Header And Footer</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-multi-step-sign-up.html" target="_blank">
                                                        <span className="pcoded-mtext">Multi Step Registration</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-reset-password.html" target="_blank">
                                                        <span className="pcoded-mtext">Forgot Password</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-lock-screen.html" target="_blank">
                                                        <span className="pcoded-mtext">Lock Screen</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/auth-modal.html" target="_blank">
                                                        <span className="pcoded-mtext">Modal</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-sliders"></i></span>
                                                <span className="pcoded-mtext">Maintenance</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/error.html">
                                                        <span className="pcoded-mtext">Error</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/comming-soon.html">
                                                        <span className="pcoded-mtext">Comming Soon</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/offline-ui.html">
                                                        <span className="pcoded-mtext">Offline UI</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-users"></i></span>
                                                <span className="pcoded-mtext">User Profile</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/timeline.html">
                                                        <span className="pcoded-mtext">Timeline</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/timeline-social.html">
                                                        <span className="pcoded-mtext">Timeline Social</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/user-profile.html">
                                                        <span className="pcoded-mtext">User Profile</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/user-card.html">
                                                        <span className="pcoded-mtext">User Card</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-shopping-cart"></i></span>
                                                <span className="pcoded-mtext">E-Commerce</span>
                                                <span className="pcoded-badge label label-danger">NEW</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/product.html">
                                                        <span className="pcoded-mtext">Product</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/product-list.html">
                                                        <span className="pcoded-mtext">Product List</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/product-edit.html">
                                                        <span className="pcoded-mtext">Product Edit</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/product-detail.html">
                                                        <span className="pcoded-mtext">Product Detail</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/product-cart.html">
                                                        <span className="pcoded-mtext">Product Card</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/product-payment.html">
                                                        <span className="pcoded-mtext">Credit Card Form</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-mail"></i></span>
                                                <span className="pcoded-mtext">Email</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/email-compose.html">
                                                        <span className="pcoded-mtext">Compose Email</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/email-inbox.html">
                                                        <span className="pcoded-mtext">Inbox</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/email-read.html">
                                                        <span className="pcoded-mtext">Read Mail</span>
                                                    </a>
                                                </li>
                                                <li className="pcoded-hasmenu ">
                                                    <a href="javascript:void(0)">
                                                        <span className="pcoded-mtext">Email Template</span>
                                                    </a>
                                                    <ul className="pcoded-submenu">
                                                        <li className="">
                                                            <a href="files/extra-pages/email-templates/email-welcome.html">
                                                                <span className="pcoded-mtext">Welcome Email</span>
                                                            </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="files/extra-pages/email-templates/email-password.html">
                                                                <span className="pcoded-mtext">Reset Password</span>
                                                            </a>
                                                        </li>
                                                        <li className="">
                                                            <a
                                                                href="files/extra-pages/email-templates/email-newsletter.html">
                                                                <span className="pcoded-mtext">Newsletter Email</span>
                                                            </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="files/extra-pages/email-templates/email-launch.html">
                                                                <span className="pcoded-mtext">App Launch</span>
                                                            </a>
                                                        </li>
                                                        <li className="">
                                                            <a
                                                                href="files/extra-pages/email-templates/email-activation.html">
                                                                <span className="pcoded-mtext">Activation Code</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">App</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className=" ">
                                            <a href="default/chat.html">
                                                <span className="pcoded-micon"><i className="feather icon-message-square"></i></span>
                                                <span className="pcoded-mtext">Chat</span>
                                            </a>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-globe"></i></span>
                                                <span className="pcoded-mtext">Social</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/fb-wall.html">
                                                        <span className="pcoded-mtext">Wall</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/message.html">
                                                        <span className="pcoded-mtext">Messages</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-check-circle"></i></span>
                                                <span className="pcoded-mtext">Task</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/task-list.html">
                                                        <span className="pcoded-mtext">Task List</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/task-board.html">
                                                        <span className="pcoded-mtext">Task Board</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/task-detail.html">
                                                        <span className="pcoded-mtext">Task Detail</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/issue-list.html">
                                                        <span className="pcoded-mtext">Issue List</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-bookmark"></i></span>
                                                <span className="pcoded-mtext">To-Do</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/todo.html">
                                                        <span className="pcoded-mtext">To-Do</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/notes.html">
                                                        <span className="pcoded-mtext">Notes</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-image"></i></span>
                                                <span className="pcoded-mtext">Gallery</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/gallery-grid.html">
                                                        <span className="pcoded-mtext">Gallery-Grid</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/gallery-masonry.html">
                                                        <span className="pcoded-mtext">Masonry Gallery</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/gallery-advance.html">
                                                        <span className="pcoded-mtext">Advance Gallery</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-search"></i><b>S</b></span>
                                                <span className="pcoded-mtext">Search</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/search-result.html">
                                                        <span className="pcoded-mtext">Simple Search</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/search-result2.html">
                                                        <span className="pcoded-mtext">Grouping Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-award"></i></span>
                                                <span className="pcoded-mtext">Job Search</span>
                                                <span className="pcoded-badge label label-danger">NEW</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/job-card-view.html">
                                                        <span className="pcoded-mtext">Card View</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/job-details.html">
                                                        <span className="pcoded-mtext">Job Detailed</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/job-find.html">
                                                        <span className="pcoded-mtext">Job Find</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/job-panel-view.html">
                                                        <span className="pcoded-mtext">Job Panel View</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">Extension</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-file-plus"></i></span>
                                                <span className="pcoded-mtext">Editor</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/ck-editor.html">
                                                        <span className="pcoded-mtext">CK-Editor</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/wysiwyg-editor.html">
                                                        <span className="pcoded-mtext">WYSIWYG Editor</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/ace-editor.html">
                                                        <span className="pcoded-mtext">Ace Editor</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/long-press-editor.html">
                                                        <span className="pcoded-mtext">Long Press Editor</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-file-minus"></i></span>
                                                <span className="pcoded-mtext">Invoice</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/invoice.html">
                                                        <span className="pcoded-mtext">Invoice</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/invoice-summary.html">
                                                        <span className="pcoded-mtext">Invoice Summary</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/invoice-list.html">
                                                        <span className="pcoded-mtext">Invoice List</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-calendar"></i></span>
                                                <span className="pcoded-mtext">Event Calendar</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="default/event-full-calender.html">
                                                        <span className="pcoded-mtext">Full Calendar</span>
                                                    </a>
                                                </li>
                                                <li className="">
                                                    <a href="default/event-clndr.html">
                                                        <span className="pcoded-mtext">CLNDER</span>
                                                        <span className="pcoded-badge label label-info">NEW</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="image-crop.html">
                                                <span className="pcoded-micon"><i className="feather icon-scissors"></i></span>
                                                <span className="pcoded-mtext">Image Cropper</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="default/file-upload.html">
                                                <span className="pcoded-micon"><i className="feather icon-upload-cloud"></i></span>
                                                <span className="pcoded-mtext">File Upload</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="default/change-loges.html">
                                                <span className="pcoded-micon"><i
                                                    className="feather icon-briefcase"></i><b>CL</b></span>
                                                <span className="pcoded-mtext">Change Loges</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">Other</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="pcoded-hasmenu ">
                                            <a href="javascript:void(0)">
                                                <span className="pcoded-micon"><i className="feather icon-list"></i></span>
                                                <span className="pcoded-mtext">Menu Levels</span>
                                            </a>
                                            <ul className="pcoded-submenu">
                                                <li className="">
                                                    <a href="javascript:void(0)">
                                                        <span className="pcoded-mtext">Menu Level 2.1</span>
                                                    </a>
                                                </li>
                                                <li className="pcoded-hasmenu ">
                                                    <a href="javascript:void(0)">
                                                        <span className="pcoded-mtext">Menu Level 2.2</span>
                                                    </a>
                                                    <ul className="pcoded-submenu">
                                                        <li className="">
                                                            <a href="javascript:void(0)">
                                                                <span className="pcoded-mtext">Menu Level 3.1</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="">
                                                    <a href="javascript:void(0)">
                                                        <span className="pcoded-mtext">Menu Level 2.3</span>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="javascript:void(0)" className="disabled">
                                                <span className="pcoded-micon"><i className="feather icon-power"></i></span>
                                                <span className="pcoded-mtext">Disabled Menu</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="default/sample-page.html">
                                                <span className="pcoded-micon"><i className="feather icon-watch"></i></span>
                                                <span className="pcoded-mtext">Sample Page</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="pcoded-navigatio-lavel">Support</div>
                                    <ul className="pcoded-item pcoded-left-item">
                                        <li className="">
                                            <a href="http://html.codedthemes.com/Adminty/doc" target="_blank">
                                                <span className="pcoded-micon"><i className="feather icon-monitor"></i></span>
                                                <span className="pcoded-mtext">Documentation</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="#" target="_blank">
                                                <span className="pcoded-micon"><i className="feather icon-help-circle"></i></span>
                                                <span className="pcoded-mtext">Submit Issue</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="pcoded-content">
                                <div className="pcoded-inner-content">
                                    <div className="main-body">
                                        <div className="page-wrapper">

                                            <div className="page-body">
                                                <div className="row">
                                                    <div className="col-xl-3 col-md-6">
                                                        <div className="card bg-c-yellow update-card">
                                                            <div className="card-block">
                                                                <div className="row align-items-end">
                                                                    <div className="col-8">
                                                                        <h4 className="text-white">$30200</h4>
                                                                        <h6 className="text-white m-b-0">All Earnings</h6>
                                                                    </div>
                                                                    <div className="col-4 text-right">
                                                                        <canvas id="update-chart-1" height="50"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <p className="text-white m-b-0"><i
                                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                                    : 2:15 am</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <div className="card bg-c-green update-card">
                                                            <div className="card-block">
                                                                <div className="row align-items-end">
                                                                    <div className="col-8">
                                                                        <h4 className="text-white">290+</h4>
                                                                        <h6 className="text-white m-b-0">Page Views</h6>
                                                                    </div>
                                                                    <div className="col-4 text-right">
                                                                        <canvas id="update-chart-2" height="50"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <p className="text-white m-b-0"><i
                                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                                    : 2:15 am</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <div className="card bg-c-pink update-card">
                                                            <div className="card-block">
                                                                <div className="row align-items-end">
                                                                    <div className="col-8">
                                                                        <h4 className="text-white">145</h4>
                                                                        <h6 className="text-white m-b-0">Task Completed</h6>
                                                                    </div>
                                                                    <div className="col-4 text-right">
                                                                        <canvas id="update-chart-3" height="50"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <p className="text-white m-b-0"><i
                                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                                    : 2:15 am</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6">
                                                        <div className="card bg-c-lite-green update-card">
                                                            <div className="card-block">
                                                                <div className="row align-items-end">
                                                                    <div className="col-8">
                                                                        <h4 className="text-white">500</h4>
                                                                        <h6 className="text-white m-b-0">Downloads</h6>
                                                                    </div>
                                                                    <div className="col-4 text-right">
                                                                        <canvas id="update-chart-4" height="50"></canvas>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <p className="text-white m-b-0"><i
                                                                    className="feather icon-clock text-white f-14 m-r-10"></i>update
                                                                    : 2:15 am</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-9 col-md-12">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5>Sales Analytics</h5>
                                                                <span className="text-muted">For more details about usage, please
                                                                    refer <a href="https://www.amcharts.com/online-store/"
                                                                        target="_blank">amCharts</a> licences.</span>
                                                                <div className="card-header-right">
                                                                    <ul className="list-unstyled card-option">
                                                                        <li><i className="feather icon-maximize full-card"></i></li>
                                                                        <li><i className="feather icon-minus minimize-card"></i>
                                                                        </li>
                                                                        <li><i className="feather icon-trash-2 close-card"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div id="sales-analytics" style="height: 265px;"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-12">
                                                        <div className="card user-card2">
                                                            <div className="card-block text-center">
                                                                <h6 className="m-b-15">Project Risk</h6>
                                                                <div className="risk-rate">
                                                                    <span><b>5</b></span>
                                                                </div>
                                                                <h6 className="m-b-10 m-t-10">Balanced</h6>
                                                                <a href="#!" className="text-c-yellow b-b-warning">Change Your
                                                                    Risk</a>
                                                                <div
                                                                    className="row justify-content-center m-t-10 b-t-default m-l-0 m-r-0">
                                                                    <div className="col m-t-15 b-r-default">
                                                                        <h6 className="text-muted">Nr</h6>
                                                                        <h6>AWS 2455</h6>
                                                                    </div>
                                                                    <div className="col m-t-15">
                                                                        <h6 className="text-muted">Created</h6>
                                                                        <h6>30th Sep</h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button className="btn btn-warning btn-block p-t-15 p-b-15">Download
                                                                Overall Report</button>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-8 col-md-12">
                                                        <div className="card table-card">
                                                            <div className="card-header">
                                                                <h5>Application Sales</h5>
                                                                <div className="card-header-right">
                                                                    <ul className="list-unstyled card-option">
                                                                        <li><i className="feather icon-maximize full-card"></i></li>
                                                                        <li><i className="feather icon-minus minimize-card"></i>
                                                                        </li>
                                                                        <li><i className="feather icon-trash-2 close-card"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="table-responsive">
                                                                    <table className="table table-hover  table-borderless">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>
                                                                                    <div className="chk-option">
                                                                                        <div
                                                                                            className="checkbox-fade fade-in-primary">
                                                                                            <label className="check-task">
                                                                                                <input type="checkbox" value="" />
                                                                                                <span className="cr">
                                                                                                    <i
                                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                                </span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    Application
                                                                                </th>
                                                                                <th>Sales</th>
                                                                                <th>Change</th>
                                                                                <th>Avg Price</th>
                                                                                <th>Total</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="chk-option">
                                                                                        <div
                                                                                            className="checkbox-fade fade-in-primary">
                                                                                            <label className="check-task">
                                                                                                <input type="checkbox" value="" />
                                                                                                <span className="cr">
                                                                                                    <i
                                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                                </span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-inline-block align-middle">
                                                                                        <h6>Able Pro</h6>
                                                                                        <p className="text-muted m-b-0">Powerful
                                                                                            Admin Theme</p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>16,300</td>
                                                                                <td><canvas id="app-sale1" height="50"
                                                                                    width="100"></canvas></td>
                                                                                <td>$53</td>
                                                                                <td className="text-c-blue">$15,652</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="chk-option">
                                                                                        <div
                                                                                            className="checkbox-fade fade-in-primary">
                                                                                            <label className="check-task">
                                                                                                <input type="checkbox" value="" />
                                                                                                <span className="cr">
                                                                                                    <i
                                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                                </span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-inline-block align-middle">
                                                                                        <h6>Photoshop</h6>
                                                                                        <p className="text-muted m-b-0">Design
                                                                                            Software</p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>26,421</td>
                                                                                <td><canvas id="app-sale2" height="50"
                                                                                    width="100"></canvas></td>
                                                                                <td>$35</td>
                                                                                <td className="text-c-blue">$18,785</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="chk-option">
                                                                                        <div
                                                                                            className="checkbox-fade fade-in-primary">
                                                                                            <label className="check-task">
                                                                                                <input type="checkbox" value="" />
                                                                                                <span className="cr">
                                                                                                    <i
                                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                                </span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-inline-block align-middle">
                                                                                        <h6>Guruable</h6>
                                                                                        <p className="text-muted m-b-0">Best Admin
                                                                                            Template</p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>8,265</td>
                                                                                <td><canvas id="app-sale3" height="50"
                                                                                    width="100"></canvas></td>
                                                                                <td>$98</td>
                                                                                <td className="text-c-blue">$9,652</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>
                                                                                    <div className="chk-option">
                                                                                        <div
                                                                                            className="checkbox-fade fade-in-primary">
                                                                                            <label className="check-task">
                                                                                                <input type="checkbox" value="" />
                                                                                                <span className="cr">
                                                                                                    <i
                                                                                                        className="cr-icon feather icon-check txt-default"></i>
                                                                                                </span>
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-inline-block align-middle">
                                                                                        <h6>Flatable</h6>
                                                                                        <p className="text-muted m-b-0">Admin App
                                                                                        </p>
                                                                                    </div>
                                                                                </td>
                                                                                <td>10,652</td>
                                                                                <td><canvas id="app-sale4" height="50"
                                                                                    width="100"></canvas></td>
                                                                                <td>$20</td>
                                                                                <td className="text-c-blue">$7,856</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="text-center">
                                                                        <a href="#!" className=" b-b-primary text-primary">View all
                                                                            Projects</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-12">
                                                        <div className="card user-activity-card">
                                                            <div className="card-header">
                                                                <h5>User Activity</h5>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="row m-b-25">
                                                                    <div className="col-auto p-r-0">
                                                                        <div className="u-img">
                                                                            <img src="files/assets/images/breadcrumb-bg.jpg"
                                                                                alt="user image" className="img-radius cover-img" />
                                                                            <img src="files/assets/images/avatar-2.jpg"
                                                                                alt="user image" className="img-radius profile-img " />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <h6 className="m-b-5">John Deo</h6>
                                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                                            text.</p>
                                                                        <p className="text-muted m-b-0"><i
                                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="row m-b-25">
                                                                    <div className="col-auto p-r-0">
                                                                        <div className="u-img">
                                                                            <img src="files/assets/images/breadcrumb-bg.jpg"
                                                                                alt="user image" className="img-radius cover-img" />
                                                                            <img src="files/assets/images/avatar-2.jpg"
                                                                                alt="user image" className="img-radius profile-img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <h6 className="m-b-5">John Deo</h6>
                                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                                            text.</p>
                                                                        <p className="text-muted m-b-0"><i
                                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="row m-b-25">
                                                                    <div className="col-auto p-r-0">
                                                                        <div className="u-img">
                                                                            <img src="files/assets/images/breadcrumb-bg.jpg"
                                                                                alt="user image" className="img-radius cover-img" />
                                                                            <img src="files/assets/images/avatar-2.jpg"
                                                                                alt="user image" className="img-radius profile-img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <h6 className="m-b-5">John Deo</h6>
                                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                                            text.</p>
                                                                        <p className="text-muted m-b-0"><i
                                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="row m-b-5">
                                                                    <div className="col-auto p-r-0">
                                                                        <div className="u-img">
                                                                            <img src="files/assets/images/breadcrumb-bg.jpg"
                                                                                alt="user image" className="img-radius cover-img" />
                                                                            <img src="files/assets/images/avatar-2.jpg"
                                                                                alt="user image" className="img-radius profile-img" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <h6 className="m-b-5">John Deo</h6>
                                                                        <p className="text-muted m-b-0">Lorem Ipsum is simply dummy
                                                                            text.</p>
                                                                        <p className="text-muted m-b-0"><i
                                                                            className="feather icon-clock m-r-10"></i>2 min ago
                                                                        </p>
                                                                    </div>
                                                                </div>

                                                                <div className="text-center">
                                                                    <a href="#!" className="b-b-primary text-primary">View all
                                                                        Projects</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-md-12">
                                                        <div className="card latest-update-card">
                                                            <div className="card-header">
                                                                <h5>Latest Updates</h5>
                                                                <div className="card-header-right">
                                                                    <ul className="list-unstyled card-option">
                                                                        <li><i className="fa fa fa-wrench open-card-option"></i>
                                                                        </li>
                                                                        <li><i className="fa fa-window-maximize full-card"></i></li>
                                                                        <li><i className="fa fa-minus minimize-card"></i></li>
                                                                        <li><i className="fa fa-refresh reload-card"></i></li>
                                                                        <li><i className="fa fa-trash close-card"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="card-block">
                                                                <div className="latest-update-box">
                                                                    <div className="row p-b-15">
                                                                        <div className="col-auto text-right update-meta">
                                                                            <p className="text-muted m-b-0 d-inline">4 hrs ago</p>
                                                                            <i
                                                                                className="feather icon-briefcase bg-simple-c-pink update-icon"></i>
                                                                        </div>
                                                                        <div className="col">
                                                                            <h6>+ 5 New Products were added!</h6>
                                                                            <p className="text-muted m-b-0">Congratulations!</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row p-b-15">
                                                                        <div className="col-auto text-right update-meta">
                                                                            <p className="text-muted m-b-0 d-inline">1 day ago</p>
                                                                            <i
                                                                                className="feather icon-check bg-simple-c-yellow  update-icon"></i>
                                                                        </div>
                                                                        <div className="col">
                                                                            <h6>Database backup completed!</h6>
                                                                            <p className="text-muted m-b-0">Download the <span
                                                                                className="text-c-blue">latest backup</span>.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row p-b-0">
                                                                        <div className="col-auto text-right update-meta">
                                                                            <p className="text-muted m-b-0 d-inline">2 day ago</p>
                                                                            <i
                                                                                className="feather icon-facebook bg-simple-c-green update-icon"></i>
                                                                        </div>
                                                                        <div className="col">
                                                                            <h6>+1 Friend Requests</h6>
                                                                            <p className="text-muted m-b-10">This is great, keep it
                                                                                up!</p>
                                                                            <div className="table-responsive">
                                                                                <table className="table table-hover m-b-0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td className="b-none">
                                                                                                <a href="#!"
                                                                                                    className="align-middle">
                                                                                                    <img src="files/assets/images/avatar-2.jpg"
                                                                                                        alt="user image"
                                                                                                        className="img-radius img-40 align-top m-r-15" />
                                                                                                    <div className="d-inline-block">
                                                                                                        <h6>Jeny William</h6>
                                                                                                        <p
                                                                                                            className="text-muted m-b-0">
                                                                                                            Graphic Designer</p>
                                                                                                    </div>
                                                                                                </a>
                                                                                            </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-center">
                                                                    <a href="#!" className="b-b-primary text-primary">View all
                                                                        Projects</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-md-12">
                                                        <div className="card user-card-full">
                                                            <div className="row m-l-0 m-r-0">
                                                                <div className="col-sm-4 bg-c-lite-green user-profile">
                                                                    <div className="card-block text-center text-white">
                                                                        <div className="m-b-25">
                                                                            <img src="files/assets/images/avatar-4.jpg"
                                                                                className="img-radius" alt="User-Profile-Image" />
                                                                        </div>
                                                                        <h6 className="f-w-600">Jeny William</h6>
                                                                        <p>Web Designer</p>
                                                                        <i className="feather icon-edit m-t-10 f-16"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-8">
                                                                    <div className="card-block">
                                                                        <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information
                                                                        </h6>
                                                                        <div className="row">
                                                                            <div className="col-sm-6">
                                                                                <p className="m-b-10 f-w-600">Email</p>
                                                                                <h6 className="text-muted f-w-400">jeny@gmail.com
                                                                                </h6>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <p className="m-b-10 f-w-600">Phone</p>
                                                                                <h6 className="text-muted f-w-400">0023-333-526136
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                                            Projects</h6>
                                                                        <div className="row">
                                                                            <div className="col-sm-6">
                                                                                <p className="m-b-10 f-w-600">Recent</p>
                                                                                <h6 className="text-muted f-w-400">Guruable Admin
                                                                                </h6>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <p className="m-b-10 f-w-600">Most Viewed</p>
                                                                                <h6 className="text-muted f-w-400">Able Pro Admin
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                                            <li><a href="#!" data-toggle="tooltip"
                                                                                data-placement="bottom" title=""
                                                                                data-original-title="facebook"><i
                                                                                    className="feather icon-facebook facebook"
                                                                                    aria-hidden="true"></i></a></li>
                                                                            <li><a href="#!" data-toggle="tooltip"
                                                                                data-placement="bottom" title=""
                                                                                data-original-title="twitter"><i
                                                                                    className="feather icon-twitter twitter"
                                                                                    aria-hidden="true"></i></a></li>
                                                                            <li><a href="#!" data-toggle="tooltip"
                                                                                data-placement="bottom" title=""
                                                                                data-original-title="instagram"><i
                                                                                    className="feather icon-instagram instagram"
                                                                                    aria-hidden="true"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-4 col-md-6">
                                                        <div className="card social-card bg-simple-c-blue">
                                                            <div className="card-block">
                                                                <div className="row align-items-center">
                                                                    <div className="col-auto">
                                                                        <i
                                                                            className="feather icon-mail f-34 text-c-blue social-icon"></i>
                                                                    </div>
                                                                    <div className="col">
                                                                        <h6 className="m-b-0">Mail</h6>
                                                                        <p>231.2w downloads</p>
                                                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the
                                                                            printing</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#!" className="download-icon"><i
                                                                className="feather icon-arrow-down"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-6">
                                                        <div className="card social-card bg-simple-c-pink">
                                                            <div className="card-block">
                                                                <div className="row align-items-center">
                                                                    <div className="col-auto">
                                                                        <i
                                                                            className="feather icon-twitter f-34 text-c-pink social-icon"></i>
                                                                    </div>
                                                                    <div className="col">
                                                                        <h6 className="m-b-0">twitter</h6>
                                                                        <p>231.2w downloads</p>
                                                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the
                                                                            printing</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#!" className="download-icon"><i
                                                                className="feather icon-arrow-down"></i></a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-md-12">
                                                        <div className="card social-card bg-simple-c-green">
                                                            <div className="card-block">
                                                                <div className="row align-items-center">
                                                                    <div className="col-auto">
                                                                        <i
                                                                            className="feather icon-instagram f-34 text-c-green social-icon"></i>
                                                                    </div>
                                                                    <div className="col">
                                                                        <h6 className="m-b-0">Instagram</h6>
                                                                        <p>231.2w downloads</p>
                                                                        <p className="m-b-0">Lorem Ipsum is simply dummy text of the
                                                                            printing</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a href="#!" className="download-icon"><i
                                                                className="feather icon-arrow-down"></i></a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div id="styleSelector">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;
