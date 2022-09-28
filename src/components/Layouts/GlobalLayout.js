import React from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../Header/Header"

import { StyledMainChildren } from './StyledGlobalLayout'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        <StyledMainChildren>
          <Header />
          {children}
        </StyledMainChildren>
      </MenuProvider>
    </>
  )
}

export default GlobalLayout