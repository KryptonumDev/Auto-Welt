import React from 'react'
import parse from 'html-react-parser';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { 
    StyledCollectionTemplateDesc,
    StyledTextWrapper,
    StyledImageWrapper
 } from "./StyledCollectionTemplateDesc"

const CollectionTemplateDesc = ({ descData }) => {
    const convertImage = getImage(descData.zdjecie.localFile)
    return (
        <StyledCollectionTemplateDesc>
            <StyledTextWrapper>
                {parse(descData.opisKolekcji)}
            </StyledTextWrapper>
            <StyledImageWrapper>
                <GatsbyImage image={convertImage} alt={descData.zdjecie.altText} objectFit="cover" />
            </StyledImageWrapper>
        </StyledCollectionTemplateDesc>
    )
}

export default CollectionTemplateDesc