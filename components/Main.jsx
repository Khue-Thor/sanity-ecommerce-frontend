import React from "react";
import ProductCard from "./ProductCard";
import { useStateContext } from "../context/StateContext";

const Main = ({ products }) => {
  const { qty, onAdd } = useStateContext();
  return (
    <main className="main">
      <ul className="main__product-lists">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} onAdd={() => onAdd(product, qty)} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
