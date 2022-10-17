import React from "react";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import styled from "styled-components";

import AboutMeHeroSection from "../components/AboutMeHeroSection/AboutMeHeroSection"
import AboutMeSecondSection from "../components/AboutMeSecondSection/AboutMeSecondSection"
import AboutMeImagesSection from "../components/AboutMeImagesSection/AboutMeImagesSection"
import HomeRecommendations  from "../components/HomeRecommendations/HomeRecommendations"
import HomeExhibitions from "../components/HomeExhibitions/HomeExhibitions"

const StyledAboutMe = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`
const AboutMe = ({ data }) => {
  const imageShort = data.wpPage.oMnie.drugaSekcja;
  const images = withArtDirection(getImage(imageShort.zdjecieDlaZielonegoElementuPodOpisem.localFile), [
    {
      media: "(max-width: 375px)",
      image: getImage(imageShort.zdjecieMobileDlaZielonegoElementuPodOpisem.localFile),
    },
    {
      media: "(max-width: 768px)",
      image: getImage(imageShort.zdjecieTabletDlaZielonegoElementuPodOpisem.localFile),
    }
  ])
  return (
    <StyledAboutMe>
      <AboutMeHeroSection heroData={data.wpPage.oMnie.pierwszaSekcjaStrony} />
      <AboutMeSecondSection secondData={data.wpPage.oMnie.drugaSekcja} images={images} />
      <AboutMeImagesSection imagesData={data.wpPage.oMnie.trzeciaSekcja} />
      <HomeRecommendations isAboutPage />
      <HomeExhibitions isAboutPage />
    </StyledAboutMe>
  );
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
        prawyPrzycisk {
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
        zdjecieMobileDlaZielonegoElementuPodOpisem {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecieTabletDlaZielonegoElementuPodOpisem {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      trzeciaSekcja {
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
      pierwszaSekcjaStrony {
        zielonyOpisPodTytulem
        tytul
        opis
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
        przyciskPodOpisem {
          target
          title
          url
        }
      }
    }
  }
}
`