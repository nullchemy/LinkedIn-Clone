import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (clicked) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = "30px";
    }
  }, [clicked]);

  console.log(clicked);
  return (
    <aside className="aside">
      <header className="asideHeader">
        <h1 className="asideHeaderTitle">Manage my network</h1>
      </header>
      <div className="asideNavigation">
        <div className="asideNavLinksContainer" ref={containerRef}>
          <ul className="asideNavLinks" ref={linksRef}>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/connections">
                <span className="asideNavIcon">
                  <i className="fas fa-user"></i>
                </span>
                <span className="asideNavLinkText">Connections</span>
              </Link>
            </li>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/contacts">
                <span className="asideNavIcon">
                  <i className="fas fa-user"></i>
                </span>

                <span className="asideNavLinkText">Contacts</span>
              </Link>
            </li>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/prople-to-follow">
                <span className="asideNavIcon">
                  <i className="fas fa-user"></i>
                </span>

                <span className="asideNavLinkText">People to follow</span>
              </Link>
            </li>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/groups">
                <span className="asideNavIcon">
                  <i className="fas fa-user"></i>
                </span>

                <span className="asideNavLinkText">Groups</span>
              </Link>
            </li>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/events">
                <span className="asideNavIcon">
                  <i className="fas fa-user"></i>
                </span>

                <span className="asideNavLinkText">Events</span>
              </Link>
            </li>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/pages">
                <span className="asideNavIcon">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>

                <span className="asideNavLinkText">Pages</span>
              </Link>
            </li>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/newsletter">
                <span className="asideNavIcon">
                  <i className="fas fa-user" aria-hidden="true"></i>
                </span>

                <span className="asideNavLinkText">Newsletters</span>
              </Link>
            </li>
            <li className="asideNavItem">
              <Link className="asideNavLink" to="/hashtags">
                <span className="asideNavIcon">
                  <i className="fa fa-hashtag" aria-hidden="true"></i>
                </span>

                <span className="asideNavLinkText">Hashtags</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="asideNavLinksToggler">
          <button className="toggleBtn" onClick={() => setClicked(!clicked)}>
            <span className="asideTogglerText">
              {clicked ? "Show less" : "Show more"}
            </span>
            <span className="asideTogglerIcon">
              <i
                className={clicked ? "fa fa-chevron-up" : "fa fa-chevron-down"}
              ></i>
            </span>
          </button>
        </div>
      </div>
      <div className="aside-footer">Grow your network</div>

      <Footer />
    </aside>
  );
};

export default Sidebar;
