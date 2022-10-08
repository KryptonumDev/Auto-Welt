import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
  StyledHomeExhibitionsElement,
  StyledDataInformationWrapper,
  StyledDataWrapper,
  StyledLogoWrapper,
  StyledContentWrapper,
  StyledContentList,
} from "./StyledHomeExhibitionsElement";

import ListIcon from "../../images/ListIcon.svg";

const HomeExhibitionsElement = ({ exhibitionData }) => {
  const convertedData = exhibitionData.wystawa.data.split(' ');
  return (
    <StyledHomeExhibitionsElement>
      <StyledDataInformationWrapper>
        <StyledDataWrapper>
          <StyledText
            hasdeclaredfontsize="32px"
            hasdeclaredfontcolor="var(--secondary500)"
            hasdeclaredlineheight="1.2em"
          >
            {convertedData[0]}
          </StyledText>
          <StyledText
            hasdeclaredfontsize="26px"
            hasdeclaredfontcolor="var(--primary500)"
            hasdeclaredlineheight="1.2em"
            hasdeclaredpadding="0 0 1.5px 0"
          >
            {convertedData[1]}{' '}{convertedData[2]}
          </StyledText>
        </StyledDataWrapper>
        <StyledText>
          {exhibitionData.wystawa.miejsce}
        </StyledText>
      </StyledDataInformationWrapper>
      <StyledLogoWrapper>
        <GatsbyImage
          image={getImage(exhibitionData.wystawa.zdjecieDoMiniaturki.localFile)}
          alt={exhibitionData.wystawa.zdjecieDoMiniaturki.altText}
        />
      </StyledLogoWrapper>
      <StyledContentWrapper>
        <StyledText
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredfontsize="20px"
        >
          {exhibitionData.wystawa.tytulPodZdjeciem}
        </StyledText>
        <StyledContentList>
          {exhibitionData.wystawa.elementyListy.map(element => 
            (
              <div>
                <ListIcon />
                <StyledText
                  hasdeclaredfontsize="14px"
                  hasdeclaredlineheight="1.2em"
                >
                  {element.elementListy}
                </StyledText>
              </div>
            )
          )}
        </StyledContentList>
      </StyledContentWrapper>
      <Button
        text={exhibitionData.wystawa.tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy}
        whereGo={`/wystawy/${exhibitionData.slug}`}
        bgColor="var(--secondary500)"
        textColor="var(--primary900)"
        hasFontSize="21px"
        hasDeclaredPadding="10px 33px"
        hasBorder="1px solid transparent"
      />
    </StyledHomeExhibitionsElement>
  );
};

export default HomeExhibitionsElement;
