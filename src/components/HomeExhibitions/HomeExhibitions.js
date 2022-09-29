import React from "react"

import Button from "../Button/Button"
import HomeExhibitionsElement from "../HomeExhibitionsElement/HomeExhibitionsElement"
import { StyledText } from "../Text/StyledText"

import { StyledHomeExhibitions, StyledElementsWrapper } from "./StyledHomeExhibitions"

const HomeExhibitions = () => {
    return (
        <StyledHomeExhibitions>
            <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredtextalign="center"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="0 0 40px"
                hasdeclaredfontfamily="Nocturne Serif"
            >
                Wystawy:
            </StyledText>
            <StyledElementsWrapper>
                <HomeExhibitionsElement />
                <HomeExhibitionsElement />
                <HomeExhibitionsElement />
            </StyledElementsWrapper>
            <Button 
                text="Terminarz" 
                whereGo="/kontakt" 
                textColor="var(--white)" 
                bgColor="var(--primary500)" 
                hasMaxWidth="188px"
                hasFontSize="clamp(12px, 21px, 24px)"
            />
        </StyledHomeExhibitions>
    )
}

export default HomeExhibitions