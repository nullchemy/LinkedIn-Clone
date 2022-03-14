import React from 'react'
import '../styles/css/preloader.css'
import { ReactComponent as PreloaderLogo } from '../assets/svg/linkedin-preloader.svg'

const Preloader = () => {
  return (
    <div className="preloader">
        <div className="prewrapper">
            <div className="precontainer">
                <PreloaderLogo className="preLogo"/>
                <div className="preline">
                    <div className="preinner"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Preloader