import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import { StyledLink } from "../Link/StyledLink";
import { StyledText } from "../Text/StyledText";
import {
  StyledCustomAside,
  StyledContents,
  StyledChooseCollections,
  StyledButtonsWrapper,
  StyledBgContents,
} from "./StyledCustomAside";

const CustomAside = ({ tableOfContents, asideData }) => {
  return (
    <StyledCustomAside>
      {tableOfContents ? (
        <StyledContents>
          <StyledText
            hasdeclaredfontfamily="Nocturne Serif"
            hasdeclaredfontsize="28px"
            hasdeclaredfontweight="500"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontcolor="#EDAC2A"
            hasdeclaredmargin="0 0 15px 0"
          >
            Spis treści:
          </StyledText>
          <ol>
            {tableOfContents?.map((h2) => (
              <li>
                <a href={`#${h2.id}`}>{h2.name}</a>
                {h2.children.map((h3) => (
                  <ul>
                    <li>
                      <a href={`#${h3.id}`}>{h3.name}</a>
                    </li>
                  </ul>
                ))}
              </li>
            ))}
          </ol>
        </StyledContents>
      ) : undefined}
      <StyledChooseCollections>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="500"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="#EDAC2A"
          hasdeclaredmargin="0 0 20px 0"
        >
          {asideData?.tytul}
        </StyledText>
        {asideData?.ktoraKolekcjePolecic?.map(({ kolekcja }) => (
          <StyledLink
            key={kolekcja?.url}
            target={kolekcja?.target}
            to={kolekcja?.url}
            hasdeclaredfontcolor="#fff"
            hasdeclaredtextdecoration="underline"
            hasdeclaredlineheight="1.2"
            aria-label="zobacz kolekcje"
          >
            {kolekcja?.title}
          </StyledLink>
        ))}
        <StyledButtonsWrapper>
          <Button
            text={asideData?.pierwszyPrzycisk?.title}
            whereGo={asideData?.pierwszyPrzycisk?.url}
            bgColor="var(--secondary500)"
            textColor="var(--primary900)"
            hasDeclaredPadding="8px 33px"
            hasFontSize="21px"
            hasTarget={asideData?.pierwszyPrzycisk?.target}
            hoverBgColor="var(--secondary700)"
            hasBorder="2px solid transparent"
            ariaLabel="link"
          />
          <Button
            whereGo={asideData?.drugiPrzycisk?.url}
            text={asideData?.drugiPrzycisk?.title}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="8px 36px"
            hasFontSize="21px"
            hasFontWeight="700"
            hasTarget={asideData?.drugiPrzycisk?.target}
            hoverBgColor="var(--primary900)"
            hasBorder="2px solid var(--primary500)"
            ariaLabel="link"
          />
        </StyledButtonsWrapper>
      </StyledChooseCollections>
      <StyledBgContents>
        <StaticImage src="../../images/asideBg.png" objectFit="fill" alt="tło" />
      </StyledBgContents>
    </StyledCustomAside>
  );
};

export default CustomAside;
