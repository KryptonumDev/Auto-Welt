import * as React from "react";
import { graphql } from "gatsby";

import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection";
import HomeCollections from "../components/HomeCollections/HomeCollections";
import HomeExhibitions from "../components/HomeExhibitions/HomeExhibitions";
import HomeRecommendations from "../components/HomeRecommendations/HomeRecommendations";
import HomeContact from "../components/HomeContact/HomeContact";
import Questions from "../components/Questions/Questions";
import HomeArticles from "../components/HomeArticles/HomeArticles";
import HomeCalendar from "../components/HomeCalendar/HomeCalendar";
import QuestionContact from "../components/QuestionContact/QuestionContact";

import { StyledContactWrapper } from "../components/HomeContact/StyledHomeContact";
import { StyledFooterCar } from "../components/HomeCalendar/StyledHomeCalendar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const IndexPage = ({ data }) => {
  return (
    <Wrapper>
      <HomeHeroSection />
      <HomeCollections />
      <HomeExhibitions />
      <HomeRecommendations />
      <StyledContactWrapper>
        <HomeContact />
      </StyledContactWrapper>
      {/* <HomeCalendar /> */}
      <Questions />
      {/* <QuestionContact />
      <HomeArticles />
      {data.wpPage?.homepage?.zdjecieSamochoduNadStopka?.localFile && (
        <StyledFooterCar>
          <GatsbyImage
            image={getImage(
              data.wpPage.homepage.zdjecieSamochoduNadStopka.localFile
            )}
            alt={data.wpPage.homepage.zdjecieSamochoduNadStopka.altText || " "}
            title={data.wpPage.homepage.zdjecieSamochoduNadStopka.title}
          />
        </StyledFooterCar>
      )} */}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  padding: 0 0 435px 0;

  @media only screen and (max-width: 768px) {
    padding: 0 0 185px 0;
  }

  @media only screen and (max-width: 375px) {
    padding: 0 0 150px 0;
  }
`

export default IndexPage;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query homePageQuerySeo {
    wpPage(id: {eq: "cG9zdDoxNQ=="}) {
      homepage{
        zdjecieSamochoduNadStopka {
          altText
          title
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`
