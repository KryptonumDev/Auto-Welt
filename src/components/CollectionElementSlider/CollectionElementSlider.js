/** @format */

import React, { useState, useEffect, useCallback } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AnimatePresence } from "framer-motion";

import {
    StyledCollectionElementSlider,
    StyledLeftArrow,
    StyledRightArrow,
    StyledImagesWrapper,
    StyledImage,
} from "./StyledCollectionElementSlider";

import LeftArrow from "../../images/left_arrow.svg";
import RightArrow from "../../images/right_arrow.svg";

const CollectionElementSlider = ({ imagesData }) => {

    return (
        <StyledCollectionElementSlider>
            {/* {imagesData && (
                <>
                    {(
                        (width > 768 && imagesData.length > 2) ||
                        (width < 769 && imagesData.length > 1)
                    ) ? (
                        <StyledLeftArrow
                            tabIndex="0"
                            onClick={handlePrev}
                            onKeyUp={handlePrevKeyUp}
                        >
                            <LeftArrow />
                        </StyledLeftArrow>
                    ) : null}
                    <StyledImagesWrapper>
                        {renderElements.map((e, index) => (
                            <AnimatePresence initial={false} mode="wait">
                                <StyledImage
                                    key={Math.random()}
                                    initial={{ x: isPrev ? -100 : 100 }}
                                    animate={{ x: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                >
                                    <GatsbyImage
                                        image={getImage(e.localFile)}
                                        alt={e.altText || " "}
                                        title={e.title}
                                    />
                                </StyledImage>
                            </AnimatePresence>
                        ))}
                    </StyledImagesWrapper>
                    {(
                        (width > 768 && imagesData.length > 2) ||
                        (width < 769 && imagesData.length > 1)
                    ) ? (
                        <StyledRightArrow
                            onClick={handleNext}
                            onKeyUp={handleNextKeyUp}
                            tabIndex="0"
                        >
                            <RightArrow />
                        </StyledRightArrow>
                    ) : null}
                </>
            )} */}
        </StyledCollectionElementSlider>
    );
};

export default CollectionElementSlider;
