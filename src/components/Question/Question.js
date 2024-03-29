import React from "react";
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
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <StyledQuestionWrapper>
        <ArrowQuestion />
        <StyledQuestionText itemProp="name">
          {faqData.pytanie ? parse(faqData.pytanie) : null}
        </StyledQuestionText>
        <StyledBgWrapper>
          {images ? <GatsbyImage image={images} alt="tło" objectFit="fill" /> : null}
        </StyledBgWrapper>
      </StyledQuestionWrapper>
      <StyledAnswerWrapper
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        {faqData.odpowiedz ? parse(faqData.odpowiedz) : null}
      </StyledAnswerWrapper>
    </StyledQuestion>
  );
};

export default Question;
