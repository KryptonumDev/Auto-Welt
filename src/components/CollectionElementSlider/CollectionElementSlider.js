import React, { useState, useEffect, useCallback } from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { 
    StyledCollectionElementSlider, 
    StyledLeftArrow, 
    StyledRightArrow, 
    StyledImagesWrapper,
    StyledImage
} from "./StyledCollectionElementSlider"

import LeftArrow from "../../images/left_arrow.svg"
import RightArrow from "../../images/right_arrow.svg"

const CollectionElementSlider = ({ imagesData }) => {
    const [renderElements, setRenderElements] = useState([])
    const [index, setIndex] = useState(0);

    const handlePrev = useCallback(
        () => {
            if (index === 0) {
                setIndex(imagesData.length - 2)
            }else {
                setIndex(index - 1)
            }
        }, [index]
    )
    const handleNext = useCallback( 
        () => {
            if (index === imagesData.length - 2) {
                setIndex(0)
            } else {
                setIndex(index + 1);
            }
        }, [index]
    )

    useEffect(() => {
        const sliderElements = imagesData.slice(index, index + 2);

        setRenderElements(sliderElements);
    }, [index])

    return (
        <StyledCollectionElementSlider>
            <StyledLeftArrow onClick={handlePrev}>
                <LeftArrow />
            </StyledLeftArrow>
            <StyledImagesWrapper>
                {renderElements.map((e, index) => {
                    const convertImage = getImage(e.localFile)
                    return (
                        <StyledImage key={index}>
                            <GatsbyImage image={convertImage} alt={e.altText} />
                        </StyledImage>
                    )
                })}
            </StyledImagesWrapper>
            <StyledRightArrow onClick={handleNext}>
                <RightArrow />
            </StyledRightArrow>
        </StyledCollectionElementSlider>
    )
}

export default CollectionElementSlider