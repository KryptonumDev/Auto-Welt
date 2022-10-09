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

const IndexPage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeCollections />
      <HomeExhibitions />
      <HomeRecommendations />
      <HomeContact />
      <Questions />
      <QuestionContact />
      <HomeArticles />
      <HomeCalendar />
    </>
  );
};

export default IndexPage;
