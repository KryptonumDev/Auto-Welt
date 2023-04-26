import React, { useState } from "react";
import { MenuProvider } from "../../context/menuContext";
import { Helmet } from 'react-helmet'
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
  StyledOverflowWrapper,
} from "./StyledGlobalLayout";
// import Cookies from "../Cookies/Cookies";

const GlobalLayout = ({ children }) => {
  // const [isCookiesOpened, setCookiesOpened] = useState(false)
  return (
    <>
      <MenuProvider>
        <Helmet htmlAttributes={{
          lang: 'pl',
        }}>
          <meta name="google-site-verification" content="dvUsxpDj30nHWd9APHRk6I-n7020q-Rsz36_akV98rw" />
          <meta name="robots" data-react-helmet="true" />
        </Helmet>
        <GlobalStyle />
        <StyledOverflowWrapper>
          {/* <Cookies isActive={isCookiesOpened} setIsActive={setCookiesOpened} /> */}
          <Header />
          {children}
          <Footer />
        </StyledOverflowWrapper>
      </MenuProvider>
    </>
  );
};

export default GlobalLayout;
