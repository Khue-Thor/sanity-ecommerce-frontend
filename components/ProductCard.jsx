import React from "react";
import { urlFor } from "../lib/client";
import Link from "next/link";

const ProductCard = ({ product: { image, desc, slug, price } }) => {
  return (
    <div className="card">
      <div className="card__content">
        <Link href={`/product/${slug.current}`} className="product-link">
          <img className="card__image" src={urlFor(image && image[0])} />
        </Link>
        <div className="card__detail">
          <p className="card__description">{desc}</p>
          <p className="card__price">
            price: <span className="card__price-number">{price}</span>
          </p>
          <button type="button" className="card__add-button card__button">
            Add To Cart
          </button>
          <button type="button" className="card__add-checkout card__button">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
