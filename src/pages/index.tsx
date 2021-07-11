import Head from "next/head";

import { HomePageView } from "@src/views";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joly Bell</title>
      </Head>
      <HomePageView />
    </>
  );
}
