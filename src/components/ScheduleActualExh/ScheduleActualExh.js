/** @format */

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "../Button/Button";

import { StyledText } from "../Text/StyledText";
import {
    StyledScheduleActualExh,
    StyledSliderWrapper,
    StyledButtonsWrapper,
} from "./StyledScheduleActualExh";
import ScheduleSlider from "../ScheduleSlider/ScheduleSlider";

import { areDatesEqual } from "../../utils/date";

const ScheduleActualExh = ({ dataActual }) => {
    const data = useStaticQuery(graphql`
        query actualeExhibit {
            allWpWystawa(
                filter: {
                    wystawa: {
                        informacjeOgolne: {
                            czyWystawaJestAktualnaJezeliNieToJestPlanowana: {
                                eq: true
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
        <StyledScheduleActualExh hasmargin={restoreData.length !== 0}>
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
                        {dataActual.tytulNadSliderem ?
                            dataActual.tytulNadSliderem : null}
                    </StyledText>
                    <StyledSliderWrapper>
                        <ScheduleSlider
                            scheduleData={restoreData}
                            variant="orange"
                        />
                    </StyledSliderWrapper>
                    <StyledButtonsWrapper>
                        {dataActual.przyciskPodSliderem.title ? (
                            <Button
                                text={dataActual.przyciskPodSliderem.title}
                                whereGo={dataActual.przyciskPodSliderem.url}
                                hasTarget={
                                    dataActual.przyciskPodSliderem.target
                                }
                                textColor="var(--white)"
                                bgColor="var(--primary500)"
                                hasDeclaredPadding="8px 33px"
                                hoverBgColor="var(--primary900)"
                                hasFontSize="21px"
                                hasBorder="2px solid var(--primary500)"
                                ariaLabel="link"
                            />
                        ) : null}
                    </StyledButtonsWrapper>
                </>
            ) : null}
        </StyledScheduleActualExh>
    );
};

export default ScheduleActualExh;
