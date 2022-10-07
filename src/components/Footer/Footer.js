import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import FooterLeftWrapper from "../FooterLeftWrapper/FooterLeftWrapper";
import FooterCenterWrapper from "../FooterCenterWrapper/FooterCenterWrapper";
import FooterRightWrapper from "../FooterRightWrapper/FooterRightWrapper";

import {
  StyledFooter,
  StyledImageWrapper,
  StyledFooterMainWrapper,
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledImageWrapper>
        <StaticImage
          placeholder="blurred"
          src="../../images/footerBg.jpg"
          alt="background"
          objectFit="cover"
        />
      </StyledImageWrapper>
      <StyledFooterMainWrapper>
        <FooterLeftWrapper />
        <FooterCenterWrapper />
        <FooterRightWrapper />
      </StyledFooterMainWrapper>
    </StyledFooter>
  );
};

export default Footer;
