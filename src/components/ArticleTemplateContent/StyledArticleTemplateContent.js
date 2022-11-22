import styled from "styled-components";

export const StyledArticleTemplateContent = styled.section`
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

export const StyledAside = styled.aside`
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

export const StyledTextContent = styled.div`
  width: calc(60% - 35px);
  font-family: "Roboto Condensed", Arial;
  font-size: 24px;

  .is-layout-flow.wp-block-column + .is-layout-flow.wp-block-column{
    margin-top: 20px;
  }

  ul + h1,
  ul + h2,
  ul + h3,
  ul + p,
  ul + div,
  ul + figure{
    margin-top: 40px;
  }

  p + h2,
  p + h3,
  p + figure,
  h3 + figure,
  ul + figure,
  ol + figure,
  div +  figure {
    margin-top: 40px;
  }

  h2 + figure{
    margin-top: 1.25rem;
  }

  p + .customQuote,
  .customQuote + p {
    margin-top: 40px;
  }

  figure + h2,
  figure + h3,
  figure + div,
  figure + ol,
  figure + ul{
    margin-top: 60px;
  }

  figure + p,
  ul + p,
  h2 + p,
  h3 + p,
  p + div,
  div + h2,
  p + p,
  p + ul,
  p + ol{
    margin-top: 1.25rem;
  }

  p + .wp-block-columns,
  h2 + .wp-block-columns,
  h3 + .wp-block-columns,
  ul + .wp-block-columns,
  ol + .wp-block-columns,
  figure + .wp-block-columns,
  div + .wp-block-columns,
  .wp-block-columns + h2,
  .wp-block-columns + h3,
  .wp-block-columns + ul,
  .wp-block-columns + ol,
  .wp-block-columns + figure,
  .wp-block-columns + div{
    margin-top: 37px;
  }

  .has-text-align-right {
    text-align: right;
    color: #23423d;
    margin-top: 20px;
    font-family: "Nocturne Serif", Arial;
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
      height: 0.5em;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      display: inline-block;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #23423d;
    font-family: "Nocturne Serif", Arial;
    font-weight: 500;
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

  .wp-block-image.size-full{
    img{
      filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));
    }
  }

  > p {
    &:first-of-type {
      &:first-letter {
        font-size: 47px;
        color: #edac29;
        font-family: "Nocturne Serif", Arial;
        float: left;
        padding-right: 10px;
      }
    }
  }

  .wp-block-columns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .wp-container-3 {
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

    p + h2,
    p + h3,
    p + figure,
    h2 + figure,
    h3 + figure,
    ul + figure,
    ol + figure,
    div +  figure {
      margin-top: 30px;
    }

    figure + h2,
    figure + h3,
    figure + div,
    figure + ol,
    figure + ul{
      margin-top: 40px;
    }

    .wp-block-column + .wp-block-column{
      margin-top: 20px;
    }
    
    > p {
      &:first-of-type {
        &:first-letter {
          font-size: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 660px) {
    width: 100%;
  }

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;
