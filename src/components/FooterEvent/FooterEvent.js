import React from 'react'
import { StyledText } from '../Text/StyledText'

import { StyledFooterEvent, StyledFooterEventContent, StyledFooterEventImage } from "./StyledFooterEvent"

const FooterEvent = () => {
  return (
    <StyledFooterEvent>
      <StyledFooterEventImage>

      </StyledFooterEventImage>
      <StyledFooterEventContent>
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredlineheight="19px"
          hasdeclaredfontweight="500"
          hasdeclaredfontcolor="var(--primary500)"
        >
          Samochody Wojskowe II Wojny Światowej oraz pojazdy wojskowe
        </StyledText>
      </StyledFooterEventContent>
    </StyledFooterEvent>
  )
}

export default FooterEvent