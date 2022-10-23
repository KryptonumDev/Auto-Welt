import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  StyledChooseArticle,
  StyledArticle,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledBgWrapper,
} from "./StyledChooseArticle";
import { StyledText } from "../Text/StyledText";

const ChooseArticle = ({ chosenArticle }) => {
  return (
    <StyledChooseArticle>
      <StyledText
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontlineheight="1.2em"
        hasdeclaredpadding="0 0 40px 0"
        hasdeclaredfontcolor="#23423D"
        hasdeclaredfontsize="48px"
        as="h2"
      >
        Zobacz również:
      </StyledText>
      <StyledArticle>
        <StyledImageWrapper>
          <GatsbyImage
            image={getImage(
              chosenArticle?.artykul.informacjeDoMiniaturki?.miniaturka
                ?.localFile
            )}
            alt={
              chosenArticle?.artykul.informacjeDoMiniaturki?.miniaturka?.altText
            }
          />
        </StyledImageWrapper>
        <StyledTextWrapper>
          <StyledBgWrapper>
            <StaticImage src="../../images/tloPolecenia.png" />
          </StyledBgWrapper>
          <StyledText
            hasdeclaredfontweight="500"
            hasdeclaredfontsize="24px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredtextalign="center"
            hasdeclaredfontcolor="#23423D"
          >
            {chosenArticle?.artykul?.informacjeDoMiniaturki?.tytul}
          </StyledText>
          <Button
            text="Dowiedz się więcej"
            whereGo={`/artykuly/${chosenArticle?.slug}`}
            bgColor="var(--secondary500)"
            textColor="var(--primary900)"
            hasDeclaredPadding="10px 33px"
            hasFontSize="21px"
            hoverBgColor="var(--secondary700)"
            hasBorder="2px solid transparent"
          />
        </StyledTextWrapper>
      </StyledArticle>
    </StyledChooseArticle>
  );
};

export default ChooseArticle;
