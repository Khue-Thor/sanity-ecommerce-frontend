import React from "react";

import { client, urlFor } from "../../lib/client";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  return (
    <div className="product">
      <div className="product__detail-container">
        <div className="product__image">
          <img src={urlFor(image && image[0])} />
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
