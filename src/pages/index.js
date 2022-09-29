import * as React from "react"

import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection"
import HomeCollections from "../components/HomeCollections/HomeCollections"
import HomeExhibitions from "../components/HomeExhibitions/HomeExhibitions"
import HomeRecommendations from "../components/HomeRecommendations/HomeRecommendations"
import HomeContact from "../components/HomeContact/HomeContact"

const IndexPage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeCollections />
      <HomeExhibitions />
      <HomeRecommendations />
      <HomeContact />
    </>
  )
}

export default IndexPage