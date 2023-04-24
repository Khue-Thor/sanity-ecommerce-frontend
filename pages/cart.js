import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { Header, Footer } from "@/components";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, increaseQty, decreaseQty, qty } =
    useStateContext();
  return (
    <div className="cart">
      <Header />
      <div className="cart__heading-container">
        <h2 className="cart__heading">Your Shopping Cart</h2>
      </div>
      <div className="cart__main-container">
        <div className="cart__product-lists">
          <div className="cart__product-container">
            {cartItems.length < 1 && (
              <div className="empty-cart">
                <AiOutlineShoppingCart className="cart-icon" />
                <div>
                  <h3>Your shopping Cart is empty</h3>
                  <Link href={"/"}>
                    <button className="card__button empty-cart-button">Continue Shopping</button>
                  </Link>
                </div>
              </div>
            )}

            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="cart__product" key={item._id}>
                  <img src={urlFor(item?.image[0])} className="cart__product-image" />
                  <div className="cart__product-desc-container">
                    <p className="cart__product-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="cart__checkout-wrapper">
          <p className="cart__checkout-total">
            Subtotal ({totalQuantities} items):{" "}
            <span className="cart__checkout-total-price">${totalPrice}29.99</span>
          </p>
          <button type="button" className="cart__checkout-button">
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
