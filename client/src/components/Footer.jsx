import React from "react";
import { Link } from "react-router-dom";
import "../styles/scss/footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerWrapper">
        <ul className="footerNavLinks">
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/about">
              About
            </Link>
          </li>
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/accessibility">
              Accessibility
            </Link>
          </li>
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/help-center">
              Help Center
            </Link>
          </li>
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/terms">
              Privacy & Terms
            </Link>
          </li>
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/ads">
              Ad Choices
            </Link>
          </li>
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/advertising">
              Advertising
            </Link>
          </li>
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/business-services">
              Business Services
            </Link>
          </li>
          <li className="footerNavItem">
            <Link
              className="footerNavLink"
              to="/https://play.google.com/linkedIn"
            >
              Get LinkedIn app
            </Link>
          </li>
          <li className="footerNavItem">
            <Link className="footerNavLink" to="/more">
              More
            </Link>
          </li>
        </ul>
        <div className="siteCredit">
          <p>
            <span className="fakeLogoText">
              Linked<span className="fakeLogo">in</span>
            </span>
            Linked Coporation &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
