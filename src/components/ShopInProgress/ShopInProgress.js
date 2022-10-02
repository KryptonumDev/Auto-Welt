import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button";

import { 
    StyledShopInProgress, 
    StyledImagesWrapper, 
    StyledIconWrapper, 
    StyledHeroImage, 
    StyledCarImage,
    StyledShopInfoWrapper
} from "./StyledShopInProgress"
import { StyledText } from "../Text/StyledText"
import {
    StyledButtonsWrapper
} from "../HomeRecommendations/StyledHomeRecommendations";

const ShopInProgress = () => {
  return (
    <StyledShopInProgress>
        <StyledImagesWrapper>
            <StyledIconWrapper>
                <StaticImage
                    placeholder="blurred"
                    src="../../images/plaster.png"
                    alt="A dinosaur"
                />
            </StyledIconWrapper>
            <StyledHeroImage>
                <StaticImage
                    placeholder="blurred"
                    src="../../images/shopHeroImage.png"
                    alt="A dinosaur"
                />
            </StyledHeroImage>
            <StyledCarImage>
                <StaticImage
                    placeholder="blurred"
                    src="../../images/shopCar.png"
                    alt="A dinosaur"
                />
            </StyledCarImage>
        </StyledImagesWrapper>
        <StyledShopInfoWrapper>
            <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredtextalign="center"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="80px 0 8px"
                hasdeclaredfontfamily="Nocturne Serif"
            >
                Skelp w trakcie budowy
            </StyledText>
            <StyledText
                hasdeclaredfontsize="24px"
                hasdeclaredlineheight="28px"
                hasdeclaredtextalign="center"
            >
                to co najmniej tak trudne i czasochłonne jak składanie…
            </StyledText>
            <StyledText
                hasdeclaredfontsize="24px"
                hasdeclaredlineheight="28px"
                hasdeclaredtextalign="center"
                hasdeclaredmargin="20px 0 80px"
            >
                Jesteśmy pewni, że warto, gdyż dobry plan, 
                oryginalny projekt i solidne wykonanie zapewni 
                efekt WOW! Tak jak przy składaniu modeli – 
                sklep już wkrótce. Proszę o cierpliwość.
            </StyledText>
            <StyledButtonsWrapper>
                <Button
                    whereGo="/kolekcje-modeli"
                    text="ZOBACZ KOLEKCJE MODELI"
                    hasBorder="2px solid var(--primary500)"
                    textColor="var(--primary500)"
                    hasFontSize="21px"
                    bgColor="var(--creamBg)"
                />
                <Button
                    whereGo="/kontakt"
                    text="SKONTAKTUJ SIĘ ZE MNĄ"
                    textColor="var(--white)"
                    bgColor="var(--primary500)"
                    hasFontSize="21px"
                />
            </StyledButtonsWrapper>
        </StyledShopInfoWrapper>
    </StyledShopInProgress>
  )
}

export default ShopInProgress