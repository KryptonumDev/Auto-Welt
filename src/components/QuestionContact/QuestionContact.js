import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

import Button from "../Button/Button"

import {
    StyledQuestionContact,
    StyledInfoWrapper,
    StyledImageContactWrapper,
} from "./StyledQuestionContact";
import { StyledText } from '../Text/StyledText';

const QuestionContact = () => {
    return (
        <StyledQuestionContact>
            <StyledImageContactWrapper>
                <StaticImage
                    placeholder="blurred"
                    src="../../images/questionContact.jpg"
                    alt="A dinosaur"
                />
            </StyledImageContactWrapper>
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
        </StyledQuestionContact>
    );
}

export default QuestionContact
