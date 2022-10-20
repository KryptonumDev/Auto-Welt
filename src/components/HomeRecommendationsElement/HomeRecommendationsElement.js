import React from "react";
import parse from "html-react-parser";
import { motion } from "framer-motion";

import { StyledText } from "../Text/StyledText";
import {
  StyledHomeRecommendationsElement,
  StyledImageWrapper,
  StyledTextWrapper,
} from "./StyledHomeRecommendationsElement";

const HomeRecommendationsElement = ({ data, key, isPrev }) => {
  return (
    <StyledHomeRecommendationsElement
      key={key}
      initial={{ x: isPrev ? -100 : 100 }}
      animate={{ x: 0 }}
    >
      <StyledText
        hasdeclaredfontsize="20px"
        hasdeclaredfontweight="600"
        hasdeclaredlineheight="1.2em"
        hasdeclaredfontcolor="var(--primary800)"
      >
        {data.rekomendacje.imieNazwisko && data.rekomendacje.imieNazwisko}
      </StyledText>
      {data.rekomendacje.linkPodImieniem.url && (
        <motion.a
          href={data.rekomendacje.linkPodImieniem.url}
          target={data.rekomendacje.linkPodImieniem.target}
        >
          {data.rekomendacje.linkPodImieniem.title}
        </motion.a>
      )}
      <StyledTextWrapper>
        {data.rekomendacje.rekomendacja &&
          parse(data.rekomendacje.rekomendacja)}
      </StyledTextWrapper>
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
