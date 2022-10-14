import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  StyledQuestionContact,
  StyledInfoWrapper,
  StyledImageContactWrapper,
  StyledImageInfoWrapper
} from "./StyledQuestionContact";
import { StyledText } from "../Text/StyledText";

const QuestionContact = () => {
  const data = useStaticQuery(graphql`
    query questionContactQuery {
      wpPage(id: {eq: "cG9zdDoxNQ=="}) {
        homepage {
          sekcjaSkontaktujSieZeMna {
            zdjecieTla {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            tloWProstokacie {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            tekstWProstokacie
            linkWPrzycisku {
              target
              title
              url
            }
          }
        }
      }
    }
  `)
  return (
    <StyledQuestionContact>
      <StyledImageContactWrapper>
        <GatsbyImage
          image={getImage(data.wpPage.homepage.sekcjaSkontaktujSieZeMna.zdjecieTla.localFile)}
          alt={data.wpPage.homepage.sekcjaSkontaktujSieZeMna.zdjecieTla.altText}
        />
      </StyledImageContactWrapper>
      <StyledInfoWrapper>
        <StyledImageInfoWrapper>
          <GatsbyImage
            image={getImage(data.wpPage.homepage.sekcjaSkontaktujSieZeMna.tloWProstokacie.localFile)}
            alt={data.wpPage.homepage.sekcjaSkontaktujSieZeMna.tloWProstokacie.altText}
            objectFit="fill"
          />
        </StyledImageInfoWrapper>
        <StyledText
          hasdeclaredfontsize="18px"
          hasdeclaredfontweight= "600"
          hasdeclaredlineheight="1.2em"
          hasdeclaredfontcolor="var(--primary500)"
          hasdeclaredtextalign="center"
        >
          {data.wpPage.homepage.sekcjaSkontaktujSieZeMna.tekstWProstokacie}
        </StyledText>
        <Button
          whereGo={data.wpPage.homepage.sekcjaSkontaktujSieZeMna.linkWPrzycisku.url}
          text={data.wpPage.homepage.sekcjaSkontaktujSieZeMna.linkWPrzycisku.title}
          bgColor="var(--secondary500)"
          hasBorder="2px solid var(--secondary500)"
          hasHeight="44px"
          textColor="var(--primary900)"
          hasTarget={data.wpPage.homepage.sekcjaSkontaktujSieZeMna.linkWPrzycisku.target}
          hasDeclaredPadding="10px 33px"
          hasFontSize="21px"
        />
      </StyledInfoWrapper>
    </StyledQuestionContact>
  );
};

export default QuestionContact;
