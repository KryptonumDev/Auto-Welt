import React from 'react'

import { StyledText } from "../Text/StyledText"
import { 
    StyledCheckOutWithOffer, 
    StyledImageWrapper, 
    StyledCheckOutButtonsWrapper 
} from "./StyledCheckOutWithOffer"

const CheckOutWithOffer = () => {
  return (
    <StyledCheckOutWithOffer>
        <StyledText
            as="h2"
            hasdeclaredfontsize="clamp(24px, 48px, 60px)"
            hasdeclaredtextalign="center"
            hasdeclaredfontcolor="var(--primary500)"
            hasdeclaredmargin="0 0 40px"
            hasdeclaredfontfamily="Nocturne Serif"
        >
            Zapoznaj się z naszym katalogiem: 
        </StyledText>
        <StyledImageWrapper>

        </StyledImageWrapper>
        <StyledCheckOutButtonsWrapper>

        </StyledCheckOutButtonsWrapper>
    </StyledCheckOutWithOffer>
  )
}

export default CheckOutWithOffer