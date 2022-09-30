import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../Button/Button"
import HomeCollectionElement from "../HomeCollectionElement/HomeCollectionElement"

import {
    StyledHomeCollections, 
    StyledImagesWrapper, 
    StyledImage,
    StyledCollectionFooter,
    StyledFooterImageWrapper
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
            <StyledCollectionFooter>
                <StyledFooterImageWrapper>
                    <StaticImage
                        placeholder="blurred"
                        src="../../images/collectionRectangle.png"
                        alt="background"
                        objectFit="fill"
                    />
                </StyledFooterImageWrapper>
                <StyledText
                    hasdeclaredfontsize="clamp(18px, 28px, 32px)"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontfamily="Nocturne Serif"
                    hasdeclaredfontweight="400"
                    hasdeclaredpadding="0 18px 0 57px"
                >
                    Poznaj wszystkie
                </StyledText>
                <Button
                    text="KOLEKCJE"
                    whereGo="/kolekcje-modeli"
                    bgColor="var(--secondary500)"
                    hasBorder="2px solid var(--secondary500)"
                    hasHeight="44px"
                    textColor="var(--primary900)"
                />
            </StyledCollectionFooter>
        </StyledHomeCollections>
    );
}

export default HomeCollections