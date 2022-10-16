import React from "react";

import HomeArticles from "../components/HomeArticles/HomeArticles";

import OfferEvents from "../components/OfferEvents/OfferEvents";
import OfferHeroSection from "../components/OfferHeroSection/OfferHeroSection";
import CheckOutWithOffer from "../components/CheckOutWithOffer/CheckOutWithOffer";

const Offer = ({ data }) => {
  return (
    <>
      <OfferHeroSection />
      <OfferEvents />
      <CheckOutWithOffer />
      <HomeArticles />
    </>
  );
};

export default Offer;