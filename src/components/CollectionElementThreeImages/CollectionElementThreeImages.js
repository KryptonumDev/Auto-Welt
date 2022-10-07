import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Button from '../Button/Button'

import { StyledCollectionElementThreeImages } from "./StyledCollectionElementThreeImages"

const CollectionElementThreeImages = ({ imagesData, linkData }) => {
  return (
    <StyledCollectionElementThreeImages>
        <div>
            {imagesData && imagesData.map((image, index) => {
                return (
                    <GatsbyImage key={index} image={getImage(image.localFile)} alt={image.altText} />
                )
            })}
        </div>
        {linkData && 
        <Button
            whereGo={linkData.url}
            text={linkData.title}
            textColor="var(--white)"
            bgColor="var(--primary500)"
            hasDeclaredPadding="10px 36px"
            hasFontSize="21px"
            hasFontWeight="500"
            hasTarget={linkData.target}
        />}
    </StyledCollectionElementThreeImages>
  )
}

export default CollectionElementThreeImages