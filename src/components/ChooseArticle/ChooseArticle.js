import React from "react";

import Button from "../Button/Button";

import {
  StyledChooseArticle,
  StyledArticle,
  StyledImageWrapper,
  StyledTextWrapper,
} from "./StyledChooseArticle";
import { StyledText } from "../Text/StyledText";

const ChooseArticle = () => {
  return (
    <StyledChooseArticle>
      <StyledText>Zobacz również</StyledText>
      <StyledArticle>
        <StyledImageWrapper></StyledImageWrapper>
        <StyledTextWrapper>
          <StyledText>dsadsa</StyledText>
          {/* <Button /> */}
        </StyledTextWrapper>
      </StyledArticle>
    </StyledChooseArticle>
  );
};

export default ChooseArticle;
