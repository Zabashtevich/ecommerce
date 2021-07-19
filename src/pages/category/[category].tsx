import Head from "next/head";

import { CardList, Card } from "@src/components";
import { NextPageContext } from "next";
import { firebase } from "@src/libs";
import { IProduct } from "../../interfaces/product";

interface ICategoryPage {
  products: IProduct[];
}

export default function CategoryPage({ products }: ICategoryPage) {
  return (
    <>
      <Head>
        <title>Joly Bell - Категории</title>
      </Head>

      <CardList
        items={products}
        renderItem={(item) => <Card item={item} key={item.id} />}
      />
    </>
  );
}

interface ProductContext extends NextPageContext {
  query: { category: string };
}

export async function getServerSideProps({ query }: ProductContext) {
  try {
    const collections = await firebase
      .firestore()
      .collection("products")
      .doc(query.category)
      .get();

    const response = collections.data() as { items: IProduct[] };

    return {
      props: {
        products: response.items,
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
