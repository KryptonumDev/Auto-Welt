import styled from "styled-components";
import { Link } from "gatsby";

export const StyledArticlesPageShowCollections = styled.section`
  padding: 0 32px;
  max-width: 1144px;
  width: 100%;
  margin: 120px auto;

  @media only screen and (max-width: 768px) {
    margin-top: 60px auto;
    padding: 0 16px;

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

export const StyledSlidesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin: 40px 0 90px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;
export const StyledSlide = styled(Link)`
  width: calc(50% - 8px);
  min-height: 305px;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

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

  &:hover {
    img {
      transition: transform 250ms linear, mix-blend-mode 250ms linear;
      transform: scale(1.1);
      mix-blend-mode: unset;
    }
  }

  @media only screen and (max-width: 472px) {
    height: 230px;
  }
`;

export const StyledTextWrapper = styled.div`
  max-width: 386px;
  width: 80%;
  min-height: 111px;
  border-bottom: 6px solid #edac2a;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 50%;
  transform: translate(-50%, -70%);
  text-decoration: none;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    transform: translate(-50%, 0);
    bottom: -35px;
  }
`;

export const StyledTitleImage = styled.div`
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

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 111px;
  width: 100%;

  @media only screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const StyledReqWrapper = styled.div`
  padding: 0 32px;
  max-width: 1144px;
  width: 100%;
  margin: 0 auto 120px;

  @media only screen and (max-width: 768px) {
    margin-top: 0 auto 60px;
    padding: 0 16px 0 0;
  }

  @media only screen and (max-width: 768px) {
    > div {
      margin-top: 0;
    }
  }
`;
