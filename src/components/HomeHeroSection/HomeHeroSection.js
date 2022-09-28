import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import getWindowSize from "../../utils/getWindowSize"
import Button from "../Button/Button";

import { 
    StyledHomeHeroSection, 
    StyledImagesLeftWrapper, 
    StyledHeroImageWrapper, 
    StyledImagesRightWrapper, 
    StyledHeroImage, 
    StyledButtonsWrapper,
    StyledImageWrapper
} from "./StyledHomeHeroSection"

const HomeHeroSection = () => {
    const width = getWindowSize();
    const [leftImages, setLeftImages] = useState([]);
    const [rightImages, setRightImages] = useState([]);
    
    return (
        <StyledHomeHeroSection>
            <StyledImagesLeftWrapper>
                <StyledImageWrapper>
                    <StaticImage 
                        placeholder="blurred" 
                        src="../../images/exampleImage.png" 
                        alt="A dinosaur" 
                    />
                </StyledImageWrapper>
                <StyledImageWrapper>
                    <StaticImage 
                        placeholder="blurred" 
                        src="../../images/exampleImage.png" 
                        alt="A dinosaur" 
                    />
                </StyledImageWrapper>
                <StyledImageWrapper>
                    <StaticImage 
                        placeholder="blurred" 
                        src="../../images/exampleImage.png" 
                        alt="A dinosaur"
                    />
                </StyledImageWrapper>
            </StyledImagesLeftWrapper>
            <StyledHeroImageWrapper>
                <StyledHeroImage>
                    <StaticImage 
                        placeholder="blurred" 
                        src="../../images/heroSectionCar.png" 
                        alt="Open car" 
                    />
                </StyledHeroImage>
                {width > 768 ? (
                    <StyledButtonsWrapper>
                        <Button whereGo="/kolekcje-modeli" text="KOLEKCJE" hasBorder="2px solid var(--primary500)" hasWidth="175px" />
                        <Button whereGo="/kontakt" text="KONTAKT" textColor="var(--white)" bgColor="var(--primary500)" hasWidth="175px" />
                    </StyledButtonsWrapper>
                ) : null}
            </StyledHeroImageWrapper>
            <StyledImagesRightWrapper>
                <StyledImageWrapper>
                    <StaticImage 
                        placeholder="blurred" 
                        src="../../images/exampleImage.png" 
                        alt="A dinosaur" 
                    />
                </StyledImageWrapper>
                <StyledImageWrapper>
                    <StaticImage 
                        placeholder="blurred" 
                        src="../../images/exampleImage.png" 
                        alt="A dinosaur" 
                    />
                </StyledImageWrapper>
                <StyledImageWrapper>
                    <StaticImage 
                        placeholder="blurred" 
                        src="../../images/exampleImage.png" 
                        alt="A dinosaur" 
                    />
                </StyledImageWrapper>
            </StyledImagesRightWrapper>
            {width < 769 ? (
                <StyledButtonsWrapper>
                    <Button whereGo="/kolekcje-modeli" text="KOLEKCJE" hasBorder="2px solid var(--primary500)" hasWidth="175px" />
                    <Button whereGo="/kontakt" text="KONTAKT" textColor="var(--white)" bgColor="var(--primary500)" hasWidth="175px" />
                </StyledButtonsWrapper>
            ) : null}
        </StyledHomeHeroSection>
    )
}

export default HomeHeroSection