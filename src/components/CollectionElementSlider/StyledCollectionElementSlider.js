import styled from "styled-components";

export const StyledCollectionElementSlider = styled.section`
  margin-top: 120px;
  width: 100%;
  position: relative;

  .slick-list{
    width: ${({ length }) => length < 3 ? '100%' : 'calc(100% - 100px)'};
    margin: 0 auto;
  }

  .slick-track{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 0;
    margin-left: 8px;
    position: relative;

    .slick-list{
      width: 95%;
    }
  }

  @media only screen and (max-width: 600px) {
    margin-top: 80px;
  }

  @media only screen and (max-width: 546px) {
    min-height: unset;
    margin-top: 60px;
    margin-bottom: ${({ length }) => length < 2 ? '20px' : '80px'};
  }
`;

export const StyledLeftArrow = styled.button`
  border: none;
  background: var(--primary500);
  padding: 5px;
  cursor: pointer;
  height: 56px;

  z-index: 2;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  display: ${props => props.length < 3 ? 'none' : 'block'};

  @media (max-width: 768px) {
    display: ${props => props.length < 2 ? 'none' : 'block'};
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  > svg {
    width: 100%;
    height: 100%;
    path {
      stroke: var(--secondary500);
    }
  }

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 56px;
  }

  @media only screen and (max-width: 546px) {
    position: absolute;
    bottom: 0;
    transform: translateY(120%);
    top: unset;
    left: 34%;
  }

  @media only screen and (max-width: 341px) {
    bottom: 0;
  }
`;

export const StyledRightArrow = styled.button`
  border: none;
  background: var(--primary500);
  padding: 5px;
  cursor: pointer;
  height: 56px;

  position: absolute;
  z-index: 2;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  display: ${props => props.length < 3 ? 'none' : 'block'};

  @media (max-width: 768px) {
    display: ${props => props.length < 2 ? 'none' : 'block'};
  }

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  > svg {
    width: 100%;
    height: 100%;
    path {
      stroke: var(--secondary500);
    }
  }

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 56px;
  }

  @media only screen and (max-width: 546px) {
    position: absolute;
    bottom: 0;
    transform: translateY(120%);
    top: unset;
    right: 34%;
  }

  @media only screen and (max-width: 341px) {
    bottom: 0;
  }
`;

export const StyledImage = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    max-width: unset;
  }
`;
