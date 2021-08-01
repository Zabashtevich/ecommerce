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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SignupContextProvider>
        <LoginContextProvider>
          <CareContextProvider>
            <SizeContextProvider>
              <DetailsContextProvider>
                <Provider store={store}>
                  <AppLayout>
                    <Component {...pageProps} />
                    <SidebarModal />
                    <LoginModal />
                    <SignupModal />
                    <InformationModal />
                    <RouterLoader />
                  </AppLayout>
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
