import * as React from "react";

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

const IndexPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
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
    </div>
  );
};

export default IndexPage;
