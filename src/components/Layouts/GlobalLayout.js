import React from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
import Header from "../Header/Header"

import { StyledMainChildren, StyledOverflowWrapper } from './StyledGlobalLayout'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        <StyledOverflowWrapper>
          <StyledMainChildren>
            <Header />
            {children}
          </StyledMainChildren>
        </StyledOverflowWrapper>
      </MenuProvider>
    </>
  )
}

export default GlobalLayout