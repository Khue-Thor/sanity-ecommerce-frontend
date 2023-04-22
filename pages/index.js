import React, { useState, useEffect } from "react";
import { client } from "../lib/client";
import { Header, HeroBanner, Main, FooterBanner, Footer, AccountModal, Cart } from "../components";
import Router from "next/router";


const index = ({ products, bannerData }) => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const handleOpenAccountModal = () => setIsAccountModalOpen(true);

  const closeModal = () => {
    setIsAccountModalOpen(false);
  };

  useEffect(() => {
    function handleOverlayClose(e) {
      if (!e.target.closest(".modal__content")) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleOverlayClose);

    return () => {
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, []);

  return (
    <div className="App">
      <Header onAccountOpen={handleOpenAccountModal}/>
      <div className="App-content">
        <HeroBanner heroBanner={bannerData.length && bannerData[1]} />
        <Main products={products} />

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
        <Footer/>
      </div>
      {isAccountModalOpen && (
        <AccountModal onMouseLeaveCLose={closeModal} onClickClose={closeModal} />
      )}
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
