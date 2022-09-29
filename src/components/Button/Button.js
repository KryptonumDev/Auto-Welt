import React from "react"

import { StyledButtonLink } from "./StyledButtonLink"

const Button = ({ text, whereGo, hasBorder, bgColor, textColor, hasMaxWidth, hasFontSize }) => {
    return (
        <StyledButtonLink 
            to={whereGo} 
            hasborder={hasBorder} 
            bgcolor={bgColor} 
            hasdeclaredfontcolor={textColor}
            hasdeclaredfontsize={hasFontSize}
            hasdeclaredfontweight="500"
            hasdeclaredmaxwidth={hasMaxWidth}
        >
            <span>
                {text}
            </span>
        </StyledButtonLink>
    )
}

export default Button