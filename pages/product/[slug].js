import React, { useState, useEffect } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { RecProduct, Header, Footer } from "@/components";
import { useStateContext } from "../../context/StateContext";
import Link from "next/link";

const ProductDetails = ({ product, products }) => {
  const { image, desc, price } = product;
  const [index, setIndex] = useState(0);
  const { increaseQty, decreaseQty, qty, onAdd } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
  };

  return (
    <div className="product">
      <Header />
      <div className="product__detail-container">
        <div>
          <div className="product__image-container">
            <img src={urlFor(image && image[index])} className="product__detail-image" />
          </div>
        </div>
        <div className="product__detail-desc">
          <h4>Details:</h4>
          <p className="product__desc">{desc}</p>

          <div className="product__rate-container">
            <div className="product__stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>

          <p className="product__price">${price}</p>
          <div className="product__small-image-wrapper">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "product__small-image selected-image" : "product__small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="order-section-card">
            <div className="product__quantity">
              <h3 className="product__quantity-title">Quantity:</h3>
              <p className="product__quantity-button-container">
                <span className="product__quantity-button decrease-button" onClick={decreaseQty}>
                  <AiOutlineMinus className="button-icon" />
                </span>
                <span className="quantity_count">{qty}</span>
                <span className="product__quantity-button increase-button " onClick={increaseQty}>
                  <AiOutlinePlus className="button-icon" />
                </span>
              </p>
            </div>

            <div className="product__order-button-container">
              <button
                type="button"
                className="product__add-to-cart product__button"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
              <Link href={"/cart"}>
                <button
                  type="button"
                  className="product__buy product__button"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="small-product__detail-container">
        <h4>Details:</h4>
        <p className="product__desc">{desc}</p>

        <div className="product__rate-container">
          <div className="product__stars-container">
            <AiFillStar className="product__rate-star" />
            <AiFillStar className="product__rate-star" />
            <AiFillStar className="product__rate-star" />
            <AiFillStar className="product__rate-star" />
            <AiOutlineStar />
          </div>
          <p className="product__rate-total">(20)</p>
        </div>
        <div>
          <div className="product__image-container">
            <img src={urlFor(image && image[index])} className="product__detail-image" />
          </div>
        </div>
        <p className="product__price">${price}</p>
        <div className="product__small-image-wrapper">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "product__small-image selected-image" : "product__small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="order-section-card">
            <div className="product__quantity">
              <h3 className="product__quantity-title">Quantity:</h3>
              <p className="product__quantity-button-container">
                <span className="product__quantity-button decrease-button" onClick={decreaseQty}>
                  <AiOutlineMinus className="button-icon" />
                </span>
                <span className="quantity_count">{qty}</span>
                <span className="product__quantity-button increase-button " onClick={increaseQty}>
                  <AiOutlinePlus className="button-icon" />
                </span>
              </p>
            </div>

            <div className="product__order-button-container">
              <button
                type="button"
                className="product__add-to-cart product__button"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
              <Link href={"/cart"}>
                <button
                  type="button"
                  className="product__buy product__button"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2 className="maylike-products__header">You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <RecProduct key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// getStaticPaths is needed, if not the getStaticProps won't work.

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
