import React from "react";
import { Link } from "react-router-dom";
const NewsListItem = () => {
  return (
    <li className="newsListItem">
      <h1 className="newsHeader">
        <Link to="">Civilian casualties mount in ukraine.</Link>
      </h1>
      <p className="newsInfo">Top news 17893 readers</p>
    </li>
  );
};

export default NewsListItem;
