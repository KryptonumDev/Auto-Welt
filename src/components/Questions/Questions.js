import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Question from "../Question/Question";

import { StyledQuestions, StyledQuestionsWrapper } from "./StyledQuestions";
import { StyledText } from "../Text/StyledText";

const Questions = ({ isContactPage }) => {
  const data = useStaticQuery(graphql`
    query faqQuery {
      wpPage(id: { eq: "cG9zdDozMw==" }) {
        globalConfig {
          faq {
            faqTutul
            faq {
              pytanie
              odpowiedz
              zdjecieTla {
                altText
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              zdjecieTlaMobile {
                altText
                title
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              zdjecieTlaTablet {
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
  `);
  return (
    <StyledQuestions iscontactpage={isContactPage}>
      <StyledText
        as="h2"
        hasdeclaredfontsize="48px"
        hasdeclaredtextalign="left"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {data.wpPage.globalConfig.faq.faqTutul ?
          data.wpPage.globalConfig.faq.faqTutul : null}
      </StyledText>
      <StyledQuestionsWrapper>
        {data.wpPage.globalConfig?.faq?.faq.map((faq, index) => (
          <Question faqData={faq} key={index} />
        ))}
      </StyledQuestionsWrapper>
    </StyledQuestions>
  );
};

export default Questions;
