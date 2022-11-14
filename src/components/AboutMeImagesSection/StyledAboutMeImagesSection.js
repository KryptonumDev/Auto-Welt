import styled from "styled-components";

export const StyledAboutMeImagesSection = styled.section`
  width: 100%;
  margin: 120px auto;
  padding: 0 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin: 60px 0;
  }
`;

export const StyledImagesWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 100px;
`;

export const StyledImage = styled.div`
  width: 49%;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 670px) {
    width: 100%;
  }
`;

export const StyledRightImage = styled.div`
  position: absolute;
  bottom: -50px;
  right: -400px;

  @media only screen and (max-width: 960px) {
    max-width: 720px;
    right: -200px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 642px;
  }

  @media only screen and (max-width: 670px) {
    bottom: -140px;
    right: -200px;
  }

  @media only screen and (max-width: 420px) {
    max-width: 374px;
    right: -80px;
    bottom: -50px;
  }
`;

export const StyledAparatWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  max-width: 505px;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 960px) {
    margin-top: 140px;
  }

  @media only screen and (max-width: 670px) {
    margin-top: 180px;
  }

  @media only screen and (max-width: 420px) {
    margin-top: 90px;
  }
`;

export const StyledIconWrapper = styled.a`
  text-decoration: none;
  color: #000;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }
`;

export const StyledTextWrapper = styled.a`
  text-decoration: none;
  font: normal 500 16px/1.2em "Roboto Condensed", Arial;
  color: #000;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  a, strong {
    font: normal 700 16px/1.2em "Roboto Condensed", Arial;
    text-decoration-line: underline;
    color: #23423d;
  }

  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
