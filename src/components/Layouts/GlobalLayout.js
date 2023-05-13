import React, { useEffect, useState } from "react";
import { MenuProvider } from "../../context/menuContext";
import { Helmet } from 'react-helmet'
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header/Header";
import { CartProvider } from "react-use-cart";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  StyledOverflowWrapper,
} from "./StyledGlobalLayout";
// import Cookies from "../Cookies/Cookies";

const GlobalLayout = ({ location, children }) => {
  useEffect(() => {
    const orphans = ['a', 'i', 'o', 'u', 'w', 'z', 'np.'];
    const orphansRegex = new RegExp(` (${orphans.join('|')}) `, 'gi');
    const paragraphs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, button'));

    paragraphs.forEach(paragraph =>
      paragraph.childNodes.forEach(node =>
        node?.nodeType === Node.TEXT_NODE && (node.textContent = node.textContent.replace(orphansRegex, ` $1\u00A0`))
      )
    );
  }, [location])

  const [isCookiesOpened, setCookiesOpened] = useState(false)
  return (
    <>
      <MenuProvider>
        <Helmet htmlAttributes={{ lang: 'pl', }}>
          <meta name="google-site-verification" content="dvUsxpDj30nHWd9APHRk6I-n7020q-Rsz36_akV98rw" />
          <meta name="robots" data-react-helmet="true" />
        </Helmet>
        <GlobalStyle />
        <ToastContainer limit={3} position="bottom-right" />
        <StyledOverflowWrapper>
          {/* <Cookies isActive={isCookiesOpened} setIsActive={setCookiesOpened} /> */}
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
