import React from "react";
import { ReactComponent as NavBrand } from "../assets/svg/footer-logo.svg";
import { Link } from "react-router-dom";
import "../styles/css/auth.css";
const Register = () => {
  return (
    <div className="signup-section">
      <nav className="signup-nav">
        <span className="signUpBrand">
          <NavBrand className="brandLogo" />
        </span>
      </nav>
      <div className="signup-wrapper">
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
            By clicking Agree & Join, you agree to the LinkedIn
            <Link to="/agreement">User Agreement, Privacy Policy</Link> , and
            <Link to="/cookie-policy">Cookie Policy.</Link>
            <button className="formSubmitBtn">Agree & Join</button>
            <p className="divider">or</p>
            <button>Continue with google</button>
            <p className="signInRedirect">
              Already on LinkedIn? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
      <footer className="authFooter">
        <ul className="footerLinks">
          <li className="footerLinkItem">
            <p className="siteCredit">{`${NavBrand} &copy; ${new Date().getFullYear()}`}</p>
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
            <button className="selectLangBtn">Language</button>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Register;
