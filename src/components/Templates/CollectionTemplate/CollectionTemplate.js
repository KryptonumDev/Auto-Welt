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
  const shortCollectionData =
    data.wpKolekcje.kolekcja.dedykowanaStronaDlaKolekcji;

  const images = withArtDirection(
    getImage(
      shortCollectionData.zdjecieWZielonymProstokaciePolecajacyInnaKolekcje
        .localFile
    ),
    [
      {
        media: "(max-width: 375px)",
        image: getImage(
          shortCollectionData
            .zdjecieMobileWZielonymProstokaciePolecajacyInnaKolekcje.localFile
        ),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(
          shortCollectionData
            .zdjecieTabletWZielonymProstokaciePolecajacyInnaKolekcje.localFile
        ),
      },
    ]
  );
  
  return (
    <div style={{ maxWidth: "1440", margin: "0 auto", overflow: "hidden" }}>
      <StyledCollectionTemplate>
        <CollectionTemplateHeroImage
          heroData={shortCollectionData.pierwszaSekcja}
        />
        <ThreeCollectionImages
          imagesData={shortCollectionData.trzyMaleZdjeciaModeli}
        />
        <CollectionTemplateDesc descData={shortCollectionData} />
        <CollectionImageUnderDescImages imagesData={shortCollectionData} />
        <CollectionElementSlider
          imagesData={shortCollectionData.zdjeciaDoSlidera}
        />
        {shortCollectionData.ktoraKolekcjePolecic && images ? (
          <RecInfoWithButton
            bgImage={images}
            text={
              shortCollectionData.tekstWZielonymProstokaciePolecajacyInnaKolekcje
            }
            btnText={shortCollectionData.ktoraKolekcjePolecic.title}
            btnBgColor="var(--secondary500)"
            btnColor="var(--primary900)"
            btnWhereGo={shortCollectionData.ktoraKolekcjePolecic.url}
            btnPadding={"10px 33px"}
            btnFontSize="21px"
            hasTarget={shortCollectionData.ktoraKolekcjePolecic.target}
            btnHoverBg="var(--secondary700)"
          />
        ) : null}
        {shortCollectionData.trzyZdjeciaNaSamymSpodzieStrony ? (
          <CollectionElementThreeImages
            imagesData={shortCollectionData.trzyZdjeciaNaSamymSpodzieStrony}
            linkData={shortCollectionData.wszystkieKolekcjieLink}
          />
        ) : null}
      </StyledCollectionTemplate>
    </div>
  );
};

export default CollectionTemplate;

export { Head } from "../../Head/Head"

export const query = graphql`
  query kolekcja($kolekcjaId: String) {
    wpKolekcje(id: { eq: $kolekcjaId }) {
      kolekcja {
        dedykowanaStronaDlaKolekcji {
          zdjecieWZielonymProstokaciePolecajacyInnaKolekcje {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjeciePojazduPrzyczepioneDoPrawejKrawedzi {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjeciaDoSlidera {
            altText
            title
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
            title
          }
          trzyMaleZdjeciaModeli {
            altText
            title
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
          pierwszaSekcja {
            kolorowyTytulNaZieloneTlo
            zdjecieGlowne {
              altText
              title
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            zdjecieDlaZielonegoElementuPodGlownymZdjeciem {
              altText
              title
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
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          zdjecieTabletWZielonymProstokaciePolecajacyInnaKolekcje {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          opisKolekcji
          zdjecieObokOpisu {
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
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphUrl
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`;
