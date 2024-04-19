import React from "react";
import "../../sass/__banner.scss";
import star from "../../assets/images/star.png";
import shop from "../../assets/images/cardshop.png";

const Banner = (props) => {
  return (
    <div className="banner__card">
      <div className="card__img">
        <span>new</span>
        <img src={props.item.images[0]} alt="" />
      </div>
      <div className="card__info">
        <p>{props.item.title}</p>
        <h3>{props.item.description}</h3>
        <div className="rating">
          <img src={star} alt="" />
          <p>{props.item.rating}</p>
        </div>
        <div className="price">
          <div>
            <h3>${props.item.price}</h3>
            <del>${props.item.price + 100}</del>
          </div>
          <button>
            <img src={shop} alt="" />
            <p>Add</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
