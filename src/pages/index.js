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

const IndexPage = ({ data }) => {
  return (
    <>
      <HomeHeroSection />
      <HomeCollections />
      <HomeExhibitions />
      <HomeRecommendations />
      <StyledContactWrapper>
        <HomeContact />
      </StyledContactWrapper>
      <Questions />
      <QuestionContact />
      <HomeArticles />
      <HomeCalendar />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query homePageQuerySeo {
    wpPage(id: {eq: "cG9zdDoxNQ=="}) {
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
    }
  }
`
