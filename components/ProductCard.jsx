import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";

const ProductCard = ({ product: { image, desc, slug, price }, onAdd }) => {
  const { qty } = useStateContext();
  const handleBuyNow = () => {
    onAdd(qty);
  };
  return (
    <div className="card">
      <div className="card__content">
        <Link href={`/product/${slug.current}`} className="product-link">
          <img className="card__image" src={urlFor(image && image[0])} />
        </Link>
        <div className="card__detail">
          <p className="card__description">{desc}</p>
          <p className="card__price">
            price: <span className="card__price-number">${price}</span>
          </p>
          <button type="button" className="card__add-button card__button" onClick={onAdd}>
            Add To Cart
          </button>
          <Link href={'/cart'}>
            <button
              type="button"
              className="card__add-checkout card__button"
              onClick={handleBuyNow}
            >
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
