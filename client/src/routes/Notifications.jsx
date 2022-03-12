import React from 'react'
import '../styles/css/notifications.css'
import { Link } from 'react-router-dom'
import { notifications } from "../data/notifications";
import notifAuthorImage from '../assets/svg/google.svg'

const Notifications = () => {
  return (
    <div className="notificationsPage">
      <div className="notifwrapper">
        <div className="notifcontainer">
          <div className="notifFlex">
            <div className="notifLeft">

            </div>
            <div className="notifMiddle">
            {[...new Set(notifications)].map((notification) => {
              return (
              <div key={notification.id} className="notMWrapper">
                <div className="notmNotification">
                  <div className="notmImage">
                    {(notification.status==='new')?<span className="notificationStatus"></span>:''}
                    <div className="notAuthorImage">
                      <img src={notification.image_url} alt="" />
                    </div>
                  </div>
                  <div className="notmtexts">
                    <p className="thnotmtexts">
                      <strong className="thnotmauthor">{notification.name}</strong>
                      {notification.notification}
                    </p>
                  </div>
                </div>
              </div>
              )
              })}
            </div>
            <div className="notifRight">
              <div className="sidebarTitle">
                <h1 className="sidebarNotifTitle">Notifications</h1>
                <p className="sidebarNotifCachy">You have new notifications</p>
              </div>
              <div className="sidebarBottom">
                <p className="sbexplns">Improve your notifications</p>
                <p className="sbsttngs"><Link to="">View settings</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications