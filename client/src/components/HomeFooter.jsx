import React from 'react'
import '../styles/css/homefooter.css'
import { Link } from 'react-router-dom'
import {ReactComponent as HomeFooterLogo} from '../assets/svg/Landing-Home-Logo.svg'

const HomeFooter = () => {
  return (
    <div className="HomeFooter">
      <div className="homefooterContainer">
        <div className="homeFooterFlex">
          <div className="homefooterBrandLogo">
            <HomeFooterLogo  className="HomeFooterLogo"/>
          </div>
          <div className="homefooterGeneral">
            <h2>General</h2>
            <Link className="homefooterLinks" to="">Sign up</Link>
            <Link className="homefooterLinks" to="">Help Center</Link>
            <Link className="homefooterLinks" to="">About</Link>
            <Link className="homefooterLinks" to="">Press</Link>
            <Link className="homefooterLinks" to="">Blog</Link>
            <Link className="homefooterLinks" to="">Careers</Link>
            <Link className="homefooterLinks" to="">Developers</Link>
          </div>
          <div className="homefooterBrowse">
            <h2>Browse LinkedIn</h2>
            <Link className="homefooterLinks" to="">Learning</Link> 
            <Link className="homefooterLinks" to="">Jobs</Link>
            <Link className="homefooterLinks" to="">Salary</Link>
            <Link className="homefooterLinks" to="">Mobile</Link>
            <Link className="homefooterLinks" to="">services</Link>
            <Link className="homefooterLinks" to="">Products</Link>
          </div>
          <div className="homeFooterBiz">
            <h2>Business Solutions</h2>
            <Link className="homefooterLinks" to="">Talent</Link>
            <Link className="homefooterLinks" to="">Marketing</Link>
            <Link className="homefooterLinks" to="">Sales</Link>
            <Link className="homefooterLinks" to="">Learning</Link>
          </div>
          <div className="homefooterDirectories">
            <h2>Directories</h2>
            <Link className="homefooterLinks" to="">Members</Link>
            <Link className="homefooterLinks" to="">Jobs</Link>
            <Link className="homefooterLinks" to="">Companies</Link>
            <Link className="homefooterLinks" to="">Salaries</Link>
            <Link className="homefooterLinks" to="">Featured</Link>
            <Link className="homefooterLinks" to="">Learning</Link>
            <Link className="homefooterLinks" to="">Posts</Link>
            <Link className="homefooterLinks" to="">Articles</Link>
            <Link className="homefooterLinks" to="">Schools</Link>
            <Link className="homefooterLinks" to="">News</Link>
            <Link className="homefooterLinks" to="">News Letters</Link>
            <Link className="homefooterLinks" to="">Services</Link>
            <Link className="homefooterLinks" to="">Interview Prep</Link>
            <Link className="homefooterLinks" to="">Products</Link>
            <Link className="homefooterLinks" to="">Content Topics</Link>
          </div>
        </div>
        <div className="homefooterCopyCont"></div>
      </div>
    </div>
  )
}

export default HomeFooter