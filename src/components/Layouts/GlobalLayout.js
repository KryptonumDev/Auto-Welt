import React from "react";
import { MenuProvider } from "../../context/menuContext";
import { Helmet } from 'react-helmet'
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
  StyledMainChildren,
  StyledOverflowWrapper,
} from "./StyledGlobalLayout";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <MenuProvider>
        <Helmet htmlAttributes={{
          lang: 'pl',
        }}>
          <link rel="preload"
                as="style"
                href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" />
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
