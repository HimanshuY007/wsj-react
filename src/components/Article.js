import React from "react";

export default function Article({ article, hours }) {
  return (
    <div className="articleheading">
      <div className="articletitle">{article.title}</div>
      <div className="articlecontent">
        <img src={article.urlToImage} alt="articleheading" />
        {article.content}
      </div>
      <div className="timecontainer">
        <span
          className="material-icons"
          style={{ fontSize: "15px", marginRight: "8px" }}
        >
          schedule
        </span>
        <span className="time">{hours}hrs ago</span>
      </div>
    </div>
  );
}
