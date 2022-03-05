import React from 'react'
import '../styles/css/navbar.css'
import {  ReactComponent as NavLogo } from '../assets/svg/navlogo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navcontainer">
            <div className="navflex">
                <div className="navleft">
                    <div className="navlogo">
                        <NavLogo className="logo"/>
                    </div>
                </div>
                <div className="navright"></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar