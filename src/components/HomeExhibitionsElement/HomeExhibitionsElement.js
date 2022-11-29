import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

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
  StyledButtonWrapper,
  StyledTitleWrapper,
} from "./StyledHomeExhibitionsElement";

import ListIcon from "../../images/ListIcon.svg";

const HomeExhibitionsElement = ({
  exhibitionData,
  isSchdeuleElement,
  buttonVariant,
  slidesCount,
  dataLength,
}) => {
  const convertedData = new Date(exhibitionData.wystawa.informacjeOgolne.data)
    .toLocaleString("pl", { dateStyle: "long" })
    .split(" ");

  return (
    <StyledElementLink
      slidescount={slidesCount}
      isscheduleelement={isSchdeuleElement}
      to={`/wystawy/${exhibitionData.slug}`}
      datalength={dataLength}
    >
      <StyledHomeExhibitionsElement isscheduleelement={isSchdeuleElement}>
        <StyledDataInformationWrapper>
          <StyledImageWrapper>
            {exhibitionData.wystawa.informacjeOgolne.tloDlaMiejscaIDaty
              .localFile ? (
              <GatsbyImage
                image={getImage(
                  exhibitionData.wystawa.informacjeOgolne.tloDlaMiejscaIDaty
                    ?.localFile
                )}
                alt={
                  exhibitionData.wystawa.informacjeOgolne.tloDlaMiejscaIDaty
                    ?.altText || " "
                }
                title={
                  exhibitionData.wystawa.informacjeOgolne.tloDlaMiejscaIDaty
                    ?.title
                }
                objectFit="fill"
              />
            ) : null}
          </StyledImageWrapper>
          <StyledDataWrapper>
            <StyledText
              hasdeclaredfontsize="32px"
              hasdeclaredfontcolor="var(--secondary500)"
              hasdeclaredlineheight="1.2em"
              hasdeclaredfontweight="700"
            >
              {convertedData[0]}
            </StyledText>
            <StyledText
              hasdeclaredfontsize="26px"
              hasdeclaredfontcolor="var(--primary500)"
              hasdeclaredlineheight="1.2em"
              hasdeclaredpadding="0 0 1.5px 0"
              hasdeclaredfontweight="700"
            >
              {convertedData[1]} {convertedData[2]}
            </StyledText>
          </StyledDataWrapper>
          <StyledText
            hasdeclaredfontsize="16px"
            hasdeclaredfontcolor="#000"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontweight="500"
          >
            {exhibitionData.wystawa.informacjeOgolne.miejsce
              ? exhibitionData.wystawa.informacjeOgolne.miejsce
              : null}
          </StyledText>
        </StyledDataInformationWrapper>
        <StyledLogoWrapper>
          {exhibitionData.wystawa.informacjeOgolne.zdjecieDoMiniaturki
            .localFile ? (
            <GatsbyImage
              image={getImage(
                exhibitionData.wystawa.informacjeOgolne.zdjecieDoMiniaturki
                  ?.localFile
              )}
              alt={
                exhibitionData.wystawa.informacjeOgolne.zdjecieDoMiniaturki
                  ?.altText || " "
              }
              title={
                exhibitionData.wystawa.informacjeOgolne.zdjecieDoMiniaturki
                  ?.title
              }
            />
          ) : null}
        </StyledLogoWrapper>
        <StyledContentWrapper>
          <StyledTitleWrapper>
            {exhibitionData.wystawa.informacjeOgolne.tytulPodZdjeciem
              ? parse(exhibitionData.wystawa.informacjeOgolne.tytulPodZdjeciem)
              : null}
          </StyledTitleWrapper>
          <StyledContentList>
            {exhibitionData.wystawa.informacjeOgolne.elementyListy.map(
              (element, index) => (
                <div key={element.elementListy + index}>
                  <ListIcon />
                  <StyledText
                    hasdeclaredfontsize="14px"
                    hasdeclaredlineheight="1.2em"
                    hasdeclaredfontweight="500"
                    hasdeclaredfontcolor="#000"
                  >
                    {element.elementListy ? element.elementListy : null}
                  </StyledText>
                </div>
              )
            )}
          </StyledContentList>
        </StyledContentWrapper>
        <StyledButtonWrapper isscheduleelement={isSchdeuleElement}>
          {exhibitionData.wystawa.informacjeOgolne
            .tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy ? (
            <Button
              text={
                exhibitionData.wystawa.informacjeOgolne
                  .tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
              }
              bgColor={
                buttonVariant === "orange" ? "var(--secondary500)" : "#23423D"
              }
              textColor={
                buttonVariant === "orange" ? "var(--primary900)" : "#fff"
              }
              hasFontSize={"21px"}
              hasDeclaredPadding="8px 33px"
              hoverBgColor={
                buttonVariant === "orange"
                  ? "var(--secondary700)"
                  : "var(--primary900)"
              }
              hasBorder="2px solid transparent"
              hasNotTabIndex
              ariaLabel="link"
            />
          ) : null}
        </StyledButtonWrapper>
      </StyledHomeExhibitionsElement>
    </StyledElementLink>
  );
};

export default HomeExhibitionsElement;
