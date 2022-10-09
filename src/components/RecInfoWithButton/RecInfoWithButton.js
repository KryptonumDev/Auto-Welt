import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  StyledRecInfoWithButton,
  StyledFooterImageWrapper,
} from "./StyledRecInfoWithButton";
import { StyledText } from "../Text/StyledText";

const RecInfoWithButton = ({
  text,
  btnText,
  btnBgColor,
  btnColor,
  btnWhereGo,
  btnPadding,
  btnFontSize,
  hasTarget,
  isMoveLeft,
  bgImage
}) => {
  return (
    <StyledRecInfoWithButton ismoveleft={isMoveLeft}>
      <StyledFooterImageWrapper>
        <GatsbyImage
          image={getImage(bgImage.localFile)}
          alt={bgImage.altText}
        />
      </StyledFooterImageWrapper>
      <StyledText
        hasdeclaredfontsize="clamp(18px, 28px, 32px)"
        hasdeclaredfontcolor="var(--creamText)"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontweight="400"
        hasdeclaredpadding="0 18px 0 57px"
      >
        {text}
      </StyledText>
      <Button
        text={btnText}
        whereGo={btnWhereGo ? btnWhereGo : "/"}
        bgColor={btnBgColor}
        hasBorder="2px solid var(--secondary500)"
        hasHeight="44px"
        textColor={btnColor}
        hasDeclaredPadding={btnPadding}
        hasFontSize={btnFontSize}
        hasTarget={hasTarget}
      />
    </StyledRecInfoWithButton>
  );
};

export default RecInfoWithButton;
