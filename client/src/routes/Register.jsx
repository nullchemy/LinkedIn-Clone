import React from "react";
import { ReactComponent as NavBrand } from "../assets/svg/footer-logo.svg";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="signup-section">
      <nav className="signup-header">
        <NavBrand className="signUpBrand" />
      </nav>
      <div className="signup-wrapper">
        <h1 className="form-title">Make the most of your professional life</h1>
        <form className="signup-form">
          <div className="form-group">
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
          <div className="form-group">
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
    </div>
  );
};

export default Register;
