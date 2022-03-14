import React, { useState } from "react";
import "../styles/css/modal.css";
import { ReactComponent as Jobs } from "../assets/svg/nav-jobs.svg";
import { ReactComponent as Video } from "../assets/svg/video-icon.svg";
import { ReactComponent as Image } from "../assets/svg/photo-icon.svg";
import { ReactComponent as Close } from "../assets/svg/close-icon.svg";

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
            <Close />
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
                  <button >
                    <Image className="tool"/>
                  </button>
                </li>
                <li className="toolBarItem">
                  <button className="tool">
                    <Video />
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
