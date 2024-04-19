import React from "react";
import "../../sass/__navbarbottom.scss";
import bottomimg from "../../assets/images/bottmimg.png";
import search from "../../assets/images/search.png";
import avatar from "../../assets/images/navAvatar.png";
import heart from "../../assets/images/navHeart.png";
import shop from "../../assets/images/navShop.png";

const NavbarBotttom = () => {
  return (
    <div className="navbarbottom__section">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <div className="navbarbottom__logo">
            <h2>LOGO</h2>
          </div>
          <div className="navbarbottom-search">
            <form>
              <input type="text" placeholder="Search For items..." />
              <div>
                <button className="btn1">
                  <p>All Categories</p>
                  <img src={bottomimg} alt="" />
                </button>
                <button className="btn2">
                  <img src={search} alt="" />
                </button>
              </div>
            </form>
          </div>
          <div className="navbar__bottom-shop">
            <div>
              <img src={avatar} alt="" />
              <p>Account</p>
            </div>
            <div>
              <img src={heart} alt="" />
              <p>Wishlist</p>
            </div>
            <div>
              <img src={shop} alt="" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBotttom;
