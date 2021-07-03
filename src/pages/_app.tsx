import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import theme from "../theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
