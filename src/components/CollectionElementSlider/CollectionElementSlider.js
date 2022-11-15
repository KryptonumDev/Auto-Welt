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

import useWindowSize from "../../utils/getWindowSize";

const CollectionElementSlider = ({ imagesData }) => {
    const width = useWindowSize();
    const [renderElements, setRenderElements] = useState([]);
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [isPrev, setIsPrev] = useState(false);

    const handlePrev = useCallback(() => {
        setIsPrev(true);
        setPrevIndex(index);
        if (index === 0) {
            setIndex(imagesData.length - 1);
        } else {
            setIndex(index - 1);
        }
    }, [ index, setIndex, setIsPrev, setPrevIndex ]);

    const handleNext = useCallback(() => {
        setIsPrev(false);
        setPrevIndex(index);
        if (index === imagesData.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, [ index, setIndex, setIsPrev, setPrevIndex ]);

    const handleNextKeyUp = useCallback((e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault()
            handleNext()
        }
    }, [ handleNext ])

    const handlePrevKeyUp = useCallback((e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault()
            handlePrev()
        }
    }, [ handlePrev ])

    useEffect(
        () => {
            const numElements = (width < 769 ? 1 : 2),
                sliderElements = [...imagesData].slice(index, index + numElements);

            if (sliderElements.length < numElements)
                sliderElements.push(
                    ...(
                        [...imagesData]
                        .slice(0, numElements - sliderElements.length)
                    )
                );

            setRenderElements(sliderElements);
        },
        [ index, width, setRenderElements ]
    );


    return (
        <StyledCollectionElementSlider>
            {imagesData && (
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
            )}
        </StyledCollectionElementSlider>
    );
};

export default CollectionElementSlider;
