import React from "react";
import { graphql } from "gatsby";

import AboutMeHeroSection from "../components/AboutMeHeroSection/AboutMeHeroSection"
import AboutMeSecondSection from "../components/AboutMeSecondSection/AboutMeSecondSection"
import AboutMeImagesSection from "../components/AboutMeImagesSection/AboutMeImagesSection"
import HomeRecommendations  from "../components/HomeRecommendations/HomeRecommendations"
import HomeExhibitions from "../components/HomeExhibitions/HomeExhibitions"

const AboutMe = ({ data }) => {
  return <>
    <AboutMeHeroSection heroData={data.wpPage.oMnie.pierwszaSekcja} />
    <AboutMeSecondSection secondData={data.wpPage.oMnie.drugaSekcja} />
    <AboutMeImagesSection imagesData={data.wpPage.oMnie.trzeciaSekcja} />
    <HomeRecommendations />
    <HomeExhibitions />
  </>;
};

export default AboutMe;

export const query = graphql`
query AboutMeQuery {
  wpPage(id: {eq: "cG9zdDo0Nzc="}) {
    oMnie {
      drugaSekcja {
        drugieZdjeciePoPrawo {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        lewyPrzycisk {
          target
          title
          url
        }
        opis
        prawyPrzycisk{
          target
          title
          url
        }
        pierwszeZdjeciePoPrawo {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tekstWZielonymElemencie
        tytul
        zdjecieDlaZielonegoElementuPodOpisem {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      pierwszaSekcja {
        opis
        opisPodCzesc
        drugieZdjecie {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        pierwszeZdjecie {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        plasterNadDrugimZdjeciem {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        plasterNadPierwszymZdjeciem {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        tytul
        przyciskPodOpisem {
          target
          title
          url
        }
      }
      trzeciaSekcja {
        ikonkaAparatu {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        linkPrzyIkonceAparatu {
          target
          title
          url
        }
        tekstPrzyIkonceAparatu
        trzyZdjecia {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecieSamochoduPrzyczepioneDoPrawejKrawedziStrony {
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
}

`