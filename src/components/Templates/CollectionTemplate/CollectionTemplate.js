import React from "react";
import { graphql } from "gatsby";
import { getImage, withArtDirection } from "gatsby-plugin-image";

import CollectionTemplateHeroImage from "../../CollectionTemplateHeroImage/CollectionTemplateHeroImage";
import ThreeCollectionImages from "../../ThreeCollectionImages/ThreeCollectionImages";
import CollectionTemplateDesc from "../../CollectionTemplateDesc/CollectionTemplateDesc";
import CollectionImageUnderDescImages from "../../CollectionImageUnderDescImages/CollectionImageUnderDescImages";
import CollectionElementSlider from "../../CollectionElementSlider/CollectionElementSlider";
import RecInfoWithButton from "../../RecInfoWithButton/RecInfoWithButton";
import CollectionElementThreeImages from "../../CollectionElementThreeImages/CollectionElementThreeImages";
import { StyledCollectionTemplate } from "./StyledCollectionTemplate";

const CollectionTemplate = ({ data }) => {
  const shortCollectionData = data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji;

  const images = withArtDirection(getImage(shortCollectionData.zdjecieWZielonymProstokaciePolecajacyInnaKolekcje.localFile), [
    {
      media: "(max-width: 375px)",
      image: getImage(shortCollectionData.zdjecieMobileWZielonymProstokaciePolecajacyInnaKolekcje.localFile),
    },
    {
      media: "(max-width: 768px)",
      image: getImage(shortCollectionData.zdjecieTabletWZielonymProstokaciePolecajacyInnaKolekcje.localFile),
    }
  ])
  return (
    <StyledCollectionTemplate>
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
      {(shortCollectionData
        .ktoraKolekcjePolecic && images) && (
        <RecInfoWithButton
          bgImage={images}
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
    </StyledCollectionTemplate>
  );
};

export default CollectionTemplate;

export const query = graphql`
query kolekcja($kolekcjaId: String) {
  wpKolekcje(id: {eq: $kolekcjaId}) {
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
          altText
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
          kolorowyTytulNaZieloneTlo
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
          gdzieMaPrzenosicLinkPodZdjeciemGlownym {
            url
            title
            target
          }
        }
        zdjecieMobileWZielonymProstokaciePolecajacyInnaKolekcje {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecieTabletWZielonymProstokaciePolecajacyInnaKolekcje {
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
