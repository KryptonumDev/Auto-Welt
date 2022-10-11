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
  StyledImageWrapper
} from "./StyledHomeExhibitionsElement";

import useWindowSize from "../../utils/getWindowSize";

import ListIcon from "../../images/ListIcon.svg";

const HomeExhibitionsElement = ({ exhibitionData }) => {
  const width = useWindowSize();
  const convertedData = exhibitionData.wystawa.data.split(' ');
  return (
    <StyledHomeExhibitionsElement>
      <StyledDataInformationWrapper>
        <StyledImageWrapper>
          <GatsbyImage 
            image={getImage(exhibitionData.wystawa.tloDlaMiejscaIDaty.localFile)}
            alt={exhibitionData.wystawa.tloDlaMiejscaIDaty.altText}
            objectFit="cover"
          />
        </StyledImageWrapper>
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
        <StyledText
          hasdeclaredfontsize="16px"
          hasdeclaredfontcolor="#000"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontweight="400"
        >
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
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontweight="500"
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
                  hasdeclaredfontweight="500"
                  hasdeclaredfontcolor="#000"
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
        hasFontSize={width < 376 ? "15px" : "21px"}
        hasDeclaredPadding="10px 33px"
        hasBorder="1px solid transparent"
        hoverBgColor="var(--secondary700)"
      />
    </StyledHomeExhibitionsElement>
  );
};

export default HomeExhibitionsElement;
