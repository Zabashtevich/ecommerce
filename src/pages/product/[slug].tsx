import { FC } from "react";
import Head from "next/head";

import { ProductDetails } from "@src/features";

const ProductPage: FC = () => {
  return (
    <>
      <Head>
        <title>123</title>
      </Head>
      <ProductDetails />
    </>
  );
};

export default ProductPage;
