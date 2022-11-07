import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../components/Button/Button";

import {
  StyledMainContainer,
  StyledLeftWrapper,
  StyledRightWrapper,
  StyledTextWrapper,
  StyledImageRightWrapper,
} from "../components/404/Styled404";
import { StyledText } from "../components/Text/StyledText";

const NotFoundPage = ({ data }) => {
  const queryData = data.wpPage.page404;
  
  return (
    <StyledMainContainer>
      <StyledLeftWrapper>
        <StyledTextWrapper>
          <StyledText
            hasdeclaredfontsize="48px"
            hasdeclaredlineheight="1.2em"
            hasdeclaredfontweight="500"
            hasdeclaredfontfamily="Nocturne Serif"
            hasdeclaredfontcolor="var(--primary500)"
            hasdeclaredmargin="0 0 30px"
            as="h1"
          >
            {queryData.tytul}
          </StyledText>
          <Button
            text={queryData.przycisk.title}
            whereGo={queryData.przycisk.url}
            bgColor="var(--secondary500)"
            textColor="var(--primary900)"
            hasFontSize="21px"
            hasDeclaredPadding="8px 33px"
            hasFontWeight="700"
            hasTarget={queryData.przycisk.target}
            hoverBgColor="var(--secondary700)"
          />
        </StyledTextWrapper>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        <StyledImageRightWrapper>
          <GatsbyImage
            image={getImage(queryData.zdjeciePoPrawo.localFile)}
            alt={queryData.zdjeciePoPrawo?.altText}
            title={queryData.zdjeciePoPrawo?.title}
          />
        </StyledImageRightWrapper>
      </StyledRightWrapper>
    </StyledMainContainer>
  );
};

export default NotFoundPage;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query page404Query {
    wpPage(id: { eq: "cG9zdDozNTg=" }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      page404 {
        tytul
        przycisk {
          target
          title
          url
        }
        zdjeciePoPrawo {
          altText
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
