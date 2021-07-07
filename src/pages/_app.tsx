import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { GlobalStyles } from "@src/theme/global-styles";
import theme from "../theme/index";

import SignupContextProvider from "@src/contexts/signup-modal/context";
import { SignupModal, LoginModal, CardModal } from "../features";
import LoginContextProvider from "../contexts/login-context/context";
import CardContextProvider from "@src/contexts/card-context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SignupContextProvider>
        <LoginContextProvider>
          <CardContextProvider>
            <Component {...pageProps} />
            <CardModal />
            <LoginModal />
            <SignupModal />
          </CardContextProvider>
        </LoginContextProvider>
      </SignupContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
