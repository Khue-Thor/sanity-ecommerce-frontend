import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import AccountModal from "./AccountModal";

import Image from "next/image";
import NavBar from "./NavBar";
import logo from "../public/images/logo.svg";
import menu from "../public/images/menu.svg";
import close from "../public/images/close.svg";

import { useStateContext } from "../context/StateContext";

const Header = () => {
  const { totalQuantities } = useStateContext();
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const handleOpenAccountModal = () => setIsAccountModalOpen(true);

  const handleMenuToggle = () => setIsMenuModalOpen(true);

  const closeModal = () => {
    setIsAccountModalOpen(false);
  };

  useEffect(() => {
    function handleOverlayClose(e) {
      if (!e.target.closest(".modal__content")) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);
  return (
    <div className="header">
      <div className="header__container">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="header__logo" />
        </Link>

        {/* <div className="header__search-wrapper">
          <input
            className="header__search-input"
            type="text"
            name="search"
            placeholder="Search..."
          />
          <button type="button" className="header__search-button" />
        </div> */}

        <div className="header__menu-wrapper">
          <button
            className="header__button"
            onMouseOver={handleOpenAccountModal}
            onClick={handleOpenAccountModal}
          >
            Account
          </button>

          <Link href={"/signin"} className="header__order-link">
            <button className="header__button">Orders</button>
          </Link>
          <Link href={"/cart"}>
            <button className="header__button" type="button">
              <AiOutlineShoppingCart className="header__cart-icon" />
              <span className="header__cart-item-qty">{totalQuantities}</span>
            </button>
          </Link>
        </div>

        <div className="header__menu-hamburger">
          <Link href={"/cart"}>
            <button className="hide__cart" type="button">
              <AiOutlineShoppingCart className="header__cart-icon" />
              <span className="header__cart-item-qty">{totalQuantities}</span>
            </button>
          </Link>
          <Image
            src={isMenuToggle ? close : menu}
            alt="logo"
            className="header__menu-icon"
            onClick={() => setIsMenuToggle(!isMenuToggle)}
          />
          {isMenuToggle && (
            <div className="header__menu-modal">
              <Link href={"/signin"}>
                <button className="modal__signin-link">Sign In</button>
              </Link>
              <p className="modal__description">
                New customer?{" "}
                <Link href={"/signup"} className="modal__signup-link">
                  Start here
                </Link>
              </p>
              <Link href={"/signin"} className="header__order-link">
                <button className="header__button">Orders</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* <NavBar /> */}
      {isAccountModalOpen && (
        <AccountModal onMouseLeaveCLose={closeModal} onClickClose={closeModal} />
      )}
    </div>
  );
};

export default Header;
