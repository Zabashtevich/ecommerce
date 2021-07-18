import Head from "next/head";

import { ProductDetails } from "@src/features";
import { ProductStyles } from "@src/theme/product-styles";

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>123</title>
      </Head>
      <ProductStyles />
      <ProductDetails />
    </>
  );
}
