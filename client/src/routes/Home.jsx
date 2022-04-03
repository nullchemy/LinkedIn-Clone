import React from 'react'
import '../styles/css/home.css'
import { Link } from 'react-router-dom'
import Footer from '../components/HomeFooter'
import {ReactComponent as LandingLogo} from '../assets/svg/Landing-Home-Logo.svg'
import {ReactComponent as Discover} from '../assets/svg/discover.svg'
import {ReactComponent as People} from '../assets/svg/people.svg'
import {ReactComponent as Learning} from '../assets/svg/Learning.svg'
import {ReactComponent as Jobs} from '../assets/svg/jobs.svg'
import {ReactComponent as LanJumboImage} from '../assets/svg/lan-jumbo.svg'
import {ReactComponent as ArrowRight} from '../assets/svg/arrow-right.svg'

const Home = () => {
  return (
    <div className="landingPage">
      <div className="landingContainer">
        <header className="landingHeader">
          <div className="landingContainer">
            <div className="landingLogo">
              <LandingLogo className="LandingLogoIcon"/>
            </div>
            <div className="landingNavigation">
              <div className="lannavFlex">
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
        <div className="lanJumbo">
          <div className="lanJcontainer">
            <div className="lanJFlex">
              <div className="lanJtexts">
                <h2 className="lanJTitle">Welcome to your professional community</h2>
                <Link className="lanJuLinks" to="">Search for a job <ArrowRight /></Link><br />
                <Link className="lanJuLinks" to="">Find a person you know <ArrowRight /></Link><br />
                <Link className="lanJuLinks" to="">Learn a new skill <ArrowRight /></Link><br />
              </div>
              <div className="lanJImage">
                <LanJumboImage className="lanJumboImage"/>
              </div>
            </div>
          </div>
        </div>
        <div className="expTopics">
          <div className="expwrapper">
            <div className="expContainer">
              <div className="expFlex">
                <div className="expTitle">
                  <h1>Explore topics you are interested in</h1>
                </div>
                <div className="expContTopics">
                  <h3 className="expTitleCont">Content Topics</h3>
                  <div className="expLinksCont">
                    <Link className="expTopLinkCont" to="">See All topics</Link>
                    <Link className="expTopLinkCont" to="">Science And Environment</Link>
                    <Link className="expTopLinkCont" to="">Marketing And Advertising</Link>
                    <Link className="expTopLinkCont" to="">Sales And Retail</Link>
                    <Link className="expTopLinkCont" to="">Technology</Link>
                    <Link className="expTopLinkCont" to="">Finance And Economy</Link>
                    <Link className="expTopLinkCont" to="">Health</Link>
                    <Link className="expTopLinkCont" to="">Business And Management</Link>
                    <Link className="expTopLinkCont" to="">Lifestyle And Leisure</Link>
                    <Link className="expTopLinkCont" to="">Society And Culture</Link>
                    <Link className="expTopLinkCont" to="">Arts And Entertainment</Link>
                    <Link className="expTopLinkCont" to="">Education And Learning</Link>
                    <Link className="expTopLinkCont" to="">Sports And Fitness</Link>
                    <Link className="expTopLinkCont" to="">Careers And Employment</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Home