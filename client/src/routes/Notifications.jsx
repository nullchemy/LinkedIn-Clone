import React from 'react'
import '../styles/css/notifications.css'
import { Link } from 'react-router-dom'
import { notifications } from "../data/notifications";

const Notifications = () => {
  return (
    <div className="notificationsPage">
      <div className="notifwrapper">
        <div className="notifcontainer">
          <div className="notifFlex">
            <div className="notifLeft">

            </div>
            <div className="notifMiddle">
              <div className="notMWrapper">
                <div className="notmNotification">
                  <div className="notmImage"></div>
                  <div className="notmtexts">
                    <span className="thnotmtexts truncate-overflow">
                      <strong className="thnotmauthor">Google</strong>
                      shared a post: When my 48-year-old sister died of cancer, the grief hit me like a freight train. She was the light of her daughter’s life. I knew it was coming, not quite as quickly as it did. She had COLON cancer, so her days were numbered. There is nothing that could ever have prepared me for the past 5 years since she died. This isn’t the first time I’ve written about my grief, and it certainly won’t be the last. It is my experience first-hand, and it’s very different from what I had expected. Grief, as we all have heard, comes in waves. That’s a lie. These aren’t waves; these are gargantuan freight trains that ram into my very soul. From nowhere. They come when I’m talking with a client. They come when I’m laughing over a cup of coffee with my own daughter. They come when I’m about to fall asleep. They come when I see the sadness in my mother's eyes. All of a sudden, from out of nowhere, the trains comes hurtling towards me. It feels as if someone has sucked out everything you have – my guts, my heart, my oxygen, my whole being. Sometimes I look around and wonder how the hell anyone can manage to get on with life when terrible things happen from nowhere. After Elizabeth was told she had cancer, our conversations were more about her pain and fears. I didn't know how to respond. I just held my tears until we hung up. We knew that if we ever cried the tears would never stop. I thought it was better that way. Now I regret that. I regret not crying with her; maybe that would have helped me during grieving. I have cried so much, that the sorrow have left marks under my eyes. My sister’s greatest fear when she was ill was leaving behind any sadness. Everyone copes differently with the loss of a sibling. There is no right way to work through your feelings of grief. And there is no specific amount of time that it takes to recover from those feelings. Today, I remember my sister and I’m posting this to remind you to get screened. If she had done that before, probably this story would have been very different. By 2030, colorectal cancer is expected to be the No. 1 cancer killer for people 20-49 years old. We fight for more this Colorectal Cancer Awareness Month because our current standards are not enough. Let’s be relentless in our pursuit of a cure! FIGHT FOR MORE! Together, we have to do MORE! Today, my niece turned 21 and im wearing blue panties, Lizi! ❤ CANCER sucks, just like war...
                    </span>
                  </div>
                </div>
              </div>
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