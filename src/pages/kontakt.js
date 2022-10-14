import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import GoogleMapsContact from "../components/GoogleMapsContact/GoogleMapsContact";
import ContactPageForm from "../components/ContactPageForm/ContactPageForm";
import Questions from "../components/Questions/Questions";
import Button from "../components/Button/Button";
 
import { 
  StyledContact,
  StyledDesc,
  StyledBigImage,
  StyledButtonsWrapper,
  StyledBottomSection
} from "../components/Contact/StyledContact"
import { StyledText } from "../components/Text/StyledText";
import useWindowSize from "../utils/getWindowSize";

const Contact = ({ data }) => {
  const width = useWindowSize();
  return (
    <StyledContact>
      <StyledText
        as="h1"
        hasdeclaredfontsize="clamp(24px, 48px, 60px)"
        hasdeclaredfontcolor="var(--primary500)"
        hasdeclaredmargin="45px 0 30px"
        hasdeclaredfontfamily="Nocturne Serif"
      >
        {data.wpPage.kontakt.pierwszaSekcja.pierwszyDuzyTekst}
      </StyledText>
      <StyledDesc>
        {parse(data.wpPage.kontakt.pierwszaSekcja.opisPodPierwszymTekstem)}
      </StyledDesc>
      {/* <ContactPageForm /> */}
      <GoogleMapsContact mapData={data.wpPage.kontakt.mapa}/>
      <Questions />
      <StyledBottomSection>
        <StyledBigImage>
          <GatsbyImage
            image={getImage(data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.duzejZdjecie.localFile)}
            alt={data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.duzejZdjecie.altText}
          />
        </StyledBigImage>
        <StyledButtonsWrapper>
          <Button
            whereGo={data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoLewo.url}
            text={data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoLewo.title}
            bgColor="var(--creamBg)"
            hasBorder="2px solid var(--primary500)"
            textColor="var(--primary500)"
            hasDeclaredPadding="10px 41px"
            hasFontSize={width < 376 ? "15px" : "21px"}
            hasTarget={data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoLewo.target}
          />
          <Button
            whereGo={data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoPrawo.url}
            text={data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoPrawo.title}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="10px 41px"
            hasFontSize={width < 376 ? "15px" : "21px"}
            hasTarget={data.wpPage.kontakt.sekcjaOTerminarzuNaDoleStrony.linkPoPrawo.target}
            hoverBgColor="var(--primary900)"
          />
        </StyledButtonsWrapper>
      </StyledBottomSection>
    </StyledContact>
  );
};

export default Contact;

export const query = graphql`
query contactQuery {
  wpPage(id: {eq: "cG9zdDo1NzM="}) {
    kontakt {
      mapa {
        langtitude
        longtitude
        tytulNadMapka
      }
      pierwszaSekcja {
        tytulFormularza
        pierwszyDuzyTekst
        opisPodPierwszymTekstem
        zdjecieDlaFormularza {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      sekcjaOTerminarzuNaDoleStrony {
        linkPoPrawo {
          target
          title
          url
        }
        linkPoLewo {
          target
          title
          url
        }
        duzejZdjecie {
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
`