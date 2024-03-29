import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FooterCenterWrapperArticle from "../FooterCenterWrapperArticle/FooterCenterWrapperArticle";

import {
  StyledFooterCenterWrapper,
  StyledFastLinks,
  StyledArticlesWrapper,
} from "./StyledFooterCenterWrapper";
import { StyledText } from "../Text/StyledText";
import { StyledLink } from "../Link/StyledLink";

const FooterCenterWrapper = ({ footerData }) => {
  const articleQuery = useStaticQuery(graphql`
    query footerArticle {
      allWpArtykul(limit: 2) {
        edges {
          node {
            slug
            title
            artykul {
              informacjeDoMiniaturki {
                miniaturka {
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
      }
    }
  `);
  return (
    <StyledFooterCenterWrapper>
      <div>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="500"
          hasdeclaredlineheight="1.2em"
          hasdeclaredmargin="0 0 16px"
          hasdeclaredfontcolor="var(--secondary500)"
        >
          {footerData.szybkieLinkiTytul ? footerData.szybkieLinkiTytul : null}
        </StyledText>
        <StyledFastLinks>
          <StyledLink
            to="/kolekcje-modeli"
            hasdeclaredmargin="0 19px 0 0"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            aria-label="przejdz do podstrony"
          >
            Kolekcje modeli
          </StyledLink>
          <StyledLink
            to="/sklep"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            hasdeclaredmargin="0 30px 0 0"
            aria-label="przejdz do podstrony"
          >
            Sklep
          </StyledLink>
          <StyledLink
            to="/o-mnie"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            aria-label="przejdz do podstrony"
          >
            O mnie
          </StyledLink>
          <StyledLink
            to="/oferta"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"           
            aria-label="przejdz do podstrony"
          >
            Oferta
          </StyledLink>
          <StyledLink
            to="/terminarz"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            aria-label="przejdz do podstrony"
          >
            Terminarz
          </StyledLink>
          <StyledLink
            to="/artykuly"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            aria-label="przejdz do podstrony"
          >
            Blog
          </StyledLink>
          <StyledLink
            to="/kontakt"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            aria-label="przejdz do podstrony"
          >
            Kontakt
          </StyledLink>
          <StyledLink
            to="/regulamin-sklepu"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            aria-label="przejdz do podstrony"
          >
            Regulamin sklepu
          </StyledLink>
          <StyledLink
            to="/polityka-prywatnosci"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="500"
            activeClassName="activeLink"
            hasdeclaredlineheight="1.2em"
            aria-label="przejdz do podstrony"
          >
            Polityka prywatności
          </StyledLink>
        </StyledFastLinks>
      </div>
      <div>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="500"
          hasdeclaredlineheight="1.2em"
          hasdeclaredmargin="42px 0 16px"
          hasdeclaredfontcolor="var(--secondary500)"
        >
          Artykuły
        </StyledText>
        <StyledArticlesWrapper>
          {articleQuery.allWpArtykul?.edges.map(({ node }, index) => (
            <FooterCenterWrapperArticle
              key={index}
              articleData={node.artykul}
              slug={node.slug}
              title={node.title}
            />
          ))}
        </StyledArticlesWrapper>
      </div>
    </StyledFooterCenterWrapper>
  );
};

export default FooterCenterWrapper;
