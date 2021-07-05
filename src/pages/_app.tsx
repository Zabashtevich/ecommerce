import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { GlobalStyles } from "@src/theme/global-styles";
import theme from "../theme/index";

import RegModalContextProvider from "@src/contexts/signup-modal/context";
import { SignupModal } from "../features";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RegModalContextProvider>
        <Component {...pageProps} />
        <SignupModal />
      </RegModalContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
