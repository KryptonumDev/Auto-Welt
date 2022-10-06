import React from 'react'
import { graphql } from "gatsby"

import CollectionTemplateHeroImage from '../../CollectionTemplateHeroImage/CollectionTemplateHeroImage'
import ThreeCollectionImages from "../../ThreeCollectionImages/ThreeCollectionImages"
import CollectionTemplateDesc from '../../CollectionTemplateDesc/CollectionTemplateDesc'
import CollectionImageUnderDescImages from '../../CollectionImageUnderDescImages/CollectionImageUnderDescImages'
import CollectionElementSlider from "../../CollectionElementSlider/CollectionElementSlider"
import RecInfoWithButton from "../../RecInfoWithButton/RecInfoWithButton"
import CollectionElementThreeImages from "../../CollectionElementThreeImages/CollectionElementThreeImages"

const CollectionTemplate = ({ data: { wpKolekcje } }) => {
  return (
    <>
        <CollectionTemplateHeroImage heroData={wpKolekcje.kolekcja}/>
        <ThreeCollectionImages imagesData={wpKolekcje.kolekcja.trzyMaleZdjeciaModeli} />
        <CollectionTemplateDesc descData={wpKolekcje.kolekcja} />
        <CollectionImageUnderDescImages imagesData={wpKolekcje.kolekcja} />
        <CollectionElementSlider imagesData={wpKolekcje.kolekcja.zdjeciaDoSlidera} />
        <RecInfoWithButton 
            text={wpKolekcje.kolekcja.tekstWZielonymProstokaciePolecajacyInnaKolekcje}
            btnText={wpKolekcje.kolekcja.ktoraKolekcjePolecic.title}
            btnBgColor="var(--secondary500)"
            btnColor="var(--primary900)"
            btnWhereGo={wpKolekcje.kolekcja.ktoraKolekcjePolecic.url}
            btnPadding="10px 32px"
            btnFontSize="21px"
        />
        <CollectionElementThreeImages 
            imagesData={wpKolekcje.kolekcja.trzyZdjeciaNaSamymSpodzieStrony} 
            linkData={wpKolekcje.kolekcja.wszystkieKolekcjieLink}
        />
    </>
  )
}

export default CollectionTemplate

export const query = graphql`
query kolekcja($kolekcjaId: String) {
    wpKolekcje(id: {eq: $kolekcjaId}) {
      kolekcja {
        nazwaKolekcji
        opisKolekcji
        tekstWZielonymProstokaciePolecajacyInnaKolekcje
        trescPrzyciskuPodZdjeciemGlownym
        trescPrzyciskuPrzenoszacegoDoStronyKolekcji
        duzaMiniaturka {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        gdzieMaPrzenosicLinkPodZdjeciemGlownym {
          title
          url
          target
        }
        ktoraKolekcjePolecic {
          title
          url
          target
        }
        miniaturka {
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
        zdjecieGlowne {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjecie {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        zdjeciaDoSlidera {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        wszystkieKolekcjieLink {
          title
          url
          target
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
        prostokatneZdjeciePodOpisem {
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
`