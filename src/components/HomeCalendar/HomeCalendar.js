import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

import CalendarComponent from "../CalendarComponent/CalendarComponent";

import { StyledHomeCalendar, StyledFooterCar } from "./StyledHomeCalendar";
import { StyledText } from "../Text/StyledText";

const HomeCalendar = () => {
    return (
        <StyledHomeCalendar>
            <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredtextalign="center"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="0 0 40px"
                hasdeclaredfontfamily="Nocturne Serif"
            >
                Zobacz nasze wystawy:
            </StyledText>
            <CalendarComponent />
            <StyledFooterCar>
                <StaticImage
                    placeholder="blurred"
                    src="../../images/footerCar.png"
                    alt="A dinosaur"
                />
            </StyledFooterCar>
        </StyledHomeCalendar>
    );
}

export default HomeCalendar
