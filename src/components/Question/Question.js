import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser"

import {
  StyledQuestion,
  StyledQuestionWrapper,
  StyledAnswerWrapper,
  StyledBgWrapper,
  StyledQuestionText
} from "./StyledQuestion";

import ArrowQuestion from "../../images/arrowQuestion.svg";

const Question = ({ faqData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledQuestion isopen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <StyledQuestionWrapper isopen={isOpen}>
        <ArrowQuestion />
        <StyledQuestionText>{parse(faqData.pytanie)}</StyledQuestionText>
        <StyledBgWrapper>
          <GatsbyImage
            image={getImage(faqData.zdjecieTla.localFile)}
            alt={faqData.zdjecieTla.altText}
          />
        </StyledBgWrapper>
      </StyledQuestionWrapper>
      {isOpen && (
        <StyledAnswerWrapper
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100%", opacity: 1}}
        >
          {parse(faqData.odpowiedz)}
        </StyledAnswerWrapper>
      )}
    </StyledQuestion>
  );
};

export default Question;
