import React, { useState } from 'react'
import { StaticImage } from "gatsby-plugin-image";

import {
    StyledQuestion,
    StyledQuestionWrapper,
    StyledAnswerWrapper,
    StyledBgWrapper,
} from "./StyledQuestion";
import ArrowQuestion from "../../images/arrowQuestion.svg";

const Question = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledQuestion onClick={() => setIsOpen(!isOpen)}>
            <StyledQuestionWrapper isopen={isOpen}>
                <ArrowQuestion />
            </StyledQuestionWrapper>
            <StyledAnswerWrapper>

            </StyledAnswerWrapper>
        </StyledQuestion>
    );
}

export default Question
