import React from "react"

import HamburgerButton from "../HamburgerButton/HamburgerButton"

import { StyledLink } from "../Link/StyledLink"
import { 
    StyledHeader, 
    StyledNav,
    StyledLeftWrapper,
    StyledRightWrapper,
    StyledLogoWrapper,
    StyledIconsWrapper,
    StyledLogoMobileWrapper
} from "./StyledHeader"

import Logo from "../../images/Logo.svg"

import InstagramIcon from "../../images/headerIcons/instagram.svg"
import FacebookIcon from "../../images/headerIcons/facebook.svg"

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
                        to='/oferta'
                        hasdeclaredmargin="0 10px 0 0"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Oferta
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
                        Blog
                    </StyledLink>
                    <StyledLink 
                        to='/wystawy'
                        hasdeclaredmargin="0 0 0 35px"
                        hasdeclaredfontcolor="var(--background500)"
                    >
                        Kontakt
                    </StyledLink>
                    <StyledIconsWrapper>
                        <a href="#">
                            <FacebookIcon />
                        </a>
                        <a href="#">
                            <InstagramIcon />
                        </a>
                    </StyledIconsWrapper>
                </StyledRightWrapper>
            </StyledNav>
            <StyledLogoMobileWrapper>
                <StyledLink to='/'>
                    <Logo />
                </StyledLink>
            </StyledLogoMobileWrapper>
            <HamburgerButton />
        </StyledHeader>
    )
}

export default Header