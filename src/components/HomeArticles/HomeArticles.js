import React from "react";

import Button from "../Button/Button";
import HomeArticleElement from "../HomeArticleElement/HomeArticleElement";
import ReqInfoWithButton from "../RecInfoWithButton/RecInfoWithButton";
import {
  StyledHomeArticles,
  StyledArticlesWrapper,
  StyledButtonWrapper,
} from "./StyledHomeArticles";
import { StyledText } from "../Text/StyledText";

const HomeArticles = ({ iscollection }) => {
  return (
    <StyledHomeArticles iscollection={iscollection}>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        Artykuły:
      </StyledText>
      <StyledArticlesWrapper>
        <HomeArticleElement index={0} />
        <HomeArticleElement index={1} />
      </StyledArticlesWrapper>
      {!iscollection ? (
        <ReqInfoWithButton />
      ) : (
        <StyledButtonWrapper>
          <Button
            whereGo="/kolekcje-modeli"
            text="WIĘCEJ ARTYKUŁÓW"
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasFontSize="21px"
            bgColor="var(--creamBg)"
          />
        </StyledButtonWrapper>
      )}
    </StyledHomeArticles>
  );
};

export default HomeArticles;
