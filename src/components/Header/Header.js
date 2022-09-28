import React from "react"

import { StyledLink } from "../Link/StyledLink"
import { 
    StyledHeader, 
    StyledNav,
    StyledLeftWrapper,
    StyledRightWrapper,
    StyledLogoWrapper
} from "./StyledHeader"

import Logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <StyledHeader>
            <StyledNav>
                <StyledLeftWrapper>
                    <StyledLink 
                        to='/kolekcje-modeli'
                        hasdeclaredmargin="0 27px 0 0"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Kolekcje modeli
                    </StyledLink>
                    <StyledLink 
                        to='/sklep'
                        hasdeclaredmargin="0 27px 0 0"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Sklep
                    </StyledLink>
                    <StyledLink 
                        to='/o-mnie'
                        hasdeclaredmargin="0 27px 0 0"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        O mnie
                    </StyledLink>
                    <StyledLink 
                        to='/ciekawostki'
                        hasdeclaredmargin="0 10px 0 0"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Ciekawostki
                    </StyledLink>
                </StyledLeftWrapper>
                <StyledLogoWrapper>
                    <StyledLink to='/'>
                        <Logo />
                    </StyledLink>
                </StyledLogoWrapper>
                <StyledRightWrapper>
                    <StyledLink 
                        to='/terminarz'
                        hasdeclaredmargin="0 0 0 34px"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Terminarz
                    </StyledLink>
                    <StyledLink 
                        to='/artykuly'
                        hasdeclaredmargin="0 0 0 35px"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Artykuły
                    </StyledLink>
                    <StyledLink 
                        to='/wystawy'
                        hasdeclaredmargin="0 0 0 35px"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Wystawy
                    </StyledLink>
                    <StyledLink 
                        to='/kontakt'
                        hasdeclaredmargin="0 0 0 35px"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Kontakt
                    </StyledLink>
                </StyledRightWrapper>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header