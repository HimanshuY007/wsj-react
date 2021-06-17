import React from "react";
import "../stylesheets/Loading.css";

function Loading() {
  return (
    <>
      <div className="loadingcontainer">
        <div className="loadingimage">
          <img src="./images/loading.gif" alt="Loading" />
        </div>
        <div className="loadtext">Loading....</div>
      </div>
    </>
  );
}

export default Loading;
