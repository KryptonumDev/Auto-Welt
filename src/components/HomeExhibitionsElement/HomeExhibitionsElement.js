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
  StyledImageWrapper,
  StyledElementLink,
} from "./StyledHomeExhibitionsElement";

import useWindowSize from "../../utils/getWindowSize";

import ListIcon from "../../images/ListIcon.svg";

const HomeExhibitionsElement = ({
  exhibitionData,
  isSchdeuleElement,
  buttonVariant,
  isPrev,
  key,
  slidesCount,
}) => {
  const width = useWindowSize();
  const convertedData = new Date(exhibitionData.wystawa.informacjeOgolne.data)
    .toLocaleString("pl", { dateStyle: "long" })
    .split(" ");

  return (
    <StyledElementLink
      slidesCount={slidesCount}
      isscheduleelement={isSchdeuleElement}
      to={`/wystawy/${exhibitionData.slug}`}
    >
      <StyledHomeExhibitionsElement
        key={key}
        initial={{ x: isPrev ? -100 : 100 }}
        animate={{ x: 0 }}
        isscheduleelement={isSchdeuleElement}
      >
        <StyledDataInformationWrapper>
          <StyledImageWrapper>
            {exhibitionData.wystawa.informacjeOgolne.tloDlaMiejscaIDaty
              .localFile && (
              <GatsbyImage
                image={getImage(
                  exhibitionData.wystawa.informacjeOgolne.tloDlaMiejscaIDaty
                    .localFile
                )}
                alt={
                  exhibitionData.wystawa.informacjeOgolne.tloDlaMiejscaIDaty
                    .altText
                }
                objectFit="fill"
              />
            )}
          </StyledImageWrapper>
          <StyledDataWrapper>
            <StyledText
              hasdeclaredfontsize="32px"
              hasdeclaredfontcolor="var(--secondary500)"
              hasdeclaredlineheight="1.2em"
              hasdeclaredfontweight="500"
            >
              {convertedData[0]}
            </StyledText>
            <StyledText
              hasdeclaredfontsize="26px"
              hasdeclaredfontcolor="var(--primary500)"
              hasdeclaredlineheight="1.2em"
              hasdeclaredpadding="0 0 1.5px 0"
              hasdeclaredfontweight="500"
            >
              {convertedData[1]} {convertedData[2]}
            </StyledText>
          </StyledDataWrapper>
          <StyledText
            hasdeclaredfontsize="16px"
            hasdeclaredfontcolor="#000"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontweight="400"
          >
            {exhibitionData.wystawa.informacjeOgolne.miejsce &&
              exhibitionData.wystawa.informacjeOgolne.miejsce}
          </StyledText>
        </StyledDataInformationWrapper>
        <StyledLogoWrapper>
          {exhibitionData.wystawa.informacjeOgolne.zdjecieDoMiniaturki
            .localFile && (
            <GatsbyImage
              image={getImage(
                exhibitionData.wystawa.informacjeOgolne.zdjecieDoMiniaturki
                  .localFile
              )}
              alt={
                exhibitionData.wystawa.informacjeOgolne.zdjecieDoMiniaturki
                  .altText
              }
            />
          )}
        </StyledLogoWrapper>
        <StyledContentWrapper>
          <StyledText
            hasdeclaredfontcolor="var(--primary500)"
            hasdeclaredfontsize="20px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontweight="500"
          >
            {exhibitionData.wystawa.informacjeOgolne.tytulPodZdjeciem &&
              exhibitionData.wystawa.informacjeOgolne.tytulPodZdjeciem}
          </StyledText>
          <StyledContentList>
            {exhibitionData.wystawa.informacjeOgolne.elementyListy.map(
              (element) => (
                <div>
                  <ListIcon />
                  <StyledText
                    hasdeclaredfontsize="14px"
                    hasdeclaredlineheight="1.2em"
                    hasdeclaredfontweight="500"
                    hasdeclaredfontcolor="#000"
                  >
                    {element.elementListy && element.elementListy}
                  </StyledText>
                </div>
              )
            )}
          </StyledContentList>
        </StyledContentWrapper>
        {exhibitionData.wystawa.informacjeOgolne
          .tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy && (
          <Button
            text={
              exhibitionData.wystawa.informacjeOgolne
                .tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
            }
            whereGo={`/wystawy/${exhibitionData.slug}`}
            bgColor={
              buttonVariant === "orange" ? "var(--secondary500)" : "#23423D"
            }
            textColor={
              buttonVariant === "orange" ? "var(--primary900)" : "#fff"
            }
            hasFontSize={width < 376 ? "15px" : "21px"}
            hasDeclaredPadding="8px 33px"
            hoverBgColor={
              buttonVariant === "orange"
                ? "var(--secondary700)"
                : "var(--primary900)"
            }
            hasBorder="2px solid transparent"
          />
        )}
      </StyledHomeExhibitionsElement>
    </StyledElementLink>
  );
};

export default HomeExhibitionsElement;
