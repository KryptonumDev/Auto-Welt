import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  StyledQuestionContact,
  StyledInfoWrapper,
  StyledImageContactWrapper,
  StyledContactInfoWrapper,
} from "./StyledQuestionContact";
import { StyledText } from "../Text/StyledText";

const QuestionContact = ({ isContactPage, banerImg }) => {
  return (
    <StyledQuestionContact>
      <StyledImageContactWrapper>
        <StaticImage placeholder="blurred" src={banerImg} alt="A dinosaur" />
      </StyledImageContactWrapper>
      {isContactPage ? (
        <StyledContactInfoWrapper>
          <Button
            whereGo="/terminarz"
            text="ZOBACZ TERMINARZ"
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasFontSize="21px"
          />
          <Button
            whereGo="/kontakt"
            text="DOWIEDZ SIĘ WIĘCEJ O MNIE"
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasFontSize="21px"
          />
        </StyledContactInfoWrapper>
      ) : (
        <StyledInfoWrapper>
          <StyledText
            hasdeclaredfontsize="18px"
            hasdeclaredfontweight="600"
            hasdeclaredlineheight="21px"
            hasdeclaredfontcolor="var(--primary500)"
          >
            NIE ZNALAZŁEŚ ODPOWIEDZI NA SWOJE PYTANIE?
          </StyledText>
          <Button
            whereGo="/kontakt"
            text="SKONTAKTUJ SIĘ ZE MNĄ"
            bgColor="var(--secondary500)"
            hasBorder="2px solid var(--secondary500)"
            hasHeight="44px"
            textColor="var(--primary900)"
          />
        </StyledInfoWrapper>
      )}
    </StyledQuestionContact>
  );
};

export default QuestionContact;
