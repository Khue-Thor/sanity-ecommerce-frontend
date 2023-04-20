import React, { createContext, useContext, useState, useEffect } from "react";
import { Toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((item) => item + 1);
  };

  const decreaseQty = () => {
    setQty((item) => {
      if (item - 1 < 1) {
        return 1;
      }
      return item - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};


export const useStateContext = () => useContext(Context);