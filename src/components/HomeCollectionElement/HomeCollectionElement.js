import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Button from "../Button/Button"

import { 
    StyledHomeCollectionElement, 
    StyledBackground, 
    StyledImage 
} from "./StyledHomeCollectionElement"

const HomeCollectionElement = ({ bgImage, image, buttonText, whereGo }) => {
    console.log(bgImage, image, buttonText)
    return (
        <StyledHomeCollectionElement>
            <StyledBackground>
                <GatsbyImage image={getImage(bgImage.localFile)} alt={bgImage.altText} objectFit="fill"/>
            </StyledBackground>
            <StyledImage>
                <GatsbyImage image={getImage(image.localFile)} alt={image.altText} objectFit="fill"/>
            </StyledImage>
            <Button 
                text={buttonText} 
                whereGo={`/kolekcje/${whereGo}`} 
                textColor="var(--white)" 
                bgColor="var(--primary500)" 
                hasMaxWidth="258px"
                hasFontSize="clamp(12px, 16px, 24px)"
                hasDeclaredPadding="9px 23px"
            />
        </StyledHomeCollectionElement>
    )
}

export default HomeCollectionElement