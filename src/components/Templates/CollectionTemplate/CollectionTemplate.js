import React from "react";
import { graphql } from "gatsby";

import CollectionTemplateHeroImage from "../../CollectionTemplateHeroImage/CollectionTemplateHeroImage";
import ThreeCollectionImages from "../../ThreeCollectionImages/ThreeCollectionImages";
import CollectionTemplateDesc from "../../CollectionTemplateDesc/CollectionTemplateDesc";
import CollectionImageUnderDescImages from "../../CollectionImageUnderDescImages/CollectionImageUnderDescImages";
import CollectionElementSlider from "../../CollectionElementSlider/CollectionElementSlider";
import RecInfoWithButton from "../../RecInfoWithButton/RecInfoWithButton";
import CollectionElementThreeImages from "../../CollectionElementThreeImages/CollectionElementThreeImages";

const CollectionTemplate = ({ data }) => {
  const shortCollectionData = data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji;
  return (
    <>
      <CollectionTemplateHeroImage
        heroData={shortCollectionData}
      />
      <ThreeCollectionImages
        imagesData={shortCollectionData.trzyMaleZdjeciaModeli}
      />
      <CollectionTemplateDesc
        descData={shortCollectionData}
      />
      <CollectionImageUnderDescImages
        imagesData={shortCollectionData}
      />
      <CollectionElementSlider
        imagesData={shortCollectionData.zdjeciaDoSlidera}
      />
      {shortCollectionData
        .ktoraKolekcjePolecic && (
        <RecInfoWithButton
          text={shortCollectionData.tekstWZielonymProstokaciePolecajacyInnaKolekcje}
          btnText={shortCollectionData.ktoraKolekcjePolecic.title}
          btnBgColor="var(--secondary500)"
          btnColor="var(--primary900)"
          btnWhereGo={shortCollectionData.ktoraKolekcjePolecic.url}
          btnPadding="10px 32px"
          btnFontSize="21px"
          hasTarget={shortCollectionData.ktoraKolekcjePolecic.target}
        />
      )}
      {shortCollectionData
        .trzyZdjeciaNaSamymSpodzieStrony && (
        <CollectionElementThreeImages
          imagesData={shortCollectionData.trzyZdjeciaNaSamymSpodzieStrony}
          linkData={shortCollectionData.wszystkieKolekcjieLink}
        />
      )}
    </>
  );
};

export default CollectionTemplate;

export const query = graphql`
  query kolekcja($kolekcjaId: String) {
    wpKolekcje(id: { eq: $kolekcjaId }) {
      kolekcja {
        dedykowanaStronaDlaKolekcji {
          gdzieMaPrzenosicLinkPodZdjeciemGlownym {
            target
            title
            url
          }
          informacjeOKolekcji {
            opisKolekcji
            zdjecie {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          ktoraKolekcjePolecic {
            target
            title
            url
          }
          prostokatneZdjeciePodOpisem {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tekstWZielonymProstokaciePolecajacyInnaKolekcje
          trescPrzyciskuPodZdjeciemGlownym
          zdjeciePojazduPrzyczepioneDoPrawejKrawedzi {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
            altText
          }
          zdjecieGlowne {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjeciaDoSlidera {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          wszystkieKolekcjieLink {
            target
            title
            url
          }
          trzyZdjeciaNaSamymSpodzieStrony {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          trzyMaleZdjeciaModeli {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        informacjeGlowne {
          nazwaKolekcji
        }
      }
    }
  }
`;
