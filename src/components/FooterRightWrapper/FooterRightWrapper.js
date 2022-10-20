import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Button from "../Button/Button";
import FooterEvent from "../FooterEvent/FooterEvent";

import { StyledText } from "../Text/StyledText";
import {
  StyledFooterRightWrapper,
  StyledEventWrapper,
} from "./StyledFooterRightWrapper";

const FooterRightWrapper = ({ footerData }) => {
  const articleData = useStaticQuery(graphql`
    query articleFooter {
      allWpWystawa(limit: 3) {
        edges {
          node {
            wystawa {
              informacjeOgolne {
                tytulPodZdjeciem
                zdjecieDoMiniaturki {
                  altText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
            slug
          }
        }
      }
    }
  `);
  return (
    <StyledFooterRightWrapper>
      <StyledText
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontsize="24px"
        hasdeclaredfontweight="400"
        hasdeclaredlineheight="1.2em"
        hasdeclaredmargin="0 0 16px"
        hasdeclaredfontcolor="var(--secondary500)"
      >
        {footerData.wydarzeniaTytul && footerData.wydarzeniaTytul}
      </StyledText>
      <StyledEventWrapper>
        {articleData.allWpWystawa?.edges.map(({ node }, index) => (
          <FooterEvent
            key={index}
            articleData={node.wystawa.informacjeOgolne}
            slug={node.slug}
          />
        ))}
      </StyledEventWrapper>
      {footerData.przyciskPrzenoszacyDoTerminarza.title && (
        <Button
          text={footerData.przyciskPrzenoszacyDoTerminarza.title}
          whereGo={footerData.przyciskPrzenoszacyDoTerminarza.url}
          bgColor="var(--secondary500)"
          hasBorder="2px solid var(--secondary500)"
          hasHeight="44px"
          textColor="var(--primary900)"
          hasTarget={footerData.przyciskPrzenoszacyDoTerminarza.target}
          hasDeclaredPadding="10px 33px"
          hasFontSize="21px"
          hasdeclaredmargin="0 0 0 15px"
          hoverBgColor="var(--secondary700)"
        />
      )}
    </StyledFooterRightWrapper>
  );
};

export default FooterRightWrapper;
