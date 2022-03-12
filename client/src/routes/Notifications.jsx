import React from 'react'
import '../styles/css/notifications.css'
import { Link } from 'react-router-dom'
import { notifications } from "../data/notifications";
import Footer from '../components/Footer'

const Notifications = () => {
  function sortNotif(p) {
    let notifOrder = 1;
    if(p[0] === "-") {
        notifOrder = -1;
        p = p.substr(1);
    }
    return function (a,b) {
        return ((a[p] < b[p]) ? -1 : (a[p] > b[p]) ? 1 : 0)* notifOrder;
    }
  }
  return (
    <div className="notificationsPage">
      <div className="notifwrapper">
        <div className="notifcontainer">
          <div className="notifFlex">
            <div className="notifLeft">
              <Footer />
            </div>
            <div className="notifMiddle">
            {[...new Set(notifications)].sort(sortNotif("status")).map((notification) => {
              //if(notification.status==='new' && document.readyState === "complete"){document.querySelectorAll('.notMWrapper').classList.add('newNotification');}
              return (
              <Link key={notification.id} to="" className="notificationLink">
                <div className={notification.status==='new'?"notMWrapper newNotification":"notMWrapper"} >
                  <div className="notmNotification">
                    <div className="notmImage">
                      {(notification.status==='new')?<span className="notificationStatus"></span>:<span></span>}
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
                    <div className="notLater">
                      <div className="notifTime">
                        <p>{notification.time}</p>
                      </div>
                      <span className="notifAction">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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