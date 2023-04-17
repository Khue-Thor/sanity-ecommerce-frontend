import React from "react";
import { client } from "../lib/client";
import { Header, HeroBanner} from "../components/index";

const index = ({products, bannerData}) => {
  return (
    <>
      <Header />
        
      <HeroBanner heroBanner={bannerData}/>
      {console.log(bannerData)}
      <div>
        {products?.map((product) => product.name)}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "produc"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default index;
