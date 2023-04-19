import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { RecProduct } from "@/components";
import ProductCard from "@/components/ProductCard";

const ProductDetails = ({ product, products }) => {
  const { image, desc, price } = product;

  return (
    <div className="product">
      <div className="product__detail-container">
        <div>
          <div className="product__image-container">
            <img src={urlFor(image && image[0])} className="product__image" />
          </div>
          {/* <div className="product__small-image-container">
            {image?.map((item, i) => (
              <img src={urlFor(item)} className="" onMouseEnter=""/>
            ))}
            </div> */}
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
          <div className="order-section-card">
            <div className="product__quantity">
              <h3 className="product__quantity-title">Quantity:</h3>
              <p className="product__quantity-button-container">
                <span className="product__quantity-button decrease-button">
                  <AiOutlineMinus className="button-icon" />
                </span>
                <span className="quantity_count">0</span>
                <span className="product__quantity-button increase-button">
                  <AiOutlinePlus className="button-icon" />
                </span>
              </p>
            </div>
            <div className="product__order-button-container">
              <button type="button" className="product__add-to-cart product__button" onClick="">
                Add to Cart
              </button>
              <button type="button" className="product__buy product__button" onClick="">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <RecProduct key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
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
