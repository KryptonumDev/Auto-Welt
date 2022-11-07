import React from "react";
import { graphql } from "gatsby";
import { getImage, withArtDirection } from "gatsby-plugin-image";

import RecInfoWithButton from "../components/RecInfoWithButton/RecInfoWithButton";
import HomeArticles from "../components/HomeArticles/HomeArticles";
import OfferEvents from "../components/OfferEvents/OfferEvents";
import OfferHeroSection from "../components/OfferHeroSection/OfferHeroSection";
import CheckOutWithOffer from "../components/CheckOutWithOffer/CheckOutWithOffer";

import { StyledReqWrapper } from "../components/Offer/StyledOffer";
import useWindowSize from "../utils/getWindowSize";

const Offer = ({ data }) => {
  const width = useWindowSize();
  const shortData = data.wpPage.oferta;
  const imageShort = data.wpPage.oferta?.zielonyElementZTekstem;
  const images = withArtDirection(
    getImage(imageShort.zdjecieTlaDesktop?.localFile),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(imageShort.zdjecieTlaMobile?.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(imageShort.zdjecieTlaTablet?.localFile),
      },
    ]
  );
  return (
    <>
      <OfferHeroSection dataOffer={shortData.sekcjaPowitalnaStrony} />
      <StyledReqWrapper>
        <RecInfoWithButton
          text={shortData.zielonyElementZTekstem?.tekst}
          btnText={shortData.zielonyElementZTekstem.przycisk?.title}
          btnWhereGo={shortData.zielonyElementZTekstem.przycisk?.url}
          hasTarget={shortData.zielonyElementZTekstem.przycisk?.target}
          btnPadding={width < 500 ? "10px 12px" : "10px 33px"}
          btnBgColor="var(--secondary500)"
          btnColor="var(--primary900)"
          bgImage={images}
          isMoveLeft={true}
          btnFontSize="21px"
          btnHoverBg="var(--secondary700)"
        />
      </StyledReqWrapper>
      <OfferEvents dataEvents={shortData.sekcjaZWydarzeniami} />
      <CheckOutWithOffer
        dataOffer={shortData.sekcjaZapoznajSieZNaszymKatalogiem}
      />
      <HomeArticles
        isCollectionsModelPage
        buttonData={shortData.sekcjaZArtykulami.daneDoPrzycisku}
      />
    </>
  );
};

export default Offer;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query ofertaQueryPage {
    wpPage(id: { eq: "cG9zdDo5OTA=" }) {
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
      oferta {
        sekcjaZWydarzeniami {
          przyciskPoLewo {
            title
            target
            url
          }
          przyciskPoPrawo {
            target
            title
            url
          }
          tekstPodTytulem
          tytul
        }
        sekcjaZapoznajSieZNaszymKatalogiem {
          przyciskPoLewo {
            target
            title
            url
          }
          tekstDoPobraniaTekstu{
            link
          }
          tytul
          zdjecieKsiazki {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        zielonyElementZTekstem {
          tekst
          przycisk {
            target
            title
            url
          }
          zdjecieTlaDesktop {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaTablet {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        sekcjaZArtykulami {
          daneDoPrzycisku {
            target
            title
            url
          }
        }
        sekcjaPowitalnaStrony {
          tytulPoPrawo
          trzecieZdjeciePoLewo {
            altText
            title
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
          pierwszeZdjeciePoLewo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          opis
          drugieZdjeciePoLewo {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloDesktopDlaOpisu {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloMobileDlaOpisu {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloTabletDlaOpisu {
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
  }
`;
