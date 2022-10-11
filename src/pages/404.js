import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../components/Button/Button";

import { 
  StyledMainContainer,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTextWrapper,
  StyledImageLeftWrapper,
  StyledImageRightWrapper,
  StyledImageRightFirstWrapper
} from "../components/404/Styled404";
import { StyledText } from "../components/Text/StyledText";

const NotFoundPage = ({ data }) => {
  return (
    <StyledMainContainer>
      <StyledLeftWrapper>
        <StyledTextWrapper>
          <StyledText
            hasdeclaredfontsize="48px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontweight="400"
            hasdeclaredfontfamily="Nocturne Serif"
            hasdeclaredfontcolor="var(--primary500)"
            hasdeclaredmargin="0 0 30px"
          >
            {data.wpPage.page404.tytul}
          </StyledText>
          <Button
            text={data.wpPage.page404.przycisk.title}
            whereGo={data.wpPage.page404.przycisk.url}
            bgColor="var(--secondary500)"
            textColor="var(--primary900)"
            hasFontSize="21px"
            hasDeclaredPadding="10px 33px"
            hasFontWeight="500"
            hasTarget={data.wpPage.page404.przycisk.target}
            hoverBgColor="var(--secondary700)"
          />
        </StyledTextWrapper>
        <StyledImageLeftWrapper>
          <GatsbyImage
            image={getImage(data.wpPage.page404.zdjeciePodPrzyciskiem.localFile)}
            alt={data.wpPage.page404.zdjeciePodPrzyciskiem.altText}
          />
        </StyledImageLeftWrapper>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledImageRightFirstWrapper>
          <GatsbyImage
            image={getImage(data.wpPage.page404.zdjeciePoPrawo.localFile)}
            alt={data.wpPage.page404.zdjeciePoPrawo.altText}
          />
        </StyledImageRightFirstWrapper>
        <StyledImageRightWrapper>
          <GatsbyImage
            image={getImage(data.wpPage.page404.drugieZdjeciePoPrawo.localFile)}
            alt={data.wpPage.page404.drugieZdjeciePoPrawo.altText}
          />
        </StyledImageRightWrapper>
      </StyledRightWrapper>
    </StyledMainContainer>
  );
};

export default NotFoundPage;

export const query = graphql`
query page404Query {
  wpPage(id: {eq: "cG9zdDozNTg="}) {
    page404 {
      tytul
      przycisk {
        target
        title
        url
      }
      drugieZdjeciePoPrawo {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      zdjeciePoPrawo {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      zdjeciePodPrzyciskiem {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}
`