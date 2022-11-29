import styled from "styled-components";
import { Link } from "gatsby";

export const StyledHomeArticleElement = styled(Link)`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  width: 49%;
  max-width: 526px;
  background: var(--creamBg);
  padding-bottom: 40px;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  flex-direction: column; 
  justify-content: space-between;

  &:hover {
    > div {
      > div {
        &:nth-child(1) {
          img {
            transition: transform 250ms linear, mix-blend-mode 250ms linear;
            transform: scale(1.1);
            mix-blend-mode: unset;
          }
        }
      }
    }
  }


  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }
  
  @media only screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 275px;

  img {
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;

    &:not(:hover) {
      transition: transform 250ms linear, mix-blend-mode 250ms linear;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const StyledTitleWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 100px;
`;

export const StylexTextTitleWrapper = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2em;
  color: var(--primary500);
  padding: 20px 40px;
  position: relative;
  font-family: "Roboto Condensed";
  z-index: 2;

  > p {
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 26px;
  }
`

export const StyledTitleBgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  padding: 10px 40px 0 40px;
  display: flex;
  justify-content: center;
  font-size: 21px;
  margin-top: 30px;

  @media only screen and (max-width: 1065px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 768px) {
    padding: 0 26px 0 26px;
  }

  @media only screen and (max-width: 685px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 15px;
  }

`

export const StyledTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding: 10px 40px 0;

  > p {
    font: 400 18px "Roboto Condensed";
    color: var(--primary500);

    &:first-letter {
      font-size: 35px;
      color: #edac29;
      font-family: "Nocturne Serif";
      float: left;
      padding-right: 10px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10px 26px 0 26px;
  }
  @media only screen and (max-width: 375px) {
    > p {
      font-size: 14px;
    }

    > p {
      &:last-child{
        font-size: 15px;
      }
    }
  }
`;
