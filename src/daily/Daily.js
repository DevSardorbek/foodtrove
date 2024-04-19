import React from "react";
import "../sass/__daily.scss";
import dailyimg from "../assets/images/dailyimg.png";

const Daily = () => {
  return (
    <div className="daily__wrapper">
      <div className="container">
        <div className="daily__section">
          <div className="daily__seciton-info">
            <h1>Stay home & get your daily needs from our shop</h1>
            <p>
              Start You'r Daily Shopping with
              <span>Nest Mart</span>
            </p>
            <form>
              <input type="email" placeholder="Your emaill address" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="daily__section-img">
            <img src={dailyimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
