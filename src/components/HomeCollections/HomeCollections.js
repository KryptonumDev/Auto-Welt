import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import HomeCollectionElement from "../HomeCollectionElement/HomeCollectionElement"
import RecInfoWithButton from "../RecInfoWithButton/RecInfoWithButton"

import {
    StyledHomeCollections, 
    StyledImagesWrapper, 
    StyledImage,
} from "./StyledHomeCollections"
import { StyledText } from "../Text/StyledText"

const HomeCollections = () => {
    const [retImages, setRetImages] = useState([]);

    return (
        <StyledHomeCollections>
            <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredtextalign="center"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="80px 0 40px"
                hasdeclaredfontfamily="Nocturne Serif"
            >
                Kolekcje:
            </StyledText>
            <StyledImagesWrapper>
                <HomeCollectionElement
                    bgImage="../../images/2.png"
                    image="../../images/example.png"
                    buttonText="KULTOWE SAMOCHODY PRL"
                />
                <HomeCollectionElement
                    bgImage="../../images/2.png"
                    image="../../images/example.png"
                    buttonText="SAMOCHODY CIĘŻAROWE"
                />
                <HomeCollectionElement
                    bgImage="../../images/2.png"
                    image="../../images/example.png"
                    buttonText="Autobusy"
                />
                <HomeCollectionElement
                    bgImage="../../images/2.png"
                    image="../../images/example.png"
                    buttonText="SAMOCHODY DOSTAWCZE I TERENOWE"
                />
                <HomeCollectionElement
                    bgImage="../../images/2.png"
                    image="../../images/example.png"
                    buttonText="PROTOTYPY POLSKIEJ MOTORYZACJI"
                />
                <HomeCollectionElement
                    bgImage="../../images/2.png"
                    image="../../images/example.png"
                    buttonText="SAMOCHODY Z OKRESU II WOJNY ŚWIATOWEJ"
                />
                <HomeCollectionElement
                    bgImage="../../images/2.png"
                    image="../../images/example.png"
                    buttonText="SAMOCHODY EUROPY ZACHODNIEJ"
                />
                <StyledImage>
                    <StaticImage
                        placeholder="blurred"
                        src="../../images/MPRL-25 1.png"
                        alt="Car Polonez 1500"
                    />
                </StyledImage>
            </StyledImagesWrapper>
            <RecInfoWithButton />
        </StyledHomeCollections>
    );
}

export default HomeCollections