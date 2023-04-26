import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsCartCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";

import { useStateContext } from "@/context/StateContext";
import { fireStars } from "@/lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    fireStars();
  }, [])
  return (
    <div className="success">
      <div className="success__card">
        <BsCartCheckFill className="success__cart" />
        <h2 className="success__thank">Thank you for your order</h2>
        <p className="success__desc">Check your email for the receipt.</p>
        <p className="success__desc">
          If you have any questions, please email{" "}
          <a className="email" href="mailto:llcsupport@gmail.com">llcsupport@gmail.com</a>
        </p>
        <Link href={'/'}>
          <button type="button" className="success__card-button">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
