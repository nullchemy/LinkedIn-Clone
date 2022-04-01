import React from 'react'
import '../styles/css/home.css'
import { Link } from 'react-router-dom'
import Footer from '../components/HomeFooter'
import {ReactComponent as LandingLogo} from '../assets/svg/Landing-Home-Logo.svg'
import {ReactComponent as Discover} from '../assets/svg/discover.svg'
import {ReactComponent as People} from '../assets/svg/people.svg'
import {ReactComponent as Learning} from '../assets/svg/Learning.svg'
import {ReactComponent as Jobs} from '../assets/svg/jobs.svg'

const Home = () => {
  return (
    <div className="landingPage">
        <header className="landingHeader">
          <div className="landingContainer">
            <div className="landingLogo">
              <LandingLogo className="LandingLogoIcon"/>
            </div>
            <div className="landingNavigation">
              <div className="lannavFlex">
                <Link to="" className="lannavLink">
                  <div className="lannavItem">
                    <Discover className="lannavIcon"/>
                    <span>Discover</span>
                  </div>
                </Link>
                <Link to="" className="lannavLink">
                  <div className="lannavItem">
                    <People className="lannavIcon"/>
                    <span>People</span>
                  </div>
                </Link>
                <Link to="" className="lannavLink">
                  <div className="lannavItem">
                    <Learning className="lannavIcon"/>
                    <span>Learning</span>
                  </div>
                </Link>
                <Link to="" className="lannavLink">
                  <div className="lannavItem">
                    <Jobs className="lannavIcon"/>
                    <span>Jobs</span>
                  </div>
                </Link>
                <Link to="" className="lannavLink">
                  Join now
                </Link>
                <Link to="" className="lannavLink">
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