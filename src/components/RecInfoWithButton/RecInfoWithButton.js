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
  bgImage,
  btnHoverBg
}) => {
  return (
    <StyledRecInfoWithButton ismoveleft={isMoveLeft}>
      <StyledFooterImageWrapper>
        <GatsbyImage
          image={bgImage}
          alt={bgImage.altText}
          objectFit="fill"
        />
      </StyledFooterImageWrapper>
      <StyledText
        hasdeclaredfontsize="28px"
        hasdeclaredfontcolor="var(--creamText)"
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontweight="400"
        hasdeclaredpadding="0 18px 0 57px"
        as="p"
      >
        {text}
      </StyledText>
      <Button
        text={btnText}
        whereGo={btnWhereGo ? btnWhereGo : "/"}
        bgColor={btnBgColor}
        hasBorder="0px solid transparent"
        hasHeight="44px"
        textColor={btnColor}
        hasDeclaredPadding={btnPadding}
        hasFontSize={btnFontSize}
        hasTarget={hasTarget}
        hoverBgColor={btnHoverBg}
      />
    </StyledRecInfoWithButton>
  );
};

export default RecInfoWithButton;
