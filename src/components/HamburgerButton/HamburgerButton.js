import React from "react"
import { 
    StyledHamburgerButton,
    StyledHamburgerBox,
    StyledHamburgerInner
 } from "./StyledHamburgerButton"

const HamburgerButton = ({ menuOpen }) => {
    return (
        <StyledHamburgerButton>
             <StyledHamburgerBox>
                <StyledHamburgerInner
                    hamburger={menuOpen}
                />
            </StyledHamburgerBox>
        </StyledHamburgerButton>
    )
}

export default HamburgerButton