import { FC } from "react";
import Head from "next/head";
import { ProductSlider } from "@src/components";

const ProductPage: FC = () => {
  return (
    <>
      <Head>
        <title>123</title>
      </Head>
      <ProductSlider />
    </>
  );
};

export default ProductPage;
