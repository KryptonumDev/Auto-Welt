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

  &:hover {
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
  min-height: 60px;
  position: relative;

  @media only screen and (max-width: 375px) {
    > p {
      font-size: 16px;
    }
  }
`;

export const StyledTitleBgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
    margin-bottom: 20px;

    &:first-letter {
      font-size: 35px;
      color: #edac29;
      font-family: "Nocturne Serif", Arial;
      float: left;
      padding-right: 10px;
    }
  }

  > a {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 26px 25px;

    > a {
      width: 95%;
    }
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 375px) {
    > p {
      font-size: 14px;
    }

    > a {
      font-size: 15px;
    }
  }
`;
