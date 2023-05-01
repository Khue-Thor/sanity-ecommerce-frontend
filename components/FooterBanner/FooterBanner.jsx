import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner__section">
      <div className="footer-banner__container">
        <div className="footer-banner_left-con">
          <p className="footer-banner__discount">{discount}</p>
          <h3 className="footer-banner__title">{largeText1}</h3>
          <h3 className="footer-banner__title">{largeText2}</h3>
          <p className="footer-banner__sale-date">{saleTime}</p>
        </div>
        <img className="footer-banner__image" src={urlFor(image)} alt="product" />
        <div className="footer-banner_right-con">
          <p className="footer-banner__small-desc1">{smallText}</p>
          <h3 className="footer-banner__mid-desc">{midText}</h3>
          <h3 className="footer-banner__small-desc2">{desc}</h3>
          <Link href={`/product/${product}`}>
            <button className="footer-banner__button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
