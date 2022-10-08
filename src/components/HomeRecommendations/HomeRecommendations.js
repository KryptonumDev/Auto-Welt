import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

import HomeRecommendationsElement from "../HomeRecommendationsElement/HomeRecommendationsElement";
import Button from "../Button/Button";

import {
  StyledHomeRecommendations,
  StyledRecommendationsWrapper,
  StyledButtonsWrapper,
  StyledSlides,
  StyledArrowWrapper,
} from "./StyledHomeRecommendations";
import { StyledText } from "../Text/StyledText";

import LeftArrow from "../../images/left_arrow.svg";
import RightArrow from "../../images/right_arrow.svg";

const HomeRecommendations = () => {
  const {allWpRekomendacja, wpPage} = useStaticQuery(graphql`
  query rekomendacje {
    allWpRekomendacja {
      nodes {
        rekomendacje {
          imieNazwisko
          rekomendacja
          linkPodImieniem {
            target
            title
            url
          }
        }
      }
    }
    wpPage(id: {eq: "cG9zdDozMw=="}) {
      globalConfig {
        informacjeDoRekomendacjiNaStronieGlownej {
          przyciskLewy {
            target
            title
            url
          }
          przyciskPrawy {
            target
            title
            url
          }
          tytulSekcji
        }
      }
    }
  }
  `)
  const [renderElements, setRenderElements] = useState([]);
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      setIndex(renderElements.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleNext = () => {
    if (index === allWpRekomendacja.nodes.length - 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const sliderElements = allWpRekomendacja.nodes.slice(index, index + 2);

    setRenderElements(sliderElements);
  }, [index]);

  return (
    <StyledHomeRecommendations>
      <StyledText
        as="h2"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredtextalign="center"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {wpPage.globalConfig.informacjeDoRekomendacjiNaStronieGlownej.tytulSekcji}
      </StyledText>
      <StyledRecommendationsWrapper>
        <StyledArrowWrapper onClick={handlePrev}>
          <LeftArrow />
        </StyledArrowWrapper>
        <StyledSlides>
          {renderElements.map((e) => (
            <HomeRecommendationsElement key={e.rekomendacje.imieNazwisko} data={e} />
          ))}
        </StyledSlides>
        <StyledArrowWrapper onClick={handleNext}>
          <RightArrow />
        </StyledArrowWrapper>
      </StyledRecommendationsWrapper>
      <StyledButtonsWrapper>
        <Button
          whereGo={wpPage.globalConfig.informacjeDoRekomendacjiNaStronieGlownej.przyciskLewy.url}
          text={wpPage.globalConfig.informacjeDoRekomendacjiNaStronieGlownej.przyciskLewy.title}
          hasBorder="2px solid var(--primary500)"
          textColor="var(--primary500)"
          hasFontSize="21px"
          hasDeclaredPadding="10px 22px"
          bgColor="var(--creamBg)"
          hasTarget={wpPage.globalConfig.informacjeDoRekomendacjiNaStronieGlownej.przyciskLewy.target}
        />
        <Button
          whereGo={wpPage.globalConfig.informacjeDoRekomendacjiNaStronieGlownej.przyciskPrawy.url}
          text={wpPage.globalConfig.informacjeDoRekomendacjiNaStronieGlownej.przyciskPrawy.title}
          textColor="var(--white)"
          bgColor="var(--primary500)"
          hasFontSize="21px"
          hasDeclaredPadding="10px 22px"
          hasTarget={wpPage.globalConfig.informacjeDoRekomendacjiNaStronieGlownej.przyciskPrawy.target}
        />
      </StyledButtonsWrapper>
    </StyledHomeRecommendations>
  );
};

export default HomeRecommendations;
