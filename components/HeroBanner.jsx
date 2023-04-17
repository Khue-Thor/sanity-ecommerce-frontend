import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner__section">
      <div className="hero-banner__container">
        <div className="hero-banner__header-content">
          <p className="hero-banner__small-text">{heroBanner.smallText}</p>
          <h3 className="hero-banner__mid-text">{heroBanner.midText}</h3>
          <h1 className="hero-banner__large-text">{heroBanner.largeText1}</h1>
        </div>
        <img className="hero-banner__image" src={urlFor(heroBanner.image)} alt="product" />
        <div className="hero-banner__bottom-container">
          <button className="hero-banner__button">Shop now</button>
          <div className="hero-banner__desc-content">
            <h4 className="hero-banner__desc-header">Description</h4>
            <p className="hero-banner__desc">
              this is the best speaker in the market this is the best speaker in the marketthis is
              the best speaker in the market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
