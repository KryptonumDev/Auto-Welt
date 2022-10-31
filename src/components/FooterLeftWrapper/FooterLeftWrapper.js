import React from "react";
import { StyledLink } from "../Link/StyledLink";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledFooterLeftWrapper,
  StyledLogoWrapper,
  StyledSubLogoText,
  StyledContactWrapper,
  StyledIconsWrapper,
  StyledAddressWrapper,
  StyledTextKryptonum,
} from "./StyledFooterLeftWrapper";
import { StyledText } from "../Text/StyledText";

import FacebookIcon from "../../images/headerIcons/facebook.svg";
import InstagramIcon from "../../images/headerIcons/instagram.svg";

const FooterLeftWrapper = ({ footerData }) => {
  return (
    <StyledFooterLeftWrapper>
      <div>
        <StyledLogoWrapper>
          <StyledLink to="/">
            {footerData.logo.localFile && (
              <GatsbyImage
                image={getImage(footerData.logo.localFile)}
                alt={footerData.logo.altText}
              />
            )}
          </StyledLink>
        </StyledLogoWrapper>
        <StyledSubLogoText>
          {footerData.tekstPodLogiem && parse(footerData.tekstPodLogiem)}
        </StyledSubLogoText>
      </div>
      <StyledContactWrapper>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="500"
          hasdeclaredlineheight="1.2em"
          hasdeclaredmargin="0 0 16px"
          hasdeclaredfontcolor="var(--secondary500)"
        >
          {footerData.kontaktTytul && footerData.kontaktTytul}
        </StyledText>
        <StyledAddressWrapper>
          {footerData.adres.map((line, index) => (
            <div key={index}>
              <StyledText
                hasdeclaredfontsize="18px"
                hasdeclaredlineheight="1.2em"
                hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
                as="p"
              >
                {line.linijkaAdresu && line.linijkaAdresu}
              </StyledText>
            </div>
          ))}
        </StyledAddressWrapper>
        <div>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(237, 172, 42, 1)"
            hasdeclaredfontweight="500"
            hasdeclaredpadding="16px 0 0"
          >
            {footerData.imie && footerData.imie}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
            hasdeclaredfontweight="500"
          >
            {footerData.telefon && footerData.telefon}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
            hasdeclaredfontweight="500"
          >
            {footerData.email && footerData.email}
          </StyledText>
        </div>
        <StyledIconsWrapper>
          {footerData.linkDoFacebooka && (
            <a href={footerData.linkDoFacebooka}>
              <FacebookIcon />
            </a>
          )}
          {footerData.linkDoInstagrama && (
            <a href={footerData.linkDoInstagrama}>
              <InstagramIcon />
            </a>
          )}
        </StyledIconsWrapper>
        <StyledTextKryptonum>
          {footerData.stworzonePrzezKryptonumTekst &&
            parse(footerData.stworzonePrzezKryptonumTekst)}
        </StyledTextKryptonum>
      </StyledContactWrapper>
    </StyledFooterLeftWrapper>
  );
};

export default FooterLeftWrapper;
