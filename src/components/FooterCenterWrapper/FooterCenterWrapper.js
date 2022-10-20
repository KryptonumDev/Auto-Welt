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
            artykul {
              informacjeDoMiniaturki {
                tytul
                miniaturka {
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
      }
    }
  `);
  return (
    <StyledFooterCenterWrapper>
      <div>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="400"
          hasdeclaredlineheight="1.2em"
          hasdeclaredmargin="0 0 16px"
          hasdeclaredfontcolor="var(--secondary500)"
        >
          {footerData.szybkieLinkiTytul && footerData.szybkieLinkiTytul}
        </StyledText>
        <StyledFastLinks>
          <StyledLink
            to="/kolekcje-modeli"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Kolekcje modeli
          </StyledLink>
          <StyledLink
            to="/sklep"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Sklep
          </StyledLink>
          <StyledLink
            to="/o-mnie"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            O mnie
          </StyledLink>
          <StyledLink
            to="/oferta"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Oferta
          </StyledLink>
          <StyledLink
            to="/terminarz"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Terminarz
          </StyledLink>
          <StyledLink
            to="/artykuly"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Blog
          </StyledLink>
          <StyledLink
            to="/kontakt"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Kontakt
          </StyledLink>
          <StyledLink
            to="/regulamin-wystaw"
            hasdeclaredmargin="0 35px 10px 0"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Regulamin wystaw
          </StyledLink>
          <StyledLink
            to="/polityka-prywatnosci"
            hasdeclaredmargin="0 0 10px"
            hasdeclaredfontcolor="var(--creamText)"
            hasdeclaredfontsize="16px"
            hasdeclaredtextdecoration="default"
            hasdeclaredfontweight="400"
            activeClassName="activeLink"
          >
            Polityka prywatności
          </StyledLink>
        </StyledFastLinks>
      </div>
      <div>
        <StyledText
          hasdeclaredfontfamily="Nocturne Serif"
          hasdeclaredfontsize="24px"
          hasdeclaredfontweight="400"
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
            />
          ))}
        </StyledArticlesWrapper>
      </div>
    </StyledFooterCenterWrapper>
  );
};

export default FooterCenterWrapper;
