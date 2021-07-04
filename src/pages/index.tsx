import Head from "next/head";

import AppLayout from "@src/layout";
import { Wallpaper } from "@src/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joly Bell</title>
      </Head>
      <AppLayout>
        <Wallpaper />
      </AppLayout>
    </>
  );
}
