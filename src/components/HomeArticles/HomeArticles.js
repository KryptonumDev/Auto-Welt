import React from 'react'
import { StaticImage } from "gatsby-plugin-image";

import Button from "../Button/Button";
import HomeArticleElement from '../HomeArticleElement/HomeArticleElement';

import {
    StyledHomeArticles,
    StyledArticlesWrapper,
    StyledButtonWrapper
} from "./StyledHomeArticles";
import {
    StyledCollectionFooter,
    StyledFooterImageWrapper,
} from "../HomeCollections/StyledHomeCollections";
import { StyledText } from "../Text/StyledText";

const HomeArticles = ({ iscollection }) => {
    return (
        <StyledHomeArticles iscollection={iscollection}>
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
            {!iscollection ? 
                (<StyledCollectionFooter>
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
                </StyledCollectionFooter>)
                :
                (<StyledButtonWrapper>
                    <Button
                        whereGo="/kolekcje-modeli"
                        text="WIĘCEJ ARTYKUŁÓW"
                        hasBorder="2px solid var(--primary500)"
                        textColor="var(--primary500)"
                        hasFontSize="21px"
                        bgColor="var(--creamBg)"
                    />
                </StyledButtonWrapper>)
            }   
        </StyledHomeArticles>
    );
}

export default HomeArticles
