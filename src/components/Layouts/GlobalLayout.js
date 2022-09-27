import React from "react"
import { MenuProvider } from "../../context/menuContext"
import GlobalStyle from "../../styles/GlobalStyle"
// import SEO from "../SEO/SEO"

const GlobalLayout = ({ children }) => {
  return (
    <>
      <MenuProvider>
        <GlobalStyle />
        {/* <SEO /> */}
        {children}
      </MenuProvider>
    </>
  )
}

export default GlobalLayout