import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__description">2023 TS Products All rights</p>
      <p className="footer__link">
        <a href="https://www.linkedin.com/in/khuephamy-phialouang-9b160723b/" target="_blank">
          <AiFillGithub className="footer__github-link" />
        </a>
        <a href="https://github.com/Khue-Thor" target="_blank">
          <AiFillLinkedin className="footer__linkedin-link" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
