import product from "@/sanity-ecom/schemas/product";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Toast, toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  let foundProuduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} item added to the cart`);
  };

  const onRemove = (product) => {
    foundProuduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice - foundProuduct.price * foundProuduct.quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProuduct.quantity);
    setCartItems(newCartItems);
  };

  // ------- old function ------- //

  // const toggleCartItemQuantity = (id, value) => {
  //   foundProuduct = cartItems.find((item) => item._id === id);
  //   index = cartItems.findIndex((product) => product._id === id);

  //   const newCartItems = cartItems.filter((item) => item._id !== id);
  //   if (value === "inc") {
  //     setCartItems([...newCartItems, { ...foundProuduct, quantity: foundProuduct.quantity + 1 }]);
  //     setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProuduct.price);
  //     setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
  //   } else if (value === "dec") {
  //     if (foundProuduct.quantity > 1) {
  //       setCartItems([...newCartItems, { ...foundProuduct, quantity: foundProuduct.quantity - 1 }]);
  //       setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProuduct.price);
  //       setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
  //     }
  //   }
  // };

  const toggleCartItemQuantity = (id, value) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => {
        if (item._id === id) {
          if (value === "inc") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (value === "dec" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  useEffect(() => {
    // Calculate total price and quantities when cartItems changes
    const newTotalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const newTotalQuantities = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalPrice(newTotalPrice);
    setTotalQuantities(newTotalQuantities);
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
