import Head from "next/head";

import { Wallpaper, Slogan } from "@src/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Joly Bell</title>
      </Head>
      <Wallpaper />
      <Slogan />
    </>
  );
}
