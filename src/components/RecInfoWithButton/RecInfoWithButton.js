import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Button from "../Button/Button"

import { StyledRecInfoWithButton, StyledFooterImageWrapper } from "./StyledRecInfoWithButton"
import { StyledText } from "../Text/StyledText"

const RecInfoWithButton = ({ 
    text, 
    btnText,
    btnBgColor, 
    btnColor,
    btnWhereGo,
    btnPadding,
    btnFontSize
}) => {
  return (
    <StyledRecInfoWithButton>
        <StyledFooterImageWrapper>
            <StaticImage
                placeholder="blurred"
                src="../../images/collectionRectangle.png"
                alt="background"
                objectFit="fill"
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
            whereGo={btnWhereGo}
            bgColor={btnBgColor}
            hasBorder="2px solid var(--secondary500)"
            hasHeight="44px"
            textColor={btnColor}
            hasDeclaredPadding={btnPadding}
            hasFontSize={btnFontSize}
        />
    </StyledRecInfoWithButton>
  )
}

export default RecInfoWithButton