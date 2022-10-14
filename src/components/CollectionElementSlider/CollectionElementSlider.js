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

import useWindowSize from "../../utils/getWindowSize"

const CollectionElementSlider = ({ imagesData }) => {
  const width = useWindowSize();
  const [renderElements, setRenderElements] = useState([]);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0)
  const [isPrev, setIsPrev] = useState(false);

  const handlePrev = () => {
    setIsPrev(true);
    setPrevIndex(index);
    if (index === 0) {
      setIndex(imagesData.length - 1);
    } else {
      setIndex(index - 1);
    } 
  };
  const handleNext = () => {
    setIsPrev(false);
    setPrevIndex(index);
    if(index === imagesData.length - 1){
      setIndex(0)
    }else{
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    let sliderElements = imagesData.slice(index, index + (width < 769 ? 1 : 2));
    if(width > 769){
      if(index === imagesData.length - 1){
        sliderElements = [imagesData[imagesData.length - 1], imagesData[0]];
      }
      if((index === 0 && isPrev) && (prevIndex !== 1)){
        sliderElements = [imagesData[imagesData.length - 1], imagesData[0]];
      }
    }
    
    setRenderElements(sliderElements);
  }, [index, width]);


  return (
    <StyledCollectionElementSlider>
      {imagesData && (
        <>
          <StyledLeftArrow
            onClick={handlePrev}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <LeftArrow />
          </StyledLeftArrow>
          <StyledImagesWrapper>
            {renderElements.map((e, index) => (
              <AnimatePresence initial={false} exitBeforeEnter>
                <StyledImage 
                  key={Math.random()}
                  initial={{ x: isPrev ? -100 : 100 }}
                  animate={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <GatsbyImage 
                    image={getImage(e.localFile)} 
                    alt={e.altText} 
                    objectFit="cover"
                  />
                </StyledImage>
              </AnimatePresence>
            ))}
          </StyledImagesWrapper>
          <StyledRightArrow 
            onClick={handleNext} 
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <RightArrow />
          </StyledRightArrow>
        </>
      )}
    </StyledCollectionElementSlider>
  );
};

export default CollectionElementSlider;
