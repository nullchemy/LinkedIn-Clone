import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/css/feed.css";
import { Link } from "react-router-dom";
import { ReactComponent as Widget } from "../assets/svg/widget-icon.svg";
import { ReactComponent as Image } from "../assets/svg/photo-icon.svg";
import { ReactComponent as Video } from "../assets/svg/video-icon.svg";
import { ReactComponent as Share } from "../assets/svg/share-icon.svg";
import { ReactComponent as Comment } from "../assets/svg/share-comment.svg";
import { ReactComponent as Plus } from "../assets/svg/plus-icon.svg";
import { ReactComponent as Event } from "../assets/svg/event-icon.svg";
import { ReactComponent as Article } from "../assets/svg/article-icon.svg";

import NewsListItem from "../components/NewsListItem";
import Footer from "../components/Footer";
import PromotionListItem from "../components/PromotionListItem";
import ProfileImg from "../assets/images/kibet.png";
import FeedCard from "../components/FeedCard";
import CreatePost from "../components/CreatePost";

const Feed = () => {
  const [clicked, setClicked] = useState(false);
  const containerRef = useRef(null);
  const newsRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
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
                      <Widget />
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
                      <Plus />
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
          <div className="mainFeedCenterLeft">
            <div className="toolsBar">
              <div className="toolsBarWrapper">
                <div className="topBar">
                  <div className="userAvatar">
                    <Link to="">
                      <img src={ProfileImg} alt="" className="userImg" />
                    </Link>
                  </div>
                  <div className="feedInput">
                    <button
                      className="feedInputBtn"
                      onClick={() => setShowModal(!showModal)}
                    >
                      <span>Start a post</span>
                    </button>
                  </div>
                </div>
                <div className="bottomBar">
                  <ul className="toolsWrapper">
                    <li className="tool">
                      <button className="">
                        <span className="btnIcon image">
                          <Image />
                        </span>
                        <span className="btnText">Photo</span>
                      </button>
                    </li>
                    <li className="tool">
                      <button className="">
                        <span className="btnIcon video">
                          <Video />
                        </span>
                        <span className="btnText">Video</span>
                      </button>
                    </li>
                    <li className="tool">
                      <button className="">
                        <span className="btnIcon event">
                          <Event />
                        </span>
                        <span className="btnText">Event</span>
                      </button>
                    </li>
                    <li className="tool">
                      <button className="">
                        <span className="btnIcon article">
                          <Article />
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
          <div className="mainFeedCenterRight">
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
        </div>
      </div>

      <CreatePost showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
};

export default Feed;
