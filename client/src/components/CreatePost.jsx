import React, { useEffect, useReducer, useState } from "react";
import "../styles/css/modal.css";
import { ReactComponent as Jobs } from "../assets/svg/nav-jobs.svg";
import { ReactComponent as Video } from "../assets/svg/share-video.svg";
import { ReactComponent as Image } from "../assets/svg/share-image.svg";
import { ReactComponent as Close } from "../assets/svg/close-icon.svg";
import { ReactComponent as Drop } from "../assets/svg/down-icon.svg";

import ProfileImg from "../assets/images/kibet.png";

const CreatePost = ({ showModal, setShowModal }) => {
  const [currentTab, setCurrentTab] = useState(1);
  const [previewImage, setPreviewImage] = useState("");
  const [post, setPost] = useState({
    desc: "",
    photo: "",
  });
  const tabs = [
    {
      id: 1,

      title: "create post",
    },
    {
      id: 2,

      title: "Edit photo",
    },
    {
      id: 3,

      title: "edit video",
    },
    {
      id: 4,

      title: "who can see your post",
    },
    {
      id: 5,

      title: "Who can comment your on your post",
    },
  ];
  const handleClick = () => {
    setShowModal(!showModal);
    setPreviewImage("");
    setCurrentTab(1);
  };
  const backHandler = () => {
    if (currentTab === 4 || currentTab === 5) {
      setCurrentTab(1);
    } else {
      setCurrentTab(1);
      setPreviewImage("");
    }
  };
  const saveHandler = () => {
    setPreviewImage(previewImage);
    setPost({ ...post, photo: previewImage });
    setCurrentTab(1);
  };

  const onChangeHandler = (e) => {
    if (e.target.name === "photo") {
      const img = e.target.files[0];
      if (img === "undefined") {
        alert("please upload an image");
        return;
      }
      setPreviewImage(img);
    } else {
      setPost({ ...post, [e.target.name]: e.target.value });
    }
  };

  return (
    <div
      className={
        showModal
          ? "createPostModalContainer modalActive"
          : "createPostModalContainer"
      }
    >
      <div className="modalOverlay" onClick={handleClick}></div>
      <div className="createPostCard">
        <div className="modalHeader">
          <span className="title">{tabs[currentTab - 1].title}</span>
          <span className="cancelPostBtn" onClick={handleClick}>
            <Close />
          </span>
        </div>
        <div className="modalBody">
          {(currentTab === 2 && (
            <EditPost
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              setPost={setPost}
              post={post}
              onChangeHandler={onChangeHandler}
            />
          )) ||
            (currentTab === 3 && <EditPost />)}
          {currentTab === 1 && (
            <>
              <div className="flex">
                <div className="userImageContainer">
                  <img src={ProfileImg} alt="" className="userAvatar" />
                </div>
                <div className="userPreference">
                  <h1 className="userName">Dennis Kibet</h1>
                  <button
                    className="postPreferenceBtn"
                    onClick={() => setCurrentTab(4)}
                  >
                    <Drop /> Anyone <Drop />
                  </button>
                </div>
              </div>
              <div className="postDetails">
                <textarea
                  name="desc"
                  id="postDescription"
                  value={post.desc}
                  onChange={(e) => onChangeHandler(e)}
                  placeholder="What do you want to talk about"
                ></textarea>
              </div>
              {previewImage && (
                <div className="imagePreviewContainer">
                  <img
                    src={URL.createObjectURL(previewImage)}
                    alt=""
                    className="previewImg"
                  />
                </div>
              )}
            </>
          )}
        </div>
        <div className="modalFooter">
          {currentTab !== 1 && (
            <div className="editingRow">
              <div className="editBtns">
                <button className="btn backBtn" onClick={backHandler}>
                  Back
                </button>

                <button
                  className="btn saveBtn"
                  onClick={saveHandler}
                  disabled={previewImage === ""}
                >
                  Done
                </button>
              </div>
            </div>
          )}
          {currentTab === 1 && (
            <div className="row">
              <div className="colLeft">
                <ul className="colLeftToolBars">
                  <li className="toolBarItem">
                    <button onClick={() => setCurrentTab(2)}>
                      <Image className="tool" />
                    </button>
                  </li>
                  <li className="toolBarItem">
                    <button className="tool" onClick={() => setCurrentTab(3)}>
                      <Video />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="colRight">
                <button
                  className="commentPreferenceBtn"
                  onClick={() => setCurrentTab(5)}
                >
                  <Drop /> Anyone <Drop />
                </button>
                <button
                  className="createPostBtn"
                  disabled={post.desc === "" && post.photo === ""}
                >
                  post
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EditPost = ({ previewImage, onChangeHandler }) => {
  return (
    <div className="photoUploadArea">
      {previewImage ? (
        <div className="imagePreviewContainer">
          <img
            src={URL.createObjectURL(previewImage)}
            alt=""
            className="previewImg"
          />
        </div>
      ) : (
        <>
          <label htmlFor="file" className="customUpload">
            Select images to share.
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            name="photo"
            onChange={(e) => onChangeHandler(e)}
            id="file"
            className="file"
          />
        </>
      )}
    </div>
  );
};

export default CreatePost;
