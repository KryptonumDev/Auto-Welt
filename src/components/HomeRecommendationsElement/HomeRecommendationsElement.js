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
        PAN MAREK {data.id}
      </StyledText>
      <StyledText
        hasdeclaredfontsize="16px"
        hasdeclaredfontcolor="var(--secondary500)"
        hasdeclaredlineheight="1.1em"
        hasdeclaredpadding="2px 0 0"
      >
        www.linkdogry.com
      </StyledText>
      <StyledText
        hasdeclaredmaxwidth="275px"
        hasdeclaredfontsize="14px"
        hasdeclaredlineheight="1.4em"
        hasdeclaredmargin="10px 0 0"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
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
