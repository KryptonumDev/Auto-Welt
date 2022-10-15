import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCollectionElementSlider = styled.section`
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  
  @media only screen and (max-width: 768px){
    margin-top: 0;
    padding-left: 16px;
    gap: 0;
    position: relative;
    justify-content: center;
  }
  @media only screen and (max-width: 546px){
    min-height: unset;
    margin-top: 60px;
  }
  @media only screen and (max-width: 375px){
    margin-bottom: 60px;
  }
`;
export const StyledLeftArrow = styled(motion.div)`
  background: var(--primary500);
  padding: 5px;
  cursor: pointer;
  height: 56px;
  > svg {
    width: 100%;
    height: 100%;
    path {
      stroke: var(--secondary500);
    }
  }
  @media only screen and (max-width: 768px){
    width: 40px;
    height: 56px;
    margin-right: -18px;
    position: relative;
    z-index: 1;
  }
  @media only screen and (max-width: 546px){
    position: absolute;
    bottom: -20px;
    top: auto;
    transform: translateY(0);
    left: 34%;
    margin-right: 0;
  }
`;
export const StyledRightArrow = styled(motion.div)`
  background: var(--primary500);
  padding: 5px;
  cursor: pointer;
  height: 56px;
  > svg {
    width: 100%;
    height: 100%;
    path {
      stroke: var(--secondary500);
    }
  }

  @media only screen and (max-width: 768px){
    width: 40px;
    height: 56px;
    margin-left: -18px;
    position: relative;
    z-index: 1;
  }
  @media only screen and (max-width: 546px){
    position: absolute;
    bottom: -20px;
    top: auto;
    transform: translateY(0);
    right: 34%;
    margin-left: 0;
  }
`;
export const StyledImagesWrapper = styled(motion.div)`
  width: 100%;
  max-width: 943px;
  min-height: 346px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 27px;
  overflow: hidden;
  @media only screen and (max-width: 768px){
    height: 100%;
    gap: 0;
    width: 92%;
    padding-bottom: 40px;
  }
  @media only screen and (max-width: 546px){
    width: 100%;
  }
  @media only screen and (max-width: 375px){
    padding-bottom: 0;
  }
`;
export const StyledImage = styled(motion.div)`
  max-width: 457px;
  width: 50%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px){
    width: 100%;
    max-width: unset;
  }
`;
