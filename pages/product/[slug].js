import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { client, urlFor } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  const { image, name, desc, price } = product;

  return (
    <div className="product">
      <div className="product__detail-container">
        <div>
          <div className="product__image-container">
            <img src={urlFor(image && image[0])} className="product__image"/>
          </div>
          {/* <div className="product__small-image-container">
            {image?.map((item, i) => (
              <img src={urlFor(item)} className="" onMouseEnter=""/>
            ))}
            </div> */}
        </div>
        <div className="product__detail-desc">
          <h4>Details:</h4>

          <p>{desc}</p>
          <div>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <p>${price}</p>
          <div className="product__quantity">
            <h3>Quantity:</h3>
            <p>
              <span>
                <AiOutlineMinus />
              </span>
              <span>0</span>
              <span>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div>
            <button type="button" className="product__add-to-cart" onClick="">
              Add to Cart
            </button>
            <button type="button" className="product__add-to-cart" onClick="">
              Buy Now
            </button>
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
  const productsQuery = '[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
