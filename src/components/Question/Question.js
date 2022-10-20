import React, { useState } from "react";
import { getImage, withArtDirection, GatsbyImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { AnimatePresence } from "framer-motion";

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

  return (
    <StyledQuestion
      itemscope
      itemprop="mainEntity"
      itemtype="https://schema.org/Question"
      isopen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <StyledQuestionWrapper isopen={isOpen}>
        <ArrowQuestion />
        <StyledQuestionText itemprop="name">
          {faqData.pytanie && parse(faqData.pytanie)}
        </StyledQuestionText>
        <StyledBgWrapper>
          {images && <GatsbyImage image={images} objectFit="fill" />}
        </StyledBgWrapper>
      </StyledQuestionWrapper>
      {isOpen && (
        <StyledAnswerWrapper
          itemscope
          itemprop="acceptedAnswer"
          itemtype="https://schema.org/Answer"
        >
          {faqData.odpowiedz && parse(faqData.odpowiedz)}
        </StyledAnswerWrapper>
      )}
    </StyledQuestion>
  );
};

export default Question;
