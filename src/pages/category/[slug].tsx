import Head from "next/head";
import { FC } from "react";

import { CardList } from "@src/components";
import AppLayout from "@src/layout";

const CategoryPage: FC = () => {
  return (
    <>
      <Head>
        <title>Joly Bell - Категории</title>
      </Head>
      <AppLayout>
        <CardList items={[{}]} renderItem={(item) => <div></div>} />
      </AppLayout>
    </>
  );
};

export default CategoryPage;
