import { FC } from "react";
import Head from "next/head";

import { ProductDetails } from "@src/features";
import { ProductStyles } from "@src/theme/product-styles";

const ProductPage: FC = () => {
  return (
    <>
      <Head>
        <title>123</title>
      </Head>
      <ProductStyles />
      <ProductDetails />
    </>
  );
};

export default ProductPage;
