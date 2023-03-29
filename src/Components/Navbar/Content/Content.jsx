import React from "react";

// CSS
import "./Content.css";

// Images
import foxNews from "../../../assets/Fox_News_Channel_logo 1.png";
import cnn from "../../../assets/CNN 1.png";
import cnbc from "../../../assets/CNBC_logo 1.png";
import forbes from "../../../assets/Forbes_logo 1.png";
import newYorkTimes from "../../../assets/NewYorkTimes.png";
import image7 from "../../../assets/image 7.png";
import arrows from "../../../assets/material-symbols_keyboard-double-arrow-right-rounded.png";
import trustscore from "../../../assets/trustscore-4.5-stars.png";
import start from "../../../assets/trustpilot-2 1.png";
import productImage from "../../../assets/Product-image.png";

function Content() {
  return (
    <div className="content-conteiner">
      <div className="aligne-content">
        <div className="content">
          <h3>scelerisque</h3>
          <h2>CURSUS: Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
          <p>
            UPDATE: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent at odio arcu.
          </p>
          <label>WEDNESDAY, MARCH 01, 2023</label>
        </div>

        <div className="conteiner">
          <div className="asSeenOn-conteiner">
            <hr />
            <h4 className="asSeenOn">as seen on</h4>
            <hr />
          </div>

          <div className="logo-banner">
            <img src={forbes} alt="Forbes" />
            <img src={foxNews} alt="Fox news" />
            <img src={cnn} alt="CNN" />
            <img src={cnbc} alt="CNBC" />
            <img src={newYorkTimes} alt="New York Times" />
          </div>
          <hr className="long-line" />
          <img className="main-img" src={image7} alt="image7" />
        </div>
        <button className="btn hide">
          Check Availability
          <img className="arrows" src={arrows} alt="arrows" />
        </button>
      </div>

      <div className="sticky-banner">
        <div className="frame77">
          <div className="rate">
            <p className="rate-txt">Excellent</p>
            <img src={trustscore} alt="trustscore" />
          </div>

          <p className="rated">
            Rated <strong>9.8</strong> out of 10
          </p>
          <div className="rate">
            <p className="based-info">Based on 9,246 reviews</p>
            <img src={start} alt="start" />
            <p className="trustScore">TrustScore</p>
          </div>
        </div>
        <img className="productImage" src={productImage} alt="productImage" />
        <div>
          <p className="brand-name">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <button className="btn">
            Check Availability
            <img className="arrows" src={arrows} alt="arrows" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
