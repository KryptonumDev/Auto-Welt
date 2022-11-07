import React from "react";
import { graphql } from "gatsby";

import ScheduleHeroSection from "../components/ScheduleHeroSection/ScheduleHeroSection";
import ScheduleActualExh from "../components/ScheduleActualExh/ScheduleActualExh";
import SchedulePlanExh from "../components/SchedulePlanExh/SchedulePlanExh";
import ScheduleArchExh from "../components/ScheduleArchExh/ScheduleArchExh";

const Shedule = ({ data }) => {
  const shortData = data.wpPage.terminarz;
  
  return (
    <>
      <ScheduleHeroSection heroData={shortData.sekcjaPowitalna} />
      <ScheduleActualExh dataActual={shortData.wystawyAktualne} />
      <SchedulePlanExh dataPlan={shortData.wystawyPlanowane} />
      <ScheduleArchExh dataArch={shortData.wystawyArchiwalne} />
    </>
  );
};

export default Shedule;

export { Head } from "../components/Head/Head"

export const query = graphql`
  query scheduleQuery {
    wpPage(id: { eq: "cG9zdDoxMDk1" }) {
      seo {
        canonical
        metaDesc
        opengraphSiteName
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      terminarz {
        sekcjaPowitalna {
          powitalneZdjecieMobile {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          powitalneZdjecieTablet {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          tekstNaTlePowitalnegoZdjecia
          tloDlaTekstuNaTlePowitalnegoZdjecia {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          powitalneZdjecieDesktop {
            altText
            title
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        wystawyAktualne {
          tytulNadSliderem
          przyciskPodSliderem {
            target
            title
            url
          }
        }
        wystawyArchiwalne {
          lewyPrzyciskPodSliderem
          prawyPrzyciskPodSliderem {
            target
            title
            url
          }
          tytulNadSliderem
        }
        wystawyPlanowane {
          przyciskPodSliderem {
            target
            title
            url
          }
          tytulSekcji
        }
      }
    }
  }
`;
