import Head from "next/head";

import { Wallpaper, Slogan } from "@src/components";
import AppLayout from "@src/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joly Bell</title>
      </Head>
      <AppLayout>
        <Wallpaper />
        <Slogan />
      </AppLayout>
    </>
  );
}
