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
        heroData={shortCollectionData.pierwszaSekcja}
      />
      <ThreeCollectionImages
        imagesData={shortCollectionData.trzyMaleZdjeciaModeli}
      />
      <CollectionTemplateDesc
        descData={shortCollectionData.informacjeOKolekcji}
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
          bgImage={shortCollectionData.zdjecieWZielonymProstokaciePolecajacyInnaKolekcje}
          text={shortCollectionData.tekstWZielonymProstokaciePolecajacyInnaKolekcje}
          btnText={shortCollectionData.ktoraKolekcjePolecic.title}
          btnBgColor="var(--secondary500)"
          btnColor="var(--primary900)"
          btnWhereGo={shortCollectionData.ktoraKolekcjePolecic.url}
          btnPadding="10px 32px"
          btnFontSize="21px"
          hasTarget={shortCollectionData.ktoraKolekcjePolecic.target}
          btnHoverBg="var(--secondary700)"
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
          zdjecieWZielonymProstokaciePolecajacyInnaKolekcje {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjeciePojazduPrzyczepioneDoPrawejKrawedzi {
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
            url
            title
            target
          }
          trzyZdjeciaNaSamymSpodzieStrony {
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
          tekstWZielonymProstokaciePolecajacyInnaKolekcje
          prostokatneZdjeciePodOpisem {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          ktoraKolekcjePolecic {
            url
            title
            target
          }
          informacjeOKolekcji {
            zdjecie {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            opisKolekcji
          }
          pierwszaSekcja {
            zdjecieGlowne {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            zdjecieDlaZielonegoElementuPodGlownymZdjeciem {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            trescPrzyciskuPodZdjeciemGlownym
            gdzieMaPrzenosicLinkPodZdjeciemGlownym {
              url
              title
              target
            }
          }
        }
      }
    }
  }
`;
