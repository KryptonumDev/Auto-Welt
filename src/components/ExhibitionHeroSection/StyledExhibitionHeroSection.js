import styled from "styled-components";

export const StyledExhibitionHeroSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  overflow: hidden;

  @media only screen and (max-width: 660px) {
    flex-direction: column-reverse;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  padding-bottom: 240px;

  @media only screen and (max-width: 660px) {
    width: 100%;
    max-width: unset;
    padding-bottom: 40px;
  }
`;

export const StyledRightWrapper = styled.div`
  width: 50%;
  min-height: 384px;

  @media only screen and (max-width: 768px) {
    max-width: 272px;
  }

  @media only screen and (max-width: 660px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledTag = styled.div`
  width: 417px;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: relative;

  @media only screen and (max-width: 768px){
    width: 100%;
  }

  @media only screen and (max-width: 400px){
    padding-top: 5px;
    padding-bottom: 5px;

    p{
        max-width: 80%;
    }
  }
`;

export const StyledTextWrapper = styled.div`
  font: normal 500 24px/1.2em "Roboto Condensed", Arial;
  color: #000;
  margin-top: 20px;

  h1 {
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 908px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 375px) {
    h1 {
      font-size: 34px;
    }
  }
`;

export const StyledDataWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 65%;
  width: 641px;
  min-height: 111px;
  border-width: 0px 6px 6px 0px;
  border-style: solid;
  border-color: #edac2a;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 908px) {
    width: 464px;
    min-height: 71px;
    position: relative;
    top: auto;
    left: auto;
    margin-top: 30px;

    p {
      font-size: 28px;
    }
  }
  @media only screen and (max-width: 507px) {
    width: 100%;
    margin-bottom: 60px;
  }
`;

export const StyledImageWrapper = styled.div`
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

  @media only screen and (max-width: 375px) {
    height: 384px;
  }
`;

export const StyledDataImage = styled.div`
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
