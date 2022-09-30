import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

import Button from "../Button/Button";
import HomeArticleElement from '../HomeArticleElement/HomeArticleElement';

import {
    StyledHomeArticles,
    StyledArticlesWrapper,
} from "./StyledHomeArticles";
import {
    StyledCollectionFooter,
    StyledFooterImageWrapper,
} from "../HomeCollections/StyledHomeCollections";
import { StyledText } from "../Text/StyledText";

const HomeArticles = () => {
    return (
        <StyledHomeArticles>
            <StyledText
                as="h2"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredtextalign="center"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="0 0 40px"
                hasdeclaredfontfamily="Nocturne Serif"
            >
                Artykuły:
            </StyledText>
            <StyledArticlesWrapper>
                <HomeArticleElement index={0} />
                <HomeArticleElement index={1} />
            </StyledArticlesWrapper>
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
                    Więcej artykułów znajdziesz na
                </StyledText>
                <Button
                    text="BLOGU"
                    whereGo="/blog"
                    bgColor="var(--secondary500)"
                    hasBorder="2px solid var(--secondary500)"
                    hasHeight="44px"
                    textColor="var(--primary900)"
                />
            </StyledCollectionFooter>
        </StyledHomeArticles>
    );
}

export default HomeArticles
