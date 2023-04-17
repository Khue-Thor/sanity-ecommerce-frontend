import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

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
        <div className="footer-banner_left-desc">
          <p className="footer-banner__discount">{discount}</p>
          <h3 className="footer-banner__title">{largeText1}</h3>
          <h3 className="footer-banner__title">{largeText2}</h3>
          <p className="footer-banner__sale-date">{saleTime}</p>
        </div>
        <div className="footer-banner_right-desc"></div>
      </div>
    </div>
  );
};

export default FooterBanner;
