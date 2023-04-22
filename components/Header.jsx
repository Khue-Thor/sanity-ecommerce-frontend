import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Image from "next/image";
import NavBar from "./NavBar";
import logo from "../public/images/logo.svg";

import { useStateContext } from "../context/StateContext";

const Header = ({ onAccountOpen }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="header">
      <div className="header__container">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="header__logo" />
        </Link>

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

          <Link href={"/cart"}>
            <button className="header__button" type="button">
              <AiOutlineShopping className="header__cart-icon" />
              <span className="header__cart-item-qty">{totalQuantities}</span>
            </button>
          </Link>
    
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
