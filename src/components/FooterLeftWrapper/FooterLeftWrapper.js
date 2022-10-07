import React from "react";
import { StyledLink } from "../Link/StyledLink";
import {
  StyledFooterLeftWrapper,
  StyledLogoWrapper,
  StyledSubLogoText,
  StyledContactWrapper,
  StyledIconsWrapper,
} from "./StyledFooterLeftWrapper";
import { StyledText } from "../Text/StyledText";

import Logo from "../../images/logoFooter.svg";
import FacebookIcon from "../../images/facebookIcon.svg";
import InstagramIcon from "../../images/instagramIcon.svg";

const FooterLeftWrapper = () => {
  return (
    <StyledFooterLeftWrapper>
      <StyledLogoWrapper>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </StyledLogoWrapper>
      <StyledSubLogoText>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="21px"
        >
          Wehikuł czasu, który przeniesie Państwa do{" "}
          <span style={{ color: "rgba(237, 172, 42, 1)" }}>
            historii motoryzacji XX wieku
          </span>
          , zapewniając tym samym wyjątkową podróż pełną wspomnień.
        </StyledText>
      </StyledSubLogoText>
      <StyledContactWrapper>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="29px"
          hasdeclaredfontcolor="var(--secondary500)"
        >
          Kontakt
        </StyledText>
        <div>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
            hasdeclaredmargin="16px 0 0 0"
          >
            Auto-Welt Sp. z o. o. <br /> Plac 11 Listopada 27 lok. 4 piętro II
            98-100 Łask
          </StyledText>
        </div>
        <div>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="rgba(237, 172, 42, 1)"
          >
            Bartosz Janicki
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
          >
            Tel.:+48 504 704 112
          </StyledText>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="rgba(250, 246, 238, 1)"
          >
            E-mail: kontakt@auto-welt.info
          </StyledText>
        </div>
        <StyledIconsWrapper>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </StyledIconsWrapper>
      </StyledContactWrapper>
    </StyledFooterLeftWrapper>
  );
};

export default FooterLeftWrapper;
