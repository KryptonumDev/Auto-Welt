import styled from "styled-components";

export const StyledCollectionElementSlider = styled.section`
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 27px;
  
  @media only screen and (max-width: 768px){
    margin-top: 0;
    gap: 0;
    position: relative;
    justify-content: center;
  }
  @media only screen and (max-width: 546px){
    min-height: unset;
    margin-top: 60px;
    padding-bottom: 60px;
  }
`;
export const StyledLeftArrow = styled.div`
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    z-index: 1;
  }
  @media only screen and (max-width: 546px){
    bottom: 0;
    top: auto;
    transform: translateY(0);
    left: 38%;
  }
`;
export const StyledRightArrow = styled.div`
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
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  @media only screen and (max-width: 546px){
    bottom: 0;
    top: auto;
    transform: translateY(0);
    right: 38%;
  }
`;
export const StyledImagesWrapper = styled.div`
  width: 100%;
  max-width: 943px;
  min-height: 346px;
  display: flex;
  align-items: center;
  gap: 27px;

  @media only screen and (max-width: 768px){
    height: 100%;
    gap: 0;
    width: 92%;
  }
  @media only screen and (max-width: 546px){
    width: 100%;
  }
`;
export const StyledImage = styled.div`
  max-width: 457px;
  width: 50%;
  
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
