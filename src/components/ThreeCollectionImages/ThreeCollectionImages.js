import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { 
    StyledThreeCollectionImages,
    StyledImageWrapper
} from "./StyledThreeCollectionImages"

const ThreeCollectionImages = ({ imagesData }) => {
    return (
        <StyledThreeCollectionImages>
            {imagesData.map((image, index)=> {
                const convertImage = getImage(image.localFile)
                return (
                    <StyledImageWrapper key={index}>
                        <GatsbyImage image={convertImage} alt={image.altText} />
                    </StyledImageWrapper>
                )
            })}
        </StyledThreeCollectionImages>
    )
}

export default ThreeCollectionImages