import React, { useState } from "react";
import "../styles/css/modal.css";
import { ReactComponent as Jobs } from "../assets/svg/nav-jobs.svg";
import ProfileImg from "../assets/images/kibet.png";

const CreatePost = ({ showModal, setShowModal }) => {
  return (
    <div
      className={
        showModal ? "createPostOverlay overlayActive" : "createPostOverlay"
      }
    >
      <div className="createPostCard">
        <div className="modalHeader">
          <span className="title">Create Post</span>
          <span
            className="cancelPostBtn"
            onClick={() => setShowModal(!showModal)}
          >
            close
          </span>
        </div>
        <div className="modalBody">
          <div className="flex">
            <div className="userImageContainer">
              <img src={ProfileImg} alt="" className="userAvatar" />
            </div>
            <div className="userPreference">
              <h1 className="userName">Dennis Kibet</h1>
              <select name="" id="selectDropDown">
                <option value="anyone">Anyone</option>
                <option value="anyone">People I follow</option>
              </select>
            </div>
          </div>
          <div className="postDetails">
            <textarea
              name="postDesc"
              id="postDescription"
              placeholder="What do you want to talk about"
            ></textarea>
          </div>
        </div>
        <div className="modalFooter">
          <div className="row">
            <div className="colLeft">
              <ul className="colLeftToolBars">
                <li className="toolBarItem">
                  <button className="tool">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                  </button>
                </li>
                <li className="toolBarItem">
                  <button className="tool">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="colRight">
              <select name="commentPreference" id="commentPreference">
                <option value="Anyone"> Anyone</option>
                <option value="Public"> Public</option>
              </select>
              <button className="createPostBtn">post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
