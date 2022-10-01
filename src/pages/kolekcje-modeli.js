import React from "react"
import { StaticImage } from "gatsby-plugin-image";

import HomeArticles from "../components/HomeArticles/HomeArticles";
import Button from "../components/Button/Button";
import ModelCollection from "../components/ModelCollection/ModelCollection";

import {
    StyledCollectionFooter,
    StyledFooterImageWrapper,
    StyledContentWrapper
} from "../components/HomeCollections/StyledHomeCollections";
import { StyledText } from "../components/Text/StyledText";

const ModelCollections = () => {
    return (
        <>  
            <StyledContentWrapper>
                <ModelCollection />
                <ModelCollection />
                <ModelCollection />
                <ModelCollection />
                <ModelCollection />
                <ModelCollection />
            </StyledContentWrapper>
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
                    Skontaktuj się ze mną 
                </StyledText>
                <Button
                    text="KONTAKT"
                    whereGo="/kontakt"
                    bgColor="var(--secondary500)"
                    hasBorder="2px solid var(--secondary500)"
                    hasHeight="44px"
                    textColor="var(--primary900)"
                />
            </StyledCollectionFooter>
            <HomeArticles iscollection />
        </>
    )
}

export default ModelCollections;