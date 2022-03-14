import React from "react";
import { ReactComponent as Close } from "../assets/svg/close-icon.svg";

const UserCard = ({ name, title, tags, userImg, bannerImg }) => {
  return (
    <div className="col">
      <div className="card">
        <span className="removeUserAction">
          <Close className="removeIcon" />
        </span>

        <div className="banner">
          <img src={bannerImg} alt="" className="bannerImg" />
        </div>
        <div className="userAvatar">
          <img src={userImg} alt="" className="userAvatarImg" />
        </div>
        <h2 className="userName">
          {name} <span className="fakeLogo">In</span>
        </h2>
        <p className="jobTitle">{title}</p>
        <p className="tags">{tags && `Talks about ${tags}`}</p>
        <div className="userAction">
          <button className="followBtn">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
