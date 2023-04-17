import React from "react";
import { client } from "../lib/client";
import { Header, HeroBanner, Main, FooterBanner } from "../components";


const index = ({ products, bannerData }) => {
  return (
    <div className="app">
      <Header />
      <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
      <Main products={products}/>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default index;
