import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__heading-container">
        <h2 className="cart__heading">Your Shopping Cart</h2>
      </div>
      <div className="cart__product-container">
        <div className="cart__product-lists">
          <div className="cart__product"></div>
        </div>
        <div className="cart__checkout-wrapper">
          <p className="cart__checkout-total">
            Subtotal (2 items): <span className="cart__checkout-total-price">$39.99</span>
          </p>
          <button type="button" className="cart__checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
