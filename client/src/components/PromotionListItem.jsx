import React from "react";
import { Link } from "react-router-dom";
const PromotionListItem = ({ profileImg }) => {
  return (
    <li className="promotionListItem">
      <div className="promotionImgContainer">
        <img src={profileImg} alt="" className="promotionImg" />
      </div>
      <div className="promotionInfo">
        <h3 className="promotionTitle">Billing at your service</h3>
        <p className="promotionText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="externalLink">
        <Link to="">
          <span className="externalLinkIcon fas fa-chevron-right"></span>
        </Link>
      </div>
    </li>
  );
};

export default PromotionListItem;
