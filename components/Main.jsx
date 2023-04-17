import React from "react";
import ProductCard from "./ProductCard";

const Main = ({ products }) => {
  return (
    <main className="main">
      <ul className="main__product-lists">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
