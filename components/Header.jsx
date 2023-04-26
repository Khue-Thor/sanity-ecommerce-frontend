import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

import AccountModal from "./AccountModal";

import Image from "next/image";
import NavBar from "./NavBar";
import logo from "../public/images/logo.svg";

import { useStateContext } from "../context/StateContext";

const Header = ({ onAccountOpen }) => {
  const { totalQuantities } = useStateContext();
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const handleOpenAccountModal = () => setIsAccountModalOpen(true);

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
    <div className="header" onMouseOver={handleOpenAccountModal}>
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
          <button className="header__button" onMouseOver={onAccountOpen}>
            Account
          </button>

          <button className="header__button">Orders</button>

          <Link href={"/cart"}>
            <button className="header__button" type="button">
              <AiOutlineShoppingCart className="header__cart-icon" />
              <span className="header__cart-item-qty">{totalQuantities}</span>
            </button>
          </Link>
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
