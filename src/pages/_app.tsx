import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { GlobalStyles } from "@src/theme/global-styles";
import theme from "../theme/index";

import RegModalContextProvider from "@src/contexts/reg-modal/context";
import { RegistrationModal } from "../features";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RegModalContextProvider>
        <Component {...pageProps} />
        <RegistrationModal />
      </RegModalContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
