import React from "react";
import "../../sass/__hero.scss";
import del from "../../assets/images/Vector.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";

const data = ["Shopping", "Recips", "Kitchen", "News", "Food"];

const Hero = () => {
  let btn = data?.map((el, inx) => (
    <React.Fragment key={inx}>
      <button>
        <img src={del} alt="" />
        <p>{el}</p>
      </button>
    </React.Fragment>
  ));
  return (
    <div className="hero__section">
      <img className="banner img1" src={img1} alt="" />
      <img className="banner img2" src={img2} alt="" />
      <img className="banner img3" src={img3} alt="" />
      <img className="banner img4" src={img4} alt="" />
      <img className="banner img5" src={img5} alt="" />
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__section-left">
            <div>
              <span>100%</span>
              <h4>Organic Vegetables</h4>
            </div>
            <h1>The best way to stuff your wallet.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>
            <form>
              <input type="email" placeholder="Your emaill address" />
              <button>Subscribe</button>
            </form>
          </div>
          <div className="hero__section-right">{btn}</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
