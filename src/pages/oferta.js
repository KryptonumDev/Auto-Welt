import React from "react";
import { graphql } from "gatsby";
import { getImage, withArtDirection } from "gatsby-plugin-image";

import RecInfoWithButton from "../components/RecInfoWithButton/RecInfoWithButton";
import HomeArticles from "../components/HomeArticles/HomeArticles";
import OfferEvents from "../components/OfferEvents/OfferEvents";
import OfferHeroSection from "../components/OfferHeroSection/OfferHeroSection";
import CheckOutWithOffer from "../components/CheckOutWithOffer/CheckOutWithOffer";

import { StyledReqWrapper } from "../components/Offer/StyledOffer";

const Offer = ({ data }) => {
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
          btnPadding="10px 33px"
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
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaMobile {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTlaTablet {
            altText
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
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          opis
          drugieZdjeciePoLewo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloDesktopDlaOpisu {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloMobileDlaOpisu {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tloTabletDlaOpisu {
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
`;
