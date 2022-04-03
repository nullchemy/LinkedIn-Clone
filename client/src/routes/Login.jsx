import React, { useState, useR, useEffect } from "react";
import { ReactComponent as FooterBrand } from "../assets/svg/footer-logo.svg";
import { ReactComponent as NavBrand } from "../assets/svg/Landing-Home-Logo.svg";
import { ReactComponent as ChevronUp } from "../assets/svg/ChevronUp.svg";
import { ReactComponent as AppleIcon } from "../assets/svg/Apple.svg";
import { ReactComponent as GoogleIcon } from "../assets/svg/google.svg";

import { Link } from "react-router-dom";
import "../styles/css/auth.css";
const Login = () => {
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (email) {
      setFocusEmail(true);
    } else {
      setFocusEmail(false);
    }
    if (password) {
      setFocusPassword(true);
    } else {
      setFocusPassword(false);
    }
  }, [email, password]);
  return (
    <div className="signup-section sign-in-section">
      <div className="signup-wrapper signin-wrapper">
        <nav className="signup-nav sign-in">
          <span className="navLogo">
            <NavBrand className="logo" />
          </span>
        </nav>

        <form className="signup-form signInForm">
          <div className="form-header">
            <h1 className="authTitle">Sign in</h1>
            <h4 className="textMuted">
              Stay updated on your professional world
            </h4>
          </div>
          <div className="form-groupa form-groupasn">
            <label
              className={focusEmail ? "form-label active" : "form-label"}
              id="email"
              htmlFor="email"
              onClick={() => setFocusEmail(true)}
            >
              Email or phone
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              id="email"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="form-groupa form-groupasn">
            <label
              className={focusPassword ? "form-label active" : "form-label"}
              id="password"
              htmlFor="password"
              onClick={() => setFocusPassword(true)}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              id="password"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="form-footer">
            <Link to="/reset-password" className="resetRedirect">
              Forgot Password
            </Link>
            <button className="formSubmitBtn signInBtn">Sign in</button>
            <p className="divider">or</p>
            <button className="googleAuthBtn signInBtn">
              <GoogleIcon />
              Sign in with google
            </button>
            <button className="googleAuthBtn signInBtn">
              <AppleIcon />
              Sign in with Apple
            </button>
          </div>
        </form>
        <p className="signInRedirect signUpRedirect">
          New to LinkedIn? <Link to="/register">Join now</Link>
        </p>
      </div>
      <footer className="authFooter">
        <div className="container">
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

export default Login;
