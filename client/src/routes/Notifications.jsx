import React from 'react'
import '../styles/css/notifications.css'
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <div className="notificationsPage">
      <div className="notifwrapper">
        <div className="notifcontainer">
          <div className="notifFlex">
            <div className="notifLeft">

            </div>
            <div className="notifMiddle"></div>
            <div className="notifRight">
              <div className="sidebarTitle">
                <h1 className="sidebarNotifTitle">Notifications</h1>
                <p className="sidebarNotifCachy">You have new notifications</p>
              </div>
              <div className="sidebarBottom">
                <p className="sbexplns">Improve your notifications</p>
                <Link to="" className="sbsttngs">View settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications