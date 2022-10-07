import React from "react";

import Question from "../Question/Question";

import { StyledQuestions, StyledQuestionsWrapper } from "./StyledQuestions";
import { StyledText } from "../Text/StyledText";

const Questions = () => {
  return (
    <StyledQuestions>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredtextalign="left"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        Masz pytania?
      </StyledText>
      <StyledQuestionsWrapper>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </StyledQuestionsWrapper>
    </StyledQuestions>
  );
};

export default Questions;
