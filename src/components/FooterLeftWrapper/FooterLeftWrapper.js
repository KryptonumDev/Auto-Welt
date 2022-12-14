import React from "react";
import { StyledLink } from "../Link/StyledLink";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledFooterLeftWrapper,
  StyledLogoWrapper,
  StyledSubLogoText,
  StyledContactWrapper,
  StyledIconsWrapper,
  StyledAddressWrapper,
  StyledTextKryptonum,
  StyledTelWrapp
} from "./StyledFooterLeftWrapper";
import { StyledText } from "../Text/StyledText";

import FacebookIcon from "../../images/headerIcons/facebook.svg";
import InstagramIcon from "../../images/headerIcons/instagram.svg";

const FooterLeftWrapper = ({ footerData }) => {
  const images = withArtDirection(
    getImage(footerData.logo.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(footerData.logoMobile.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(footerData.logoTablet.localFile),
      },
    ]
  );
  return (
    <StyledFooterLeftWrapper>
      <div>
        <StyledLogoWrapper>
          <StyledLink to="/" aria-label="przejdz do strony głównej">
            {footerData.logo.localFile ? (
              <GatsbyImage
                image={images}
                alt={footerData.logo?.altText || " "}
                objectFit="fill"
                title={footerData.logo?.title}
              />
            ) : null}
          </StyledLink>
        </StyledLogoWrapper>
        <StyledSubLogoText>
          {footerData.tekstPodLogiem ? parse(footerData.tekstPodLogiem) : null}
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
          {footerData.kontaktTytul ? footerData.kontaktTytul : null}
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
                {line.linijkaAdresu ? line.linijkaAdresu : null}
              </StyledText>
            </div>
          ))}
        </StyledAddressWrapper>
        <StyledTelWrapp>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(237, 172, 42, 1)"
            hasdeclaredfontweight="500"
            hasdeclaredpadding="16px 0 0"
          >
            {footerData.imie ? footerData.imie : null}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
            hasdeclaredfontweight="500"
          >
            Tel.: {" "}
            <a href={`tel:${footerData.telefon ? footerData.telefon : null}`} aria-label="zadzwoń">
             {footerData.telefon ? footerData.telefon : null}
            </a>
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
            hasdeclaredfontweight="500"
          >
            E-mail: {" "}
            <a href={`mailto:${footerData.email ? footerData.email : null}`} aria-label="wyslij email">
              {footerData.email ? footerData.email : null}
            </a>
          </StyledText>
        </StyledTelWrapp>
        <StyledIconsWrapper>
          {footerData.linkDoFacebooka ? (
            <a href={footerData.linkDoFacebooka} target="_blank" rel="noreferrer noopener" aria-label="Facebooka">
              <FacebookIcon />
            </a>
          ) : null}
          {footerData.linkDoInstagrama ? (
            <a href={footerData.linkDoInstagrama} target="_blank" rel="noreferrer noopener" aria-label="Instagram">
              <InstagramIcon />
            </a>
          ) : null}
        </StyledIconsWrapper>
        <StyledTextKryptonum>
          {footerData.stworzonePrzezKryptonumTekst ?
            parse(footerData.stworzonePrzezKryptonumTekst) : null}
        </StyledTextKryptonum>
      </StyledContactWrapper>
    </StyledFooterLeftWrapper>
  );
};

export default FooterLeftWrapper;
