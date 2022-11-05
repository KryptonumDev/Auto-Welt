import styled from "styled-components";

export const StyledExhibitionTemplateContent = styled.div`
  margin: 90px 0;
  display: flex;
  justify-content: space-between;
  gap: 70px;

  @media only screen and (max-width: 972px) {
    gap: 20px;
  }

  @media only screen and (max-width: 768px) {
    margin: 60px 0;
  }

  @media only screen and (max-width: 660px) {
    margin: 0 0 60px;
  }
`;

export const StyledAsideWrapper = styled.div`
  width: calc(40% - 35px);
  max-width: 364px;

  @media only screen and (max-width: 972px) {
    margin-left: -32px;
  }

  @media only screen and (max-width: 972px) {
    margin-left: -16px;
  }

  @media only screen and (max-width: 660px) {
    display: none;
  }
`;

export const StyledContentWrapper = styled.div`
  width: calc(60% - 35px);
  font-family: "Roboto Condensed";
  font-size: 24px;

  .has-text-align-right {
    text-align: right;
    color: #23423d;
    margin-top: 20px;
    font-family: "Nocturne Serif";
  }
  strong,
  em {
    position: relative;
    font-weight: normal;
    font-style: normal;

    &:before {
      content: "";
      width: 100%;
      background: #f6e2ba;
      height: 15px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #23423d;
    font-family: "Nocturne Serif";
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  ul,
  ol {
    margin-left: 9px;
    padding-left: 12px;
  }

  > p {
    &:first-of-type {
      &:first-letter {
        font-size: 48px;
        color: #edac29;
        font-family: "Nocturne Serif";
        float: left;
        padding-right: 10px;
      }
    }
  }

  .wp-block-columns {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    > div {
      width: 48%;
      filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));

      img {
        width: 100%;
      }

      .gatsby-image-wrapper {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      > div {
        width: 100%;
      }
    }
  }

  .size-full {
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 972px) {
    width: 60%;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 660px) {
    width: 100%;
  }

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;
