import React from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"

const GlobalLayout = ({ children }) => {
  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        {children}
      </MenuProvider>
    </>
  )
}

export default GlobalLayout