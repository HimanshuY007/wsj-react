import React from "react";
import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navcontainer">
        <div className="navbar">
          <div className="title">THE WALL STREET JOURNAL.</div>
          <div className="navlist">
            <div className="navitem" id="home">
              Home
            </div>
            <div className="navitem" id="world">
              World
            </div>
            <div className="navitem" id="U.S.">
              U.S.
            </div>
            <div className="navitem" id="politics">
              Politics
            </div>
            <div className="navitem" id="economy">
              Economy
            </div>
            <div className="navitem" id="businesss">
              Business
            </div>
            <div className="navitem" id="tech">
              Tech
            </div>
            <div className="navitem" id="markets">
              Markets
            </div>
            <div className="navitem" id="opinion">
              Opinion
            </div>
            <div className="navitem" id="life">
              Life & Markets
            </div>
            <div className="navitem" id="realestate">
              Real Estate
            </div>
            <div className="navitem" id="magazine">
              WSJ. Magazine
            </div>
            <div className="navitem" id="sports">
              Sports
            </div>
          </div>
          <div>
            <span
              className="searchicon material-icons"
              style={{ fontSize: "30px" }}
            >
              search
            </span>
          </div>
          <div className="searchpanel">
            <div className="subscribe">
              <span>Subscribe</span>
              <span>Sign in</span>
            </div>
            <div className="search">
              Search<span className="material-icons">search</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
