import React from "react";
import { StyledLink } from "../Link/StyledLink";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser"

import {
  StyledFooterLeftWrapper,
  StyledLogoWrapper,
  StyledSubLogoText,
  StyledContactWrapper,
  StyledIconsWrapper,
} from "./StyledFooterLeftWrapper";
import { StyledText } from "../Text/StyledText";

import FacebookIcon from "../../images/headerIcons/facebook.svg";
import InstagramIcon from "../../images/headerIcons/instagram.svg";

const FooterLeftWrapper = ({ footerData }) => {
  return (
    <StyledFooterLeftWrapper>
      <StyledLogoWrapper>
        <StyledLink to="/">
          <GatsbyImage
            image={getImage(footerData.logo.localFile)}
            alt={footerData.logo.altText}
          />
        </StyledLink>
      </StyledLogoWrapper>
      <StyledSubLogoText>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="21px"
        >
          {parse(footerData.tekstPodLogiem)}
        </StyledText>
      </StyledSubLogoText>
      <StyledContactWrapper>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="29px"
          hasdeclaredmargin="0 0 16px"
          hasdeclaredfontcolor="var(--secondary500)"
        >
          {footerData.kontaktTytul}
        </StyledText>
        <div>
          {footerData.adres.map(line => (
            <StyledText
              hasdeclaredfontsize="18px"
              hasdeclaredlineheight="21px"
              hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
            >
              {line.linijkaAdresu}
            </StyledText>
          ))}
        </div>
        <div>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="rgba(237, 172, 42, 1)"
          >
            {footerData.imie}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
          >
            {footerData.telefon}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
          >
            {footerData.email}
          </StyledText>
        </div>
        <StyledIconsWrapper>
          <a href={footerData.linkDoFacebooka}>
            <FacebookIcon />
          </a>
          <a href={footerData.linkDoInstagrama}>
            <InstagramIcon />
          </a>
        </StyledIconsWrapper>
      </StyledContactWrapper>
    </StyledFooterLeftWrapper>
  );
};

export default FooterLeftWrapper;
