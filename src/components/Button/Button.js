import React from "react"

import { StyledButtonLink, StyledButtonLinkNoHref } from "./StyledButtonLink";

const Button = ({ 
    text, 
    whereGo, 
    hasBorder, 
    bgColor, 
    textColor, 
    hasMaxWidth, 
    hasFontSize, 
    hasDeclaredPadding,
    hasFontWeight,
    hasTarget
}) => {
    return (
        <>
            {whereGo ? (
                <StyledButtonLink
                    to={whereGo}
                    hasborder={hasBorder}
                    bgcolor={bgColor}
                    hasdeclaredfontcolor={textColor}
                    hasdeclaredfontsize={hasFontSize}
                    hasdeclaredfontweight={hasFontWeight ? hasFontWeight : "500"}
                    hasdeclaredmaxwidth={hasMaxWidth}
                    hasdeclaredpadding={hasDeclaredPadding}
                    target={hasTarget}
                >
                    <span>{text}</span>
                </StyledButtonLink>
            ) : (
                <StyledButtonLinkNoHref
                    hasborder={hasBorder}
                    bgcolor={bgColor}
                    hasdeclaredfontcolor={textColor}
                    hasdeclaredfontsize={hasFontSize}
                    hasfontweight={hasFontWeight ? hasFontWeight : "500"}
                    hasdeclaredmaxwidth={hasMaxWidth}
                    hasdeclaredpadding={hasDeclaredPadding}
                >
                    <span>{text}</span>
                </StyledButtonLinkNoHref>
            )}
        </>
    )
}

export default Button