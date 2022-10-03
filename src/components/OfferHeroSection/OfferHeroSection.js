import React from 'react'
import RecInfoWithButton from '../RecInfoWithButton/RecInfoWithButton'
import Button from "../Button/Button"

import { StyledText } from '../Text/StyledText'
import { 
    StyledOfferHeroSection, 
    StyledTimeInfo, 
    StyledImagesWrapper, 
    StyledTextWrapper,
    StyledMoreInfoWrapper
} from "./StyledOfferHeroSection"

const OfferHeroSection = () => {
  return (
    <StyledOfferHeroSection>
        <StyledTimeInfo>
            <StyledImagesWrapper>

            </StyledImagesWrapper>
            <StyledTextWrapper>
                <StyledText
                    as="h2"
                    hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                    hasdeclaredfontcolor="var(--primary500)"
                    hasdeclaredmargin="0 0 40px"
                    hasdeclaredfontfamily="Nocturne Serif"
                >
                    Wystawy czasowe
                </StyledText>
                <StyledMoreInfoWrapper>

                </StyledMoreInfoWrapper>
                <Button
                    whereGo="/"
                    text="ZAPLANUJ WYSTAWE"
                    textColor="var(--white)"
                    bgColor="var(--primary500)"
                    hasFontSize="21px"
                />
            </StyledTextWrapper>
        </StyledTimeInfo>
        <RecInfoWithButton />
    </StyledOfferHeroSection>
  )
}

export default OfferHeroSection