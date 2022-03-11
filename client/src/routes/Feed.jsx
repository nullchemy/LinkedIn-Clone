import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/css/feed.css";
import { Link } from "react-router-dom";
import NewsListItem from "../components/NewsListItem";
import Footer from "../components/Footer";
import PromotionListItem from "../components/PromotionListItem";
import ProfileImg from "../assets/images/kibet.png";
import FeedCard from "../components/FeedCard";

const Feed = () => {
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef(null);
  const newsRef = useRef(null);
  useEffect(() => {
    const linksHeight = newsRef.current.getBoundingClientRect().height;
    if (clicked) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = "231px";
    }
  }, [clicked]);
  return (
    <main className="mainFeed">
      <div className="mainFeedRow">
        <div className="mainFeedLeftCol">
          <Sidebar className="leftBar">
            <div className="card">
              <div className="userBanner">
                <img
                  className="bannerImg"
                  src="../public/../images/banner1.jpg"
                  alt=""
                ></img>
              </div>
              <div className="userProfile">
                <img src={ProfileImg} alt="" className="userProfileImg" />
              </div>
              <div className="cardBody">
                <div className="userName">Welcome, back kibet</div>
                <button className="updatePhotoBtn">Add a photo</button>
              </div>
              <div className="cardFooter">
                <ul className="userListItems">
                  <li className="userListItem">
                    <div className="networkRow">
                      <div className="networkCol">
                        <h3 className="userListItemTitle">connection</h3>
                        <div className="userListItemText">
                          Grow your network
                        </div>
                      </div>

                      <span className="networkIcon fas fa-user"></span>
                    </div>
                  </li>
                  <li className="userListItem">
                    <h3 className="userListItemTitle">
                      Access Exclusive tools and Insights
                    </h3>
                    <div className="userListItemText">
                      <span className="promotionIcon fas fa-users"></span>
                      Try Premium For Free
                    </div>
                  </li>

                  <li className="userListItem">
                    <span className="fas fa-bookmark"></span>
                    <span className="userListItemText">My Items</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebarFooter">
              <ul className="sidebarNavLinks">
                <li className="sidebarNavItem">
                  <Link className="sidebarNavLink" to="">
                    Groups
                  </Link>
                </li>
                <li className="sidebarNavItem">
                  <Link className="sidebarNavLink flex" to="">
                    Events
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                      </svg>
                    </span>
                  </Link>
                </li>
                <li className="sidebarNavItem">
                  <Link className="sidebarNavLink" to="">
                    Follow Hashtags
                  </Link>
                </li>
              </ul>
              <div className="sidebarFooterActions">
                <Link className="discoverMoreBtn" to="/">
                  Discover more
                </Link>
              </div>
            </div>
          </Sidebar>
        </div>
        <div className="mainFeedCenter">
          <div className="toolsBar">
            <div className="toolsBarWrapper">
              <div className="topBar">
                <div className="userAvatar">
                  <Link to="">
                    <img src={ProfileImg} alt="" className="userImg" />
                  </Link>
                </div>
                <div className="feedInput">
                  <button className="feedInputBtn">
                    <span>Start a post</span>
                  </button>
                </div>
              </div>
              <div className="bottomBar">
                <ul className="toolsWrapper">
                  <li className="tool">
                    <button className="">
                      <span className="btnIcon image">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                        </svg>
                      </span>
                      <span className="btnText">Photo</span>
                    </button>
                  </li>
                  <li className="tool">
                    <button className="">
                      <span className="btnIcon video">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                        </svg>
                      </span>
                      <span className="btnText">Video</span>
                    </button>
                  </li>
                  <li className="tool">
                    <button className="">
                      <span className="btnIcon event">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                        </svg>
                      </span>
                      <span className="btnText">Event</span>
                    </button>
                  </li>
                  <li className="tool">
                    <button className="">
                      <span className="btnIcon article">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          className="mercado-match"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                        </svg>
                      </span>
                      <span className="btnText">Write Article</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="mainFeedRightCol">
          <Sidebar className={"rightBar"}>
            <div className="newsCard">
              <div className="newsCardHeader">
                <h1 className="headerTitle">LinkedIn news</h1>
                <span className="headerIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                  </svg>
                </span>
              </div>
              <div className="newsCardBody" ref={containerRef}>
                <ul className="newsList" ref={newsRef}>
                  <NewsListItem />
                  <NewsListItem />
                  <NewsListItem />
                  <NewsListItem />
                  <NewsListItem />
                  <NewsListItem />
                </ul>
              </div>
              <div className="newsCardFooter">
                <button
                  className="shoreMoreBtn"
                  onClick={() => setClicked(!clicked)}
                >
                  {clicked ? "Less" : "More"}
                  {clicked ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="promotionsCard">
              <div className="promotionsCardHeader">
                <h1 className="headerTitle">Promoted</h1>
                <span className="headerIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                  </svg>
                </span>
              </div>
              <ul className="promotionLists">
                <PromotionListItem profileImg={ProfileImg} />
                <PromotionListItem profileImg={ProfileImg} />
              </ul>
            </div>
            <Footer />
          </Sidebar>
        </div>
      </div>
    </main>
  );
};

export default Feed;
