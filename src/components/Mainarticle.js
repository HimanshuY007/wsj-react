import React from "react";

export default function Mainarticle({ article, hours }) {
  return (
    <div>
      <div className="mainheading">
        <div className="mainimage">
          <img src={article.urlToImage} alt="Mainheading" />
        </div>
        <div className="maintitle">{article.title}</div>
        <div
          className="mainseparator"
          style={{ textAlign: "center", margin: "10px 0px" }}
        >
          <img src="./images/Line.svg" alt="noimage" />
        </div>
        <div className="maincontent">{article.content}</div>
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
    </div>
  );
}
