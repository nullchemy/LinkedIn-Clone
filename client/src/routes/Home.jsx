import React from 'react'
import '../styles/css/home.css'
import { Link } from 'react-router-dom'
import Footer from '../components/HomeFooter'
import {ReactComponent as LandingLogo} from '../assets/svg/footer-logo.svg'

const Home = () => {
  return (
    <div>
        <header className="landingHeader">
          <div className="landingContainer">
            <div className="landingLogo">
              <LandingLogo />
            </div>
            <div className="landingNavigation">
              <div className="lannavFlex">
                <Link to="">
                  <div className="lannavItem">
                    <span>Discover</span>
                  </div>
                </Link>
                <Link to="">
                  <div className="lannavItem">
                    <span>People</span>
                  </div>
                </Link>
                <Link to="">
                  <div className="lannavItem">
                    <span>Learning</span>
                  </div>
                </Link>
                <Link to="">
                  <div className="lannavItem">
                    <span>Jobs</span>
                  </div>
                </Link>
                <Link to="">
                  Join now
                </Link>
                <Link to="">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Footer />
    </div>
  )
}

export default Home