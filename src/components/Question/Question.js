import React, { useState, useCallback } from "react";
import { getImage, withArtDirection, GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import {
  StyledQuestion,
  StyledQuestionWrapper,
  StyledAnswerWrapper,
  StyledBgWrapper,
  StyledQuestionText,
} from "./StyledQuestion";

import ArrowQuestion from "../../images/arrowQuestion.svg";

const Question = ({ faqData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const images = withArtDirection(getImage(faqData.zdjecieTla.localFile), [
    {
      media: "(max-width: 375px)",
      image: getImage(faqData.zdjecieTlaMobile.localFile),
    },
    {
      media: "(max-width: 768px)",
      image: getImage(faqData.zdjecieTlaTablet.localFile),
    },
  ]);

  const openAnswer = useCallback(() => {
    setIsOpen(!isOpen)
  })

  const openAnswerOnClick = useCallback((e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      setIsOpen(!isOpen)
    }
  })

  return (
    <StyledQuestion
      itemscope
      itemprop="mainEntity"
      itemtype="https://schema.org/Question"
      isopen={isOpen}
      onClick={openAnswer}
      onKeyUp={openAnswerOnClick}
      tabIndex="0"
    >
      <StyledQuestionWrapper isopen={isOpen}>
        <ArrowQuestion />
        <StyledQuestionText itemprop="name">
          {faqData.pytanie ? parse(faqData.pytanie) : null}
        </StyledQuestionText>
        <StyledBgWrapper>
          {images ? <GatsbyImage image={images} alt="tło" objectFit="fill" /> : null}
        </StyledBgWrapper>
      </StyledQuestionWrapper>
      <StyledAnswerWrapper
        itemscope
        itemprop="acceptedAnswer"
        itemtype="https://schema.org/Answer"
        isopen={isOpen}
      >
        {faqData.odpowiedz ? parse(faqData.odpowiedz) : null}
      </StyledAnswerWrapper>
    </StyledQuestion>
  );
};

export default Question;
