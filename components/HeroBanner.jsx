import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner__section">
      <div className="hero-banner__container">
        <div className="hero-banner__header-content">
          <p className="hero-banner__small-text">Beats Solo</p>
          <h3 className="hero-banner__mid-text">Wirless</h3>
          <h1 className="hero-banner__large-text">HEADPHONE</h1>
        </div>
        <div className="hero-banner__bottom-container">
          <button className="hero-banner__button">Shop now</button>
          <div className="hero-banner__desc-content"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
