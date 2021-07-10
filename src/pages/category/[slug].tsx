import Head from "next/head";
import { FC } from "react";

import { CardList, Card } from "@src/components";
import AppLayout from "@src/layout";

const CategoryPage: FC = () => {
  return (
    <>
      <Head>
        <title>Joly Bell - Категории</title>
      </Head>
      <AppLayout>
        <CardList
          items={[
            {
              name: "Joly shit",
              price: 3000,
              view: {
                main: "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
              },
            },
            {
              name: "Joly shit",
              price: 3000,
              view: {
                main: "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
              },
            },
            {
              name: "Joly shit",
              price: 3000,
              view: {
                main: "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
              },
            },
            {
              name: "Joly shit",
              price: 3000,
              view: {
                main: "https://www.petage.com/wp-content/uploads/2019/09/Depositphotos_74974941_xl-2015-e1569443284386-670x627.jpg",
              },
            },
          ]}
          renderItem={(item) => <Card item={item} />}
        />
      </AppLayout>
    </>
  );
};

export default CategoryPage;
