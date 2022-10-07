import React from "react";
import Button from "../Button/Button";

import {
  StyledOfferEvent,
  StyledOfferEventImage,
  StyledOfferEventInfo,
} from "./StyledOfferEvent";

const OfferEvent = () => {
  return (
    <StyledOfferEvent>
      <StyledOfferEventImage></StyledOfferEventImage>
      <StyledOfferEventInfo>
        <Button
          text="CHCĘ ZOBACZYĆ"
          whereGo="/kolekcje-modeli"
          bgColor="var(--secondary500)"
          hasBorder="2px solid var(--secondary500)"
          hasHeight="44px"
          textColor="var(--primary900)"
        />
      </StyledOfferEventInfo>
    </StyledOfferEvent>
  );
};

export default OfferEvent;
