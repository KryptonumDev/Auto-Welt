import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { 
    StyledCollectionImageUnderDescImages, 
    StyledTopImage,
    StyledBottomImage
} from "./StyledCollectionImageUnderDescImages"

const CollectionImageUnderDescImages = ({ imagesData }) => {
    const topImage = getImage(imagesData.prostokatneZdjeciePodOpisem.localFile);
    const rightImage = getImage(imagesData.zdjeciePojazduPrzyczepioneDoPrawejKrawedzi.localFile);

    return (
        <StyledCollectionImageUnderDescImages>
            <StyledTopImage>
                <GatsbyImage image={topImage} alt={imagesData.prostokatneZdjeciePodOpisem.altText} />
            </StyledTopImage>
            <StyledBottomImage>
                <GatsbyImage image={rightImage} alt={imagesData.zdjeciePojazduPrzyczepioneDoPrawejKrawedzi.altText} />
            </StyledBottomImage>
        </StyledCollectionImageUnderDescImages>
    )
}

export default CollectionImageUnderDescImages