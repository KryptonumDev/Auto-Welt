import styled from "styled-components";

export const StyledHomeArticleElement = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  width: 49%;
  max-width: 526px;
  background: var(--creamBg);
  padding-bottom: 44px;

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
  padding: 10px 40px 30px;
  > p {
    font: 400 16px "Roboto";
    color: var(--primary500);
    &:first-letter {
      font-size: 44px;
      color: #edac29;
      font-family: "Nocturne Serif";
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
