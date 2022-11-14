/** @format */

import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import parse from "html-react-parser";

import Button from "../Button/Button";

import {
    StyledModelCollection,
    StyledImage,
    StyledTitle,
    StyledButtonSpace,
    StyledTitleImage,
} from "./StyledModelCollection";

const ModelCollection = ({ collectionData, slug }) => {
    const shortDataKey = collectionData.informacjeGlowne;
    return (
        <StyledModelCollection to={`/kolekcje-modeli/${slug}`} aria-label="link">
            <StyledImage>
                {shortDataKey.duzaMiniaturka.localFile && (
                    <GatsbyImage
                        image={getImage(shortDataKey.duzaMiniaturka.localFile)}
                        alt={shortDataKey.duzaMiniaturka?.altText || " "}
                        title={shortDataKey.duzaMiniaturka?.title}
                    />
                )}
            </StyledImage>
            <StyledTitle>
                <StyledTitleImage>
                    {shortDataKey.tloDlaTytuluWDuzejMiniaturce.localFile && (
                        <GatsbyImage
                            image={getImage(
                                shortDataKey.tloDlaTytuluWDuzejMiniaturce
                                    .localFile
                            )}
                            alt={
                                shortDataKey.tloDlaTytuluWDuzejMiniaturce
                                    ?.altText || " "
                            }
                            title={
                                shortDataKey.tloDlaTytuluWDuzejMiniaturce?.title
                            }
                            objectFit="fill"
                        />
                    )}
                </StyledTitleImage>
                {shortDataKey.tytulNaDuzejMiniaturce ?
                    parse(shortDataKey.tytulNaDuzejMiniaturce) : null}
            </StyledTitle>
            <StyledButtonSpace>
                {shortDataKey.trescPrzyciskuNaDuzejMiniaturce ? (
                    <Button
                        text={shortDataKey.trescPrzyciskuNaDuzejMiniaturce}
                        textColor="var(--white)"
                        bgColor="var(--primary500)"
                        hoverBgColor="#1D2B29"
                        hasFontSize="21px"
                        hasFontWeight="700"
                        hasDeclaredPadding="8px 33px"
                        hasBorder="2px solid var(--primary500)"
                        hasNotTabIndex
                    />
                ) : null}
            </StyledButtonSpace>
        </StyledModelCollection>
    );
};

export default ModelCollection;
