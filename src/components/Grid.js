import React from "react";
import "../stylesheets/Grid.css";

function activeRow(e) {
  var node = e.target.parentNode.parentNode.parentNode.children;
  for (let i = 0; i < node.length; i++) {
    node[i].classList.remove("active");
  }
  e.target.parentNode.parentNode.classList.add("active");
}

function Grid() {
  return (
    <>
      <table className="grid" onClick={activeRow}>
        <tbody className="active">
          <tr>
            <td>DJIA</td>
            <td>2124.45</td>
            <td>-210.22</td>
            <td>-0.62%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>S&P 500</td>
            <td>33823.45</td>
            <td>-1.84</td>
            <td>-0.04%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Nasdaq</td>
            <td>14161.35</td>
            <td>121.67</td>
            <td>0.87%</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Rusell</td>
            <td>2287.46</td>
            <td>-27.23</td>
            <td>-1.18%</td>
          </tr>
        </tbody>
      </table>
      <div className="watchlist">
        <div>View Watchlist</div>
        <div>
          View All Market Data{" "}
          <span className="material-icons">arrow_forward</span>
        </div>
      </div>
    </>
  );
}

export default Grid;
