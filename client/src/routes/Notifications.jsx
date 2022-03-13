import React from 'react'
import '../styles/css/notifications.css'
import { Link } from 'react-router-dom'
import WhoHiring from '../assets/images/hiring-ad.png'
import { notifications } from "../data/notifications"
import { ReactComponent as DeleteIcon } from '../assets/svg/delete-icon.svg'
import { ReactComponent as MuteIcon } from '../assets/svg/mute-icon.svg'
import { ReactComponent as TurnOffIcon } from '../assets/svg/turnoff-icon.svg'
import Footer from '../components/Footer'

const Notifications = () => {
  const sortNotif = (p) => {
    let notifOrder = 1;
    if(p[0] === "-") {
        notifOrder = -1;
        p = p.substr(1);
    }
    return function (a,b) {
        return ((a[p] < b[p]) ? -1 : (a[p] > b[p]) ? 1 : 0)* notifOrder;
    }
  }
  const notifOptions = (id) => {
    document.getElementById('ndrop'+id).classList.toggle('showDropDown');
  }
  return (
    <div className="notificationsPage">
      <div className="notifwrapper">
        <div className="notifcontainer">
          <div className="notifFlex">
            <div className="notifLeft">
              <div className="notifLeftTop">
                <img src={WhoHiring} alt="" />
              </div>
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
                        Shared a post:&nbsp;{notification.notification}
                      </p>
                    </div>
                    <div className="notLater">
                      <div className="notifTime">
                        <p>{notification.time}</p>
                      </div>
                      <span className="notifAction" onClick={()=>{notifOptions(notification.id)}}>
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
                      <div className="notif-drop-down" id={"ndrop"+notification.id}>
                        <div className="deletenotif">
                          <DeleteIcon className="deletenotificon"/>
                          <div className="deletenotiftxts">
                            <h2>Delete</h2>
                            <p>delete this notification</p>
                          </div>
                        </div>
                        <div className="mutenotif">
                          <MuteIcon className="mutenotificon"/>
                          <div className="mutenotiftxts">
                            <h2>Delete</h2>
                            <p>delete this notification</p>
                          </div>
                        </div>
                        <div className="turnoffnotif">
                          <TurnOffIcon className="turnoffnotificon"/>
                          <div className="turnoffnotiftxts">
                            <h2>Delete</h2>
                            <p>delete this notification</p>
                          </div>
                        </div>
                      </div>
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