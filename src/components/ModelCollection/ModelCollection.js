import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";
import { StyledText } from "../Text/StyledText";

import {
  StyledModelCollection,
  StyledImage,
  StyledTitle,
  StyledButtonSpace,
  StyledTitleImage,
} from "./StyledModelCollection";

const ModelCollection = ({ collectionData, slug }) => {
  const shortDataKey = collectionData.informacjeGlowne;
  return (
    <StyledModelCollection to={`/kolekcje-modeli/${slug}`}>
      <StyledImage>
        {shortDataKey.duzaMiniaturka.localFile && (
          <GatsbyImage
            image={getImage(shortDataKey.duzaMiniaturka.localFile)}
            alt={shortDataKey.duzaMiniaturka.altText}
          />
        )}
      </StyledImage>
      <StyledTitle>
        <StyledTitleImage>
          {shortDataKey.tloDlaTytuluWDuzejMiniaturce.localFile && (
            <GatsbyImage
              image={getImage(
                shortDataKey.tloDlaTytuluWDuzejMiniaturce.localFile
              )}
              alt={shortDataKey.tloDlaTytuluWDuzejMiniaturce.altText}
              objectFit="fill"
            />
          )}
        </StyledTitleImage>
        <StyledText
          hasdeclaredfontsize="48px"
          hasdeclaredfontweight="500"
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredpadding="10px 20px"
          hasdeclaredtextalign="center"
          as="h2"
        >
          {shortDataKey.tytulNaDuzejMiniaturce &&
            shortDataKey.tytulNaDuzejMiniaturce}
        </StyledText>
      </StyledTitle>
      <StyledButtonSpace>
        {shortDataKey.trescPrzyciskuNaDuzejMiniaturce && (
          <Button
            whereGo={`/kolekcje-modeli/${slug}`}
            text={shortDataKey.trescPrzyciskuNaDuzejMiniaturce}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hoverBgColor="#1D2B29"
            hasFontSize="21px"
            hasFontWeight="700"
            hasDeclaredPadding="8px 33px"
            hasBorder="2px solid var(--primary500)"
          />
        )}
      </StyledButtonSpace>
    </StyledModelCollection>
  );
};

export default ModelCollection;
