import React from "react";
import "../../sass/__navbartop.scss";
import { RiMenu3Line } from "react-icons/ri";
import bottomimg from "../../assets/images/bottmimg.png";
import call from "../../assets/images/call.png";

const Navbar = () => {
  return (
    <div className="headertop__section">
      <div className="container">
        <div className="header__top-wrapper">
          <div className="navbar__top-menu">
            <RiMenu3Line />
          </div>
          <div className="navbar__top-links">
            <p>Home</p>
            <div>
              <p>Category</p>
              <img src={bottomimg} alt="" />
            </div>
            <div>
              <p>Products</p>
              <img src={bottomimg} alt="" />
            </div>
            <div>
              <p>Pages</p>
              <img src={bottomimg} alt="" />
            </div>
            <div>
              <p>Blog</p>
              <img src={bottomimg} alt="" />
            </div>
            <div>
              <p>Elements</p>
              <img src={bottomimg} alt="" />
            </div>
          </div>
          <div className="navbar__top-call">
            <img src={call} alt="" />
            <p>+123 ( 456 ) ( 7890 )</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
