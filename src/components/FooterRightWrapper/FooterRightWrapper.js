import React from "react"

import Button from "../Button/Button";
import FooterEvent from "../FooterEvent/FooterEvent";

import { StyledText } from "../Text/StyledText";
import { StyledFooterRightWrapper, StyledEventWrapper } from "./StyledFooterRightWrapper"

const FooterRightWrapper = () => {
    return (
        <StyledFooterRightWrapper>
            <StyledText
                hasdeclaredfontfamily="Nocturne Serif"
                hasdeclaredfontsize="24px"
                hasdeclaredfontweight="400"
                hasdeclaredlineheight="29px"
                hasdeclaredmargin="0 0 16px"
                hasdeclaredfontcolor="var(--secondary500)"
            >
                Wydarzenia
            </StyledText>
            <StyledEventWrapper>
                <FooterEvent />
                <FooterEvent />
                <FooterEvent />
            </StyledEventWrapper>
            <Button
                text="TERMINARZ"
                whereGo="/terminarz"
                bgColor="var(--secondary500)"
                hasBorder="2px solid var(--secondary500)"
                hasHeight="44px"
                textColor="var(--primary900)"
                hasMaxWidth="189px"
            />
        </StyledFooterRightWrapper>
    )
}

export default FooterRightWrapper;