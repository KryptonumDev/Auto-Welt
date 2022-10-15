import React from "react";
import { MenuProvider } from "../../context/menuContext";
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
