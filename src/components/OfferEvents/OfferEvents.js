import React from "react";
import Button from "../Button/Button";
import OfferEvent from "../OfferEvent/OfferEvent";

import { StyledText } from "../Text/StyledText";
import {
  StyledOfferEvents,
  StyledEventsWrapper,
  StyledEventsButtonWrapper,
} from "./StyledOfferEvents";

const OfferEvents = () => {
  return (
    <StyledOfferEvents>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        Eventy:
      </StyledText>
      <StyledText>
        Biorę udział w wymienionych wydarzeniach. Wystawiam się przez kilka dni
        i osobiście jestem na miejscu. Serdecznie zapraszam do odwiedzin,
        zobaczenia wystawy oraz odbycia przyjemnej rozmowy.
      </StyledText>
      <StyledEventsWrapper>
        <OfferEvent />
        <OfferEvent />
      </StyledEventsWrapper>
      <StyledEventsButtonWrapper>
        <Button
          whereGo="/kontakt"
          text="SKONTAKTUJ SIĘ"
          hasBorder="2px solid var(--primary500)"
          textColor="var(--primary500)"
          hasFontSize="21px"
        />
        <Button
          whereGo="/kolekcje-modeli"
          text="ZOBACZ KOLEKCJE"
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasFontSize="21px"
        />
      </StyledEventsButtonWrapper>
    </StyledOfferEvents>
  );
};

export default OfferEvents;
