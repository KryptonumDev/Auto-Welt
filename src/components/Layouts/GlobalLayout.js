import React from "react";
import { MenuProvider } from "../../context/menuContext";
import { Helmet } from 'react-helmet'
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header/Header";
import { CartProvider } from "react-use-cart";
import Footer from "../Footer/Footer";

import {
  StyledOverflowWrapper,
} from "./StyledGlobalLayout";

const GlobalLayout = ({ children }) => {
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
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </StyledOverflowWrapper>
      </MenuProvider>
    </>
  );
};

export default GlobalLayout;
