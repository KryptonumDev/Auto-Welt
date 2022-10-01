import React from "react"

import { StyledButtonLink, StyledButtonLinkNoHref } from "./StyledButtonLink";

const Button = ({ text, whereGo, hasBorder, bgColor, textColor, hasMaxWidth, hasFontSize }) => {
    return (
        <>
            {whereGo ? (
                <StyledButtonLink
                    to={whereGo}
                    hasborder={hasBorder}
                    bgcolor={bgColor}
                    hasdeclaredfontcolor={textColor}
                    hasdeclaredfontsize={hasFontSize}
                    hasdeclaredfontweight="500"
                    hasdeclaredmaxwidth={hasMaxWidth}
                >
                    <span>{text}</span>
                </StyledButtonLink>
            ) : (
                <StyledButtonLinkNoHref
                    hasborder={hasBorder}
                    bgcolor={bgColor}
                    hasdeclaredfontcolor={textColor}
                    hasdeclaredfontsize={hasFontSize}
                    hasdeclaredfontweight="500"
                    hasdeclaredmaxwidth={hasMaxWidth}
                >
                    <span>{text}</span>
                </StyledButtonLinkNoHref>
            )}
        </>
    )
}

export default Button