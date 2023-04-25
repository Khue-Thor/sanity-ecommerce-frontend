import product from "@/sanity-ecom/schemas/product";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Toast, toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item && item._id === product._id);

    const updatedTotalPrice = totalPrice + product.price * quantity;
    const updatedTotalQuantities = totalQuantities + quantity;

    let updatedCartItems;
    if (checkProductInCart) {
      updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct && cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return cartProduct;
      });
    } else {
      product.quantity = quantity;
      updatedCartItems = [...cartItems, { ...product }];
    }

    setTotalPrice(updatedTotalPrice);
    setTotalQuantities(updatedTotalQuantities);
    setCartItems(updatedCartItems);

    if (quantity > 0) {
      toast.success(`${quantity} ${product.name} added to the cart.`);
    }
  };

  let foundProuduct;
  let index;

  const onRemove = (product) => {
    foundProuduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - foundProuduct.price * foundProuduct.quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProuduct.quantity);
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    const index = cartItems.findIndex((product) => product._id === id);
    if (index === -1) {
      return;
    }
  
    const updatedCartItems = [...cartItems];
    const foundProduct = updatedCartItems[index];
  
    if (value === "inc") {
      updatedCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec" && foundProduct.quantity > 1) {
      updatedCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    } else {
      return;
    }
  
    setCartItems(updatedCartItems);
  };
  

  useEffect(() => {
    // Calculate total price and quantities when cartItems changes
    const newTotalPrice = cartItems.reduce((total, item) => {
      if (item && item.price) {
        return total + item.price * item.quantity;
      } else {
        return total;
      }
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

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
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
