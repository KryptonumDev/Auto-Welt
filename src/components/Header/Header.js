import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

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

import InstagramIcon from "../../images/headerIcons/instagram.svg";
import FacebookIcon from "../../images/headerIcons/facebook.svg";

const Header = () => {
  const data = useStaticQuery(graphql`
    query headerQuery {
      wpPage(id: { eq: "cG9zdDozMw==" }) {
        globalConfig {
          naglowek {
            linkDoFacebooka
            linkDoInstagrama
          }
        }
      }
    }
  `);
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

  return (
    <StyledHeader>
      <StyledNav isopen={isOpen}>
        <StyledLeftWrapper>
          <StyledLink
            to="/kolekcje-modeli"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
          >
            Kolekcje modeli
          </StyledLink>
          <StyledLink
            to="/sklep"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
          >
            Sklep
          </StyledLink>
          <StyledLink
            to="/o-mnie"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
          >
            O mnie
          </StyledLink>
          <StyledLink
            to="/oferta"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
          >
            Oferta
          </StyledLink>
        </StyledLeftWrapper>
        <StyledLogoWrapper isopen={isOpen}>
          <StyledLink to="/">
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
          >
            Blog
          </StyledLink>
          <StyledLink
            to="/kontakt"
            hasdeclaredmargin="0 0 0 35px"
            hasdeclaredfontcolor="var(--background500)"
            activeClassName="activeLink"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </StyledLink>
          <StyledIconsWrapper>
            {data.wpPage.globalConfig.naglowek.linkDoFacebooka && (
              <a
                href={data.wpPage.globalConfig.naglowek.linkDoFacebooka}
                target="_blank"
              >
                <FacebookIcon />
              </a>
            )}
            {data.wpPage.globalConfig.naglowek.linkDoInstagrama && (
              <a
                href={data.wpPage.globalConfig.naglowek.linkDoInstagrama}
                target="_blank"
              >
                <InstagramIcon />
              </a>
            )}
          </StyledIconsWrapper>
        </StyledRightWrapper>
      </StyledNav>
      <StyledLogoMobileWrapper isopen={isOpen}>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </StyledLogoMobileWrapper>
      <HamburgerButton openMenu={handleOpenMenu} isOpen={isOpen} />
    </StyledHeader>
  );
};

export default Header;
