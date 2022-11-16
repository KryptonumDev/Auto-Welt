import React from "react";
import { MenuProvider } from "../../context/menuContext";
import { Helmet } from 'react-helmet'
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header/Header";
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
          <meta name="robots" content="noindex" data-react-helmet="true" />
        </Helmet>
        <GlobalStyle />
        <StyledOverflowWrapper>
          <Header />
          {children}
          <Footer />
        </StyledOverflowWrapper>
      </MenuProvider>
    </>
  );
};

export default GlobalLayout;
