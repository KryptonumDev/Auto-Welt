import styled from "styled-components";

export const StyledGoogleMapsContact = styled.section`
  margin: 120px 0;

  > a {
    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 60px 0;
  }

  @media only screen and (max-width: 768px) {
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

export const StyledGoogleMapsWrapper = styled.a`
  width: 100%;
  max-width: 1085px;
  height: 411px;

  iframe{
    width: 100%;
    height: 410px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    height: 445px;
  }

  @media only screen and (max-width: 375px) {
    height: 271px;
  }
`;
