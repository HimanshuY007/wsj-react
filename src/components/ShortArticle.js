import React from "react";

export default function ShortArticle({ article, hours }) {
  return (
    <div className="shortarticles">
      <div className="shortimage">
        <img src={article.urlToImage} alt="articleheading" />
      </div>
      <div className="shorttitle">{article.title}</div>
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
