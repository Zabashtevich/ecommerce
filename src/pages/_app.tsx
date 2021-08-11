import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "normalize.css";

import { GlobalStyles } from "@src/theme/global-styles";
import theme from "../theme/index";

import { SignupModal, LoginModal, SidebarModal, InformationModal } from "../features";
import SignupContextProvider from "@src/contexts/signup-modal/context";
import LoginContextProvider from "../contexts/login-context/context";
import AppLayout from "../layout/index";
import { store } from "@src/redux";
import CareContextProvider from "@src/contexts/care-context/context";
import SizeContextProvider from "@src/contexts/size-context/context";
import DetailsContextProvider from "@src/contexts/details-context/context";
import { RouterLoader } from "@src/components";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SignupContextProvider>
        <LoginContextProvider>
          <CareContextProvider>
            <SizeContextProvider>
              <DetailsContextProvider>
                <Provider store={store}>
                  <Auth0Provider
                    domain="dev-9vr-o9n3.us.auth0.com"
                    clientId="Kr0F3llXiZGLpjG8LFxYuzhap1cZ6Tnw"
                    redirectUri="http://localhost:3000"
                  >
                    <AppLayout>
                      <Component {...pageProps} />
                      <SidebarModal />
                      <LoginModal />
                      <SignupModal />
                      <InformationModal />
                      <RouterLoader />
                    </AppLayout>
                  </Auth0Provider>
                </Provider>
              </DetailsContextProvider>
            </SizeContextProvider>
          </CareContextProvider>
        </LoginContextProvider>
      </SignupContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
