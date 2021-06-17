import React, { useState, useEffect } from "react";
import "../stylesheets/Headlines.css";
import Article from "./Article";
import Loading from "./Loading";
import Mainarticle from "./Mainarticle";
import Shortarticle from "./ShortArticle";
import Opinion from "./Opinion";

let source = "google-news";
let apiKey = "65123c4edea14127ae7876cf38e38a6c";
const currentTime = new Date();

function releaseDate(e) {
  let d = new Date(e.publishedAt);
  let hours = Math.round((currentTime - d) / (1000 * 60 * 60));
  return hours;
}

export default function Headlines() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticle(JSON.parse(data.contents).articles);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className="newscontainer">
        <div className="column1" style={{ flex: "1" }}>
          {article.slice(3, 6).map((e) => {
            return (
              <Article
                key={article.indexOf(e)}
                article={e}
                hours={releaseDate(e)}
              />
            );
          })}
        </div>
        <div className="column2" style={{ flex: "1.5" }}>
          {article.slice(0, 1).map((e) => {
            return (
              <Mainarticle
                key={article.indexOf(e)}
                article={e}
                hours={releaseDate(e)}
              />
            );
          })}
          {article.slice(1, 3).map((e) => {
            return (
              <Article
                key={article.indexOf(e)}
                article={e}
                hours={releaseDate(e)}
              />
            );
          })}
        </div>
        <div className="column3" style={{ flex: "0.5" }}>
          {article.slice(6, 9).map((e) => {
            return (
              <Shortarticle
                key={article.indexOf(e)}
                article={e}
                hours={releaseDate(e)}
              />
            );
          })}
        </div>
        <div className="column4" style={{ flex: "1" }}>
          <Opinion />
        </div>
      </div>
    );
  }
}
