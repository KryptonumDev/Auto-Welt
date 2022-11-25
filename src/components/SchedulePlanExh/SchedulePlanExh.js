/** @format */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
    StyledSchedulePlanExh,
    StyledSliderWrapper,
    StyledButtonsWrapper,
} from "./StyledSchedulePlanExh";
import ScheduleSlider from "../ScheduleSlider/ScheduleSlider";

import { areDatesEqual } from "../../utils/date";

const SchedulePlanExh = ({ dataPlan }) => {
    const data = useStaticQuery(graphql`
        query planExhibit {
            allWpWystawa(
                filter: {
                    wystawa: {
                        informacjeOgolne: {
                            czyWystawaJestAktualnaJezeliNieToJestPlanowana: {
                                eq: null
                            }
                        }
                    }
                }
            ) {
                edges {
                    node {
                        slug
                        wystawa {
                            informacjeOgolne {
                                data
                                dataZakonczenia
                                elementyListy {
                                    elementListy
                                }
                                miejsce
                                tloDlaMiejscaIDaty {
                                    altText
                                    title
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                }
                                tekstPrzyciskuPrzenoszacegoDoOdpowiednejWystawy
                                tytulPodZdjeciem
                                zdjecieDoMiniaturki {
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

    const now = new Date();

    const restoreData = data.allWpWystawa.edges
        .map((edge) => ({
            ...edge,
            date: new Date(edge.node.wystawa.informacjeOgolne.data),
            end_date: new Date(edge.node.wystawa.informacjeOgolne.dataZakonczenia),
        }))
        .filter(
            ({ end_date }) =>
                end_date.getTime() > now.getTime() || areDatesEqual(end_date, now)
        )
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    return (
        <StyledSchedulePlanExh hasmargin={restoreData.length !== 0}>
            {restoreData.length !== 0 ? (
                <>
                    <StyledText
                        hasdeclaredfontsize="48px"
                        hasdeclaredlineheight="1.2em"
                        hasdeclaredfontfamily="Nocturne Serif"
                        hasdeclaredfontcolor="#23423D"
                        hasdeclaredtextalign="center"
                        as="h2"
                    >
                        {dataPlan.tytulSekcji}
                    </StyledText>
                    <StyledSliderWrapper>
                        <ScheduleSlider
                            scheduleData={restoreData}
                            variant="green"
                        />
                    </StyledSliderWrapper>
                    <StyledButtonsWrapper>
                        <Button
                            text={dataPlan.przyciskPodSliderem.title}
                            whereGo={dataPlan.przyciskPodSliderem.url}
                            hasTarget={dataPlan.przyciskPodSliderem.target}
                            hasDeclaredPadding="8px 33px"
                            bgColor="var(--secondary500)"
                            textColor="var(--primary900)"
                            hasFontSize="21px"
                            hoverBgColor="var(--secondary700)"
                            hasBorder="2px solid transparent"
                            ariaLabel="link"
                        />
                    </StyledButtonsWrapper>
                </>
            ) : null}
        </StyledSchedulePlanExh>
    );
};

export default SchedulePlanExh;
