import * as React from "react"

import HomeHeroSection from "../components/HomeHeroSection/HomeHeroSection"
import HomeCollections from "../components/HomeCollections/HomeCollections"
import HomeExhibitions from "../components/HomeExhibitions/HomeExhibitions"

const IndexPage = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeCollections />
      <HomeExhibitions />
    </>
  )
}

export default IndexPage