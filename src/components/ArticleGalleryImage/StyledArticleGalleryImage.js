import styled from "styled-components";

export const StyledArticleGalleryImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 18px;
  width: 100%;

  > div {
    width: calc(32.3% - 6px);
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));

    @media only screen and (max-width: 1094px){
      width: calc(31% - 6px);
    }

    &:last-child {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
    }
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    gap: 12px;

    > div {
      width: 100%;

      img {
        width: 100%;
      }

      .gatsby-image-wrapper {
        width: 100%;
      }
    }
  }
`;

export const StyledTextWrapper = styled.div`
  p,
  a {
    color: #23423d;
    font: normal 500 16px/1.2em "Roboto Condensed", Arial;
    margin-top: 8px;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 8px;
    }
  }
`;
