import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { GlobalStyles } from "@src/theme/global-styles";
import theme from "../theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
