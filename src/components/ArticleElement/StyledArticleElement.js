import styled from "styled-components";
import { Link } from "gatsby";

export const StyledArticleElement = styled(Link)`
  width: calc(50% - 22px);
  border-top: 6px solid #edac2a;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  min-height: 252px;
  overflow: hidden;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 532px) {
    min-height: 170px;
  }

  > div {
    &:first-child {
      img {
        transition: transform 250ms, mix-blend-mode 250ms;
        mix-blend-mode: multiply;
      }
    }
  }

  &:hover {
    > div {
      &:first-child {
        img {
          transform: scale(1.1);
          mix-blend-mode: unset;
        }
      }
    }
  }
`;
export const StyledImageWrapper = styled.div`
  width: 216px;
  min-height: 252px;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 1100px) {
    width: 150px;
  }

  @media only screen and (max-width: 768px) {
    width: 254px;
  }

  @media only screen and (max-width: 532px) {
    width: 169px;
    min-height: 170px;
  }

  @media only screen and (max-width: 344px) {
    width: 110px;
  }
`;
export const StyledTextWrapper = styled.div`
  width: calc(100% - 216px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 28px;

  @media only screen and (max-width: 1100px) {
    width: calc(100% - 150px);
  }

  @media only screen and (max-width: 768px) {
    width: calc(100% - 254px);
  }

  @media only screen and (max-width: 532px) {
    width: calc(100% - 169px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 344px) {
    width: calc(100% - 110px);
  }
`;
export const StyledDate = styled.div`
  @media only screen and (max-width: 532px) {
    p {
      font-size: 13px;
    }
  }
`;
export const StyledTitle = styled.div`
  @media only screen and (max-width: 768px) {
    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 532px) {
    p {
      font-size: 16px;
    }
  }
`;
export const StyledLinkWrapper = styled.div`
  position: absolute;
  right: 28px;
  bottom: 27px;

  @media only screen and (max-width: 532px) {
    right: 23px;
    bottom: 23px;
  }
`;
export const StyledBgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 252px;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 532px) {
    min-height: 170px;
  }
`;
