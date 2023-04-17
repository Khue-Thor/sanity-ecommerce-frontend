import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./NavBar";
import logo from "../public/images/logo.svg";
import carticon from "../public/images/carticon.svg";

const Header = ({ onAccountOpen }) => {
  return (
    <div className="header">
      <div className="header__container">
        <Image src={logo} alt="logo"className="header__logo" />

        <div className="header__search-wrapper">
          <input
            className="header__search-input"
            type="text"
            name="search"
            placeholder="Search..."
          />
          <button type="button" className="header__search-button" />
        </div>

        <div className="header__menu-wrapper">
          <button className="header__button" onMouseOver={onAccountOpen}>
            Account
          </button>

          <button className="header__button">Orders</button>

          <button className="header__button">
            <Image src={carticon} alt=""/>
            Cart
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
