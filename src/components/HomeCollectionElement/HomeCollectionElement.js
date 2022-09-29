import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../Button/Button"

import { 
    StyledHomeCollectionElement, 
    StyledBackground, 
    StyledImage 
} from "./StyledHomeCollectionElement"

const HomeCollectionElement = ({ bgImage, image, buttonText, whereGo }) => {
    return (
        <StyledHomeCollectionElement>
            <StyledBackground>
                <StaticImage 
                    placeholder="blurred" 
                    // src={bgImage}
                    src="../../images/2.png"
                    alt="A dinosaur" 
                /> 
            </StyledBackground>
            <StyledImage>
                <StaticImage 
                    placeholder="blurred" 
                    //src={image}
                    src="../../images/example.png"
                    alt="A dinosaur" 
                />
            </StyledImage>
            <Button 
                text={buttonText} 
                whereGo="/kontakt" 
                textColor="var(--white)" 
                bgColor="var(--primary500)" 
                hasMaxWidth="255px"
                hasFontSize="clamp(12px, 16px, 24px)"
            />
        </StyledHomeCollectionElement>
    )
}

export default HomeCollectionElement