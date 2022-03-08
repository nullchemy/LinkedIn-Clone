import React from 'react'
import '../styles/css/navbar.css'
import {  ReactComponent as NavLogo } from '../assets/svg/navlogo.svg'
import {  ReactComponent as SearchIcon } from '../assets/svg/searchIcon.svg'
import { Link } from "react-router-dom"
import {  ReactComponent as Home } from '../assets/svg/nav-home.svg'
import {  ReactComponent as Network } from '../assets/svg/nav-network.svg'
import {  ReactComponent as Jobs } from '../assets/svg/nav-jobs.svg'
import {  ReactComponent as Messaging } from '../assets/svg/nav-messaging.svg'
import {  ReactComponent as Notifications } from '../assets/svg/nav-notifications.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navcontainer">
            <div className="navflex">
                <div className="navleft">
                    <div className="navlogo">
                        <NavLogo className="logo"/>
                    </div>
                    <div className="navsearch">
                        <SearchIcon className="navsearchIcon"/>
                        <input type="text" className="navsearchInput" placeholder="Search" />
                    </div>
                </div>
                <div className="navright">
                    <div className="navigation">
                        <div className="nav-group">
                            <Link to="" className="nav-link">
                                <Home className="nav-icon" />
                                <span className="nav-texts">Home</span>
                            </Link>
                            <Link to="" className="nav-link">
                                <Network className="nav-icon" />
                                <span className="nav-texts">My Network</span>
                            </Link>
                            <Link to="" className="nav-link">
                                <Jobs className="nav-icon" />
                                <span className="nav-texts">Jobs</span>
                            </Link>
                            <Link to="" className="nav-link">
                                <Messaging className="nav-icon" />
                                <span className="nav-texts">Messaging</span>
                            </Link>
                            <Link to="" className="nav-link">
                                <Notifications className="nav-icon" />
                                <span className="nav-texts">Notifications</span>
                            </Link>
                            <Link to="" className="nav-link">
                                {/* <img src="" alt="" className="nav-icon" /> */}
                                <span className="nav-texts">Me</span>
                            </Link>
                        </div>
                    </div>
                    <div className="work"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar