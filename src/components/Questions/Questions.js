import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { AnimatePresence } from "framer-motion";

import Question from "../Question/Question";

import { StyledQuestions, StyledQuestionsWrapper } from "./StyledQuestions";
import { StyledText } from "../Text/StyledText";

const Questions = () => {
  const data = useStaticQuery(graphql`
  query faqQuery {
    wpPage(id: {eq: "cG9zdDozMw=="}) {
      globalConfig {
        faq {
          faqTutul
          faq {
            pytanie
            odpowiedz
            zdjecieTla {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            zdjecieTlaMobile {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            zdjecieTlaTablet {
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
  `)
  return (
    <StyledQuestions>
      <StyledText
        as="h2"
        hasdeclaredfontsize="48px"
        hasdeclaredtextalign="left"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="0 0 40px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {data.wpPage.globalConfig.faq.faqTutul}
      </StyledText>
      <StyledQuestionsWrapper>
        {data.wpPage.globalConfig.faq.faq.map((faq, index) => 
          (<AnimatePresence>
            <Question faqData={faq} key={index}/>
          </AnimatePresence>)
        )}
      </StyledQuestionsWrapper>
    </StyledQuestions>
  );
};

export default Questions;
