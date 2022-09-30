import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image";

import {
    StyledQuestion,
    StyledQuestionWrapper,
    StyledAnswerWrapper,
    StyledBgWrapper,
} from "./StyledQuestion";
import { StyledText } from "../Text/StyledText";

import ArrowQuestion from "../../images/arrowQuestion.svg";

const Question = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledQuestion isopen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <StyledQuestionWrapper isopen={isOpen}>
                <ArrowQuestion />
                <StyledText>Z ILU MODELI SKŁADA SIĘ WYSTAWA?</StyledText>
            </StyledQuestionWrapper>
            {isOpen &&
                <StyledAnswerWrapper>
                    Na wystawie zobaczyć można modele w liczbie przekraczającej 1000
                    egzemplarzy. Liczba prezentowanych modeli ciągle się powiększa i
                    z miesiąca na miesiąca oferta jest coraz bogatsza.
                </StyledAnswerWrapper>
            }
        </StyledQuestion>
    );
}

export default Question
