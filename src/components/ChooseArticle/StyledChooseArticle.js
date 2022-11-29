import styled from "styled-components";
import { Link } from "gatsby";

export const StyledChooseArticle = styled.div`
  width: 100%;
  margin-top: 120px;

  @media only screen and (max-width: 768px) {
    margin-top: 60px;

    > h2 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 375px) {
    > h2 {
      font-size: 34px;
    }
  }
`;

export const StyledTitleWrapper = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2em;
  text-transform: uppercase;
  text-align: center;
  color: #23423D;
  position: relative;
  z-index: 2;
`

export const StyledArticle = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));
  text-decoration: none;
  
  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }
  
  &:hover {
    > div {
      &:first-of-type {
        img {
          transition: transform 250ms linear, mix-blend-mode 250ms linear;
          transform: scale(1.1);
          mix-blend-mode: unset;
        }
      }
    }
  }
`;
export const StyledImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    mix-blend-mode: multiply;

    &:not(:hover) {
      transition: transform 250ms linear, mix-blend-mode 250ms linear;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
`;

export const StyledTextWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 33px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  p + p {
    margin-top: 0 !important;
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
      width: 95%;
    }
  }
`;

export const StyledBgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
