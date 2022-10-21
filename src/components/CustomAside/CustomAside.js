import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../Button/Button"

import { StyledLink } from "../Link/StyledLink";
import { StyledText } from "../Text/StyledText";
import {
  StyledCustomAside,
  StyledContents,
  StyledChooseCollections,
  StyledButtonsWrapper,
  StyledBgContents
} from "./StyledCustomAside";

const CustomAside = ({ asideData }) => {
  return (
    <StyledCustomAside>
      <StyledContents>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="28px"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="#EDAC2A"
        >
          Spis treści:
        </StyledText>
      </StyledContents>
      <StyledChooseCollections>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="28px"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="#EDAC2A"
          hasdeclaredmargin="0 0 20px 0"
        >
          {asideData?.tytul}
        </StyledText>
        {asideData?.ktoraKolekcjePolecic.map(({ kolekcja }) => (
          <StyledLink
            key={kolekcja.url}
            target={kolekcja.target}
            to={kolekcja.url}
            hasdeclaredfontcolor="#fff"
            hasdeclaredtextdecoration="underline"
            hasdeclaredlineheight="1.2"
          >
            {kolekcja.title}
          </StyledLink>
        ))}
        <StyledButtonsWrapper>
          <Button
            text={asideData?.pierwszyPrzycisk.title}
            whereGo={asideData?.pierwszyPrzycisk.url}
            bgColor="var(--secondary500)"
            textColor="var(--primary900)"
            hasDeclaredPadding="10px 33px"
            hasFontSize="21px"
            hasTarget={asideData?.pierwszyPrzycisk.target}
            hoverBgColor="var(--secondary700)"
          />
          <Button
            whereGo={asideData?.drugiPrzycisk.url}
            text={asideData?.drugiPrzycisk.title}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="10px 36px"
            hasFontSize="21px"
            hasFontWeight="500"
            hasTarget={asideData?.drugiPrzycisk.target}
            hoverBgColor="var(--primary900)"
          />
        </StyledButtonsWrapper>
      </StyledChooseCollections>
      <StyledBgContents>
        <StaticImage
          src="../../images/asideBg.png"
          objectFit="fill"
        />
      </StyledBgContents>
    </StyledCustomAside>
  );
};

export default CustomAside;
