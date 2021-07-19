import Head from "next/head";

import { ProductDetails } from "@src/features";
import { ProductStyles } from "@src/theme/product-styles";
import { NextPageContext } from "next";
import { firebase } from "@src/libs";
import { IProduct } from "../../../interfaces/product";

interface IProductPage {
  product: IProduct;
}

export default function ProductPage({ product }: IProductPage) {
  console.log(product);
  return (
    <>
      <Head>
        <title>123</title>
      </Head>
      <ProductStyles />
      <ProductDetails product={product} />
    </>
  );
}

interface ProductPageContext extends NextPageContext {
  query: {
    category: string;
    slug: string;
  };
}

export async function getServerSideProps({ query }: ProductPageContext) {
  try {
    const response = await firebase
      .firestore()
      .collection("products")
      .doc(query.category)
      .get();
    const data = response.data() as { items: IProduct[] };
    console.log(data);
    const requiredProduct = data.items.filter((item) => item.id === query.slug);

    return {
      props: {
        product: requiredProduct[0],
      },
    };
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: "/error",
      },
    };
  }
}
