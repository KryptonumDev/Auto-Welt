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
    }, [index]);

    const handleNext = useCallback(() => {
        setIsPrev(false);
        setPrevIndex(index);
        if (index === imagesData.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }, [index]);

    const handleNextKeyUp = useCallback((e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            handleNext()
        }
    }, [ handleNext ])

    const handlePrevKeyUp = useCallback((e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            handlePrev()
        }
    }, [ handlePrev ])

    useEffect(() => {
        let sliderElements = imagesData.slice(
            index,
            index + (width < 769 ? 1 : 2)
        );
        if (width > 769) {
            if (index === imagesData.length - 1) {
                sliderElements = [
                    imagesData[imagesData.length - 1],
                    imagesData[0],
                ];
            }
            if (index === 0 && isPrev && prevIndex !== 1) {
                sliderElements = [
                    imagesData[imagesData.length - 1],
                    imagesData[0],
                ];
            }
        }

        setRenderElements(sliderElements);
    }, [index, width]);

    return (
        <StyledCollectionElementSlider>
            {imagesData && (
                <>
                    {width > 768 ? (
                        imagesData.length > 2 ? (
                            <StyledLeftArrow
                                tabIndex="0"
                                onClick={handlePrev}
                                onKeyUp={handlePrevKeyUp}
                            >
                                <LeftArrow />
                            </StyledLeftArrow>
                        ) : null
                    ) : imagesData.length < 2 ? null : (
                        <StyledLeftArrow
                            tabIndex="0"
                            onClick={handlePrev}
                            onKeyUp={handlePrevKeyUp}
                        >
                            <LeftArrow />
                        </StyledLeftArrow>
                    )}
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
                    {width > 768 ? (
                        imagesData.length > 2 ? (
                            <StyledRightArrow
                                onClick={handleNext}
                                onKeyUp={handleNextKeyUp}
                                tabIndex="0"
                            >
                                <RightArrow />
                            </StyledRightArrow>
                        ) : null
                    ) : imagesData.length < 2 ? null : (
                        <StyledRightArrow
                            onClick={handleNext}
                            onKeyUp={handleNextKeyUp}
                            tabIndex="0"
                        >
                            <RightArrow />
                        </StyledRightArrow>
                    )}
                </>
            )}
        </StyledCollectionElementSlider>
    );
};

export default CollectionElementSlider;
