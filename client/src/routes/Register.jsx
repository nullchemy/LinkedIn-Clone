import React from "react";
import { ReactComponent as FooterBrand } from "../assets/svg/footer-logo.svg";
import { ReactComponent as NavBrand } from "../assets/svg/Landing-Home-Logo.svg";
import { ReactComponent as ChevronUp } from "../assets/svg/ChevronUp.svg";

import { Link } from "react-router-dom";
import "../styles/css/auth.css";
const Register = () => {
  return (
    <div className="signup-section">
      <div className="signup-wrapper">
        <nav className="signup-nav">
          <span className="navLogo">
            <NavBrand className="logo" />
          </span>
        </nav>
        <h1 className="form-title">Make the most of your professional life</h1>
        <form className="signup-form">
          <div className="form-groupa">
            <label className="form-label" id="email" htmlFor="email">
              Email or phone number
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
            />
          </div>
          <div className="form-groupa">
            <label className="form-label" id="password" htmlFor="password">
              Password (6 or more characters)
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
            />
          </div>
          <div className="form-footer">
            <p className="sitePolicyText">
              By clicking Agree & Join, you agree to the LinkedIn
              <Link to="/agreement">User Agreement, Privacy Policy</Link> , and
              <Link to="/cookie-policy">Cookie Policy.</Link>
            </p>

            <button className="formSubmitBtn">Agree & Join</button>
            <p className="divider">or</p>
            <button className="googleAuthBtn">Continue with google</button>
            <p className="signInRedirect">
              Already on LinkedIn? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
      <footer className="authFooter">
        <div className="container">
          <div className="info">
            <p className="infoText">
              Looking to create a page for a business?
              <Link to="/support">Get help</Link>
            </p>
          </div>
          <ul className="footerLinks">
            <li className="footerLinkItem">
              <p className="siteCredit">
                {
                  <>
                    <FooterBrand className="brandLogo" />
                    <span>
                      &copy;
                      {new Date().getFullYear()}
                    </span>
                  </>
                }
              </p>
            </li>
            <li className="footerLinkItem">
              <Link to="/about">About</Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/accessibility">Accessibility</Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/user-agreement">User Agreement</Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/brand-policy">brand policy</Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/guest-control">Guest Controls</Link>
            </li>
            <li className="footerLinkItem">
              <Link to="/guest-control">Community Guidelines</Link>
            </li>
            <li className="footerLinkItem">
              <button className="selectLangBtn">
                <span className="btnText">Language</span>
                <span className="btnIcon">
                  <ChevronUp />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Register;
