import React from 'react';
import './Navbar.css';
import SvgIcon from '@material-ui/core/SvgIcon';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <div className="img">
                <SvgIcon xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 34 34" className="logo">
                    <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                </SvgIcon>
                </div>
                <div className="search">
                    <SearchIcon className="SearchIcon"/>
                    <input type="text" className="input" placeholder="Search"/>
                </div>
            </div>
            <div className="right">
                <div className="Nav-Links">
                <HomeIcon />
                <p>Home</p>
                </div>
                <div className="Nav-Links">
                <PeopleAltIcon />
                <p>My Network</p>
                </div>
                <div className="Nav-Links">
                <WorkIcon />
                <p>Jobs</p>
                </div>
                <div className="Nav-Links">
                <ChatIcon />
                <p>Messaging</p>
                </div>
                <div className="Nav-Links">
                <NotificationsIcon />
                <p>Notifications</p>
                </div>
                <div className="Nav-Links" id="img">
                    <div id="avatar">
                    <img className="avatar" src="./avatar.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
