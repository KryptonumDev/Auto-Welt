import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";
import { StyledText } from "../Text/StyledText";

import {
  StyledModelCollection,
  StyledImage,
  StyledTitle,
  StyledButtonSpace,
  StyledTitleImage
} from "./StyledModelCollection";

const ModelCollection = ({ collectionData, slug }) => {
  const shortDataKey = collectionData.informacjeGlowne;
  return (
    <StyledModelCollection>
      <StyledImage>
        <GatsbyImage
          image={getImage(shortDataKey.duzaMiniaturka.localFile)}
          alt={shortDataKey.duzaMiniaturka.altText}
        />
      </StyledImage>
      <StyledTitle>
        <StyledTitleImage>
          <GatsbyImage
            image={getImage(shortDataKey.tloDlaTytuluWDuzejMiniaturce.localFile)}
            alt={shortDataKey.tloDlaTytuluWDuzejMiniaturce.altText}
          />
        </StyledTitleImage>
        <StyledText
          hasdeclaredfontsize="48px"
          hasdeclaredfontweight="400"
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredtextalign="center"
          as="h2"
        >
          {shortDataKey.nazwaKolekcji}
        </StyledText>
      </StyledTitle>
      <StyledButtonSpace>
        <Button
          whereGo={`/kolekcje-modeli/${slug}`}
          text={shortDataKey.trescPrzyciskuNaDuzejMiniaturce}
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hoverBgColor="#1D2B29"
          hasFontSize="21px"
          hasFontWeight="500"
          hasDeclaredPadding="10px 33px"
        />
      </StyledButtonSpace>
    </StyledModelCollection>
  );
};

export default ModelCollection;
