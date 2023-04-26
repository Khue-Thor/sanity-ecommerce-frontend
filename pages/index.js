import React, { useState, useEffect } from "react";
import { client } from "../lib/client";
import { Header, HeroBanner, Main, FooterBanner, Footer, AccountModal, Cart } from "../components";
import Router from "next/router";

const index = ({ products, bannerData }) => {
  return (
    <div className="App">
      <Header />

      <div className="App-content">
        <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
        <Main products={products} />

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
        <Footer />
      </div>
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
