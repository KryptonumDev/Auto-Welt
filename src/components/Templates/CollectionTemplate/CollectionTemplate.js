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
  return (
    <>
      <CollectionTemplateHeroImage
        heroData={data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji}
      />
      <ThreeCollectionImages
        imagesData={
          data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
            .trzyMaleZdjeciaModeli
        }
      />
      <CollectionTemplateDesc
        descData={data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji}
      />
      <CollectionImageUnderDescImages
        imagesData={data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji}
      />
      <CollectionElementSlider
        imagesData={
          data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji.zdjeciaDoSlidera
        }
      />
      {data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
        .ktoraKolekcjePolecic && (
        <RecInfoWithButton
          text={
            data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
              .tekstWZielonymProstokaciePolecajacyInnaKolekcje
          }
          btnText={
            data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
              .ktoraKolekcjePolecic.title
          }
          btnBgColor="var(--secondary500)"
          btnColor="var(--primary900)"
          btnWhereGo={
            data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
              .ktoraKolekcjePolecic.url
          }
          btnPadding="10px 32px"
          btnFontSize="21px"
          hasTarget={
            data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
              .ktoraKolekcjePolecic.target
          }
        />
      )}
      {data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
        .trzyZdjeciaNaSamymSpodzieStrony && (
        <CollectionElementThreeImages
          imagesData={
            data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
              .trzyZdjeciaNaSamymSpodzieStrony
          }
          linkData={
            data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji
              .wszystkieKolekcjieLink
          }
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
