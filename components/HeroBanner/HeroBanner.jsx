import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";

const HeroBanner = ({
  heroBanner: { largeText1, smallText, midText, desc, product, buttonText, image },
}) => {
  return (
    <div className="hero-banner__section">
      <div className="hero-banner__container">
        <div className="hero-banner__header-content">
          <p className="hero-banner__small-text">{smallText}</p>
          <h3 className="hero-banner__mid-text">{midText}</h3>
          <h1 className="hero-banner__large-text">{largeText1}</h1>
        </div>
        <img className="hero-banner__image" src={urlFor(image)} alt="product" />
        <div className="hero-banner__bottom-container">
          <Link href={`/product/${product}`}>
            <button className="hero-banner__button">{buttonText}</button>
          </Link>
          <div className="hero-banner__desc-content">
            <h4 className="hero-banner__desc-header">Description</h4>
            <p className="hero-banner__desc">
              {desc}
           
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
