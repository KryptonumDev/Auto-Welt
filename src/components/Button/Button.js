import React from "react"

import { StyledButtonLink } from "./StyledButtonLink"

const Button = ({ text, whereGo, hasBorder, bgColor, textColor, hasWidth }) => {
    return (
        <StyledButtonLink 
            to={whereGo} 
            hasborder={hasBorder} 
            bgcolor={bgColor} 
            textcolor={textColor}
            haswidth={hasWidth}
            hasdeclaredfontsize="21px"
            hasdeclaredfontweight="500"
        >
            <span>
                {text}
            </span>
        </StyledButtonLink>
    )
}

export default Button