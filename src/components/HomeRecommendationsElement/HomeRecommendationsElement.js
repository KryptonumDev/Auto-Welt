import React from "react";
import { StyledText } from "../Text/StyledText";

import {
  StyledHomeRecommendationsElement,
  StyledImageWrapper,
} from "./StyledHomeRecommendationsElement";

const HomeRecommendationsElement = ({ data }) => {
  return (
    <StyledHomeRecommendationsElement>
      <StyledText
        hasdeclaredfontsize="20px"
        hasdeclaredfontweight="600"
        hasdeclaredlineheight="1.3em"
        hasdeclaredfontcolor="var(--primary500)"
      >
        {data.rekomendacje.imieNazwisko}
      </StyledText>
      {/* hasdeclaredfontcolor="var(--secondary500)" */}
      <a
        href={data.rekomendacje.linkPodImieniem.url}
        target={data.rekomendacje.linkPodImieniem.target}
      >
        {data.rekomendacje.linkPodImieniem.title}
      </a>
      <StyledText
        hasdeclaredmaxwidth="275px"
        hasdeclaredfontsize="14px"
        hasdeclaredlineheight="1.4em"
        hasdeclaredmargin="10px 0 0"
      >
        {data.rekomendacje.rekomendacja}
      </StyledText>
      <StyledImageWrapper>
        <StyledText
          hasdeclaredfontsize="128px"
          hasdeclaredfontweight="400"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredfontfamily="Nocturne Serif"
        >
          “
        </StyledText>
      </StyledImageWrapper>
    </StyledHomeRecommendationsElement>
  );
};

export default HomeRecommendationsElement;
