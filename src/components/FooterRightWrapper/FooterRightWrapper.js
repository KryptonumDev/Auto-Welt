import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Button from "../Button/Button";
import FooterEvent from "../FooterEvent/FooterEvent";

import { StyledText } from "../Text/StyledText";
import {
  StyledFooterRightWrapper,
  StyledEventWrapper,
} from "./StyledFooterRightWrapper";

import { areDatesEqual } from "../../utils/date";

const FooterRightWrapper = ({ footerData }) => {
  const articleData = useStaticQuery(graphql`
    query articleFooter {
      allWpWystawa {
        edges {
          node {
            wystawa {
              informacjeOgolne {
                data
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

  const now = new Date();

  return (
    <StyledFooterRightWrapper>
      <StyledText
        hasdeclaredfontfamily="Nocturne Serif"
        hasdeclaredfontsize="24px"
        hasdeclaredfontweight="500"
        hasdeclaredlineheight="1.2em"
        hasdeclaredmargin="0 0 16px"
        hasdeclaredfontcolor="var(--secondary500)"
      >
        {footerData.wydarzeniaTytul && footerData.wydarzeniaTytul}
      </StyledText>
      <StyledEventWrapper>
        {articleData.allWpWystawa?.edges
          .map(({ node }) => ({
            ...node,
            wystawa: {
              ...node.wystawa,
              informacjeOgolne: {
                ...node.wystawa.informacjeOgolne,
                data: new Date(node.wystawa.informacjeOgolne.data),
              },
            },
          }))
          .sort(
            (a, b) =>
              new Date(a.wystawa.informacjeOgolne.data).getTime() -
              new Date(b.wystawa.informacjeOgolne.data).getTime()
          )
          .filter(
            ({ wystawa }) =>
              wystawa.informacjeOgolne.data.getTime() > now.getTime() ||
              areDatesEqual(wystawa.informacjeOgolne.data, now)
          )
          .slice(0, 3)
          .map((node, index) => (
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
          hasDeclaredPadding="8px 33px"
          hasFontSize="21px"
          hasdeclaredmargin="0 0 0 15px"
          hoverBgColor="var(--secondary700)"
        />
      )}
    </StyledFooterRightWrapper>
  );
};

export default FooterRightWrapper;
