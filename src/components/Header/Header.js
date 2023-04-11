import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import { StyledLink } from "../Link/StyledLink";
import {
  StyledHeader,
  StyledNav,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledLogoWrapper,
  StyledIconsWrapper,
  StyledLogoMobileWrapper,
} from "./StyledHeader";
import Logo from "../../images/Logo.svg";
import { StaticImage } from "gatsby-plugin-image";
import { useCart } from "react-use-cart";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const { totalUniqueItems } = useCart()

  return (
    <StyledHeader>
      <StyledNav isopen={isOpen}>
        <StyledLeftWrapper>
          <StyledLink
            to="/kolekcje-modeli"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
            aria-label="przejdz do podstrony"
          >
            Kolekcje modeli
          </StyledLink>
          <StyledLink
            to="/sklep"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
            aria-label="przejdz do podstrony"
          >
            Sklep
          </StyledLink>
          <StyledLink
            to="/o-mnie"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
            aria-label="przejdz do podstrony"
          >
            O mnie
          </StyledLink>
          <StyledLink
            to="/oferta"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
            aria-label="przejdz do podstrony"
          >
            Oferta
          </StyledLink>
        </StyledLeftWrapper>
        <StyledLogoWrapper isopen={isOpen}>
          <StyledLink to="/" aria-label="przejdz do strony głównej">
            <Logo />
          </StyledLink>
        </StyledLogoWrapper>
        <StyledRightWrapper>
          <StyledLink
            to="/terminarz"
            hasdeclaredmargin="0 0 0 55px"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
            aria-label="przejdz do podstrony"
          >
            Terminarz
          </StyledLink>
          <StyledLink
            to="/artykuly"
            hasdeclaredmargin="0 0 0 35px"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            partiallyActive={true}
            onClick={() => setIsOpen(false)}
            aria-label="przejdz do podstrony"
          >
            Blog
          </StyledLink>
          <StyledLink
            to="/kontakt"
            hasdeclaredmargin="0 0 0 35px"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
            aria-label="przejdz do podstrony"
          >
            Kontakt
          </StyledLink>
          <StyledIconsWrapper>
            <Link onClick={() => setIsOpen(false)} className="cart" to='/koszyk/'>
              <StaticImage src="./../../../static/images/cart-button-white.png" alt='koszyk zakupowy' />
              <span>{totalUniqueItems}</span>
            </Link>
          </StyledIconsWrapper>
        </StyledRightWrapper>
      </StyledNav>
      <StyledLogoMobileWrapper isopen={isOpen}>
        <StyledLink to="/" aria-label="przejdz do strony głównej">
          <Logo />
        </StyledLink>
      </StyledLogoMobileWrapper>
      <HamburgerButton openMenu={handleOpenMenu} isOpen={isOpen} />
    </StyledHeader>
  );
};

export default Header;

//<StaticImage src="./../../../static/images/cart-button-green.png" alt='koszyk zakupowy' />