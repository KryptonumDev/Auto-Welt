import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import HomeContactForm from "../HomeContactForm/HomeContactForm";

import {
    StyledHomeContact,
    StyledLeftWrapper,
    StyledRightWrapper,
    StyledHeading,
    StyledModel,
} from "./StyledHomeContact";
import { StyledText } from "../Text/StyledText";

const HomeContact = () => {
    return (
        <StyledHomeContact>
            <StyledLeftWrapper>
                <StyledModel>
                    <StaticImage
                        placeholder="blurred"
                        src="../../images/ContactCar.png"
                        alt="A dinosaur"
                    />
                </StyledModel>
            </StyledLeftWrapper>
            <StyledRightWrapper>
                <StyledHeading>
                    <StyledText
                        as="h2"
                        hasdeclaredfontsize="clamp(16px, 28px, 32px)"
                        hasdeclaredtextalign="center"
                        hasdeclaredfontcolor="var(--primary500)"
                        hasdeclaredfontfamily="Nocturne Serif"
                    >
                        Skontakuj się ze mną
                    </StyledText>
                </StyledHeading>
                <HomeContactForm />
            </StyledRightWrapper>
        </StyledHomeContact>
    );
}

export default HomeContact