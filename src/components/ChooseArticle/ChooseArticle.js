import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Button from "../Button/Button";

import {
  StyledChooseArticle,
  StyledArticle,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledBgWrapper,
  StyledTitleWrapper
} from "./StyledChooseArticle";
import { StyledText } from "../Text/StyledText";

const ChooseArticle = ({ chosenArticle }) => {
  if (chosenArticle?.artykul) {
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
        <StyledArticle to={`/artykuly/${chosenArticle?.slug}`}>
          <StyledImageWrapper>
            <GatsbyImage
              image={getImage(
                chosenArticle?.artykul.informacjeDoMiniaturki?.miniaturka
                  ?.localFile
              )}
              alt={
                chosenArticle?.artykul.informacjeDoMiniaturki?.miniaturka?.altText || " "
              }
              title={
                chosenArticle?.artykul.informacjeDoMiniaturki?.miniaturka?.title
              }
            />
          </StyledImageWrapper>
          <StyledTextWrapper>
            <StyledBgWrapper>
              <StaticImage src="../../images/tloPolecenia.png" alt="tło" />
            </StyledBgWrapper>
            <StyledTitleWrapper>
              {parse(chosenArticle?.title)}
            </StyledTitleWrapper>
            <Button
              text="Dowiedz się więcej"
              bgColor="var(--secondary500)"
              textColor="var(--primary900)"
              hasDeclaredPadding="8px 33px"
              hasFontSize="21px"
              hoverBgColor="var(--secondary700)"
              hasBorder="2px solid transparent"
              hasNotTabIndex
              ariaLabel="link"
            />
          </StyledTextWrapper>
        </StyledArticle>
      </StyledChooseArticle>
    );
  }
  return null
};

export default ChooseArticle;
