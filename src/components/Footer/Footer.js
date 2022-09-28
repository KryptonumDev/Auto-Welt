import React from "react"

import FooterLeftWrapper from "../FooterLeftWrapper/FooterLeftWrapper"
import FooterCenterWrapper from "../FooterCenterWrapper/FooterCenterWrapper"
import FooterRightWrapper from "../FooterRightWrapper/FooterRightWrapper"

import { StyledFooter } from "./StyledFooter"

const Footer = () => {
    return (
        <StyledFooter>
            <FooterLeftWrapper />
            <FooterCenterWrapper />
            <FooterRightWrapper />
        </StyledFooter>
    )
}

export default Footer;