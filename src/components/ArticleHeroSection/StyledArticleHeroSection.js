import styled from "styled-components";

export const StyledArticleHeroSection = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 375px){
    padding-bottom: 40px;
  }
`;

export const StyledImage = styled.div`
  width: 100%;

  .gatsby-image-wrapper {
    width: 100%;
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));
  }
`;

export const StyledTag = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 263px;
  height: 32px;
  display: flex;
  align-items: center;
  padding-left: 24px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledTagImage = styled.div`
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
  width: 95%;
  max-width: 714px;
  padding: 18px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0px 0px 6px 6px;
  border-style: solid;
  border-color: #edac2a;
  transform: translateY(-50%);
  position: relative;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));

  @media only screen and (max-width: 768px) {
    min-height: 141px;
  }

  @media only screen and (max-width: 440px) {
    transform: translateY(-20%);
  }
`;

export const StyledTitleWrapper = styled.div`
  text-align: center;
  line-height: 1.2em;
  color: #23423D;
  font-size: 48px;
  font-family: Nocturne Serif;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    font-size: 38px;
  }

  @media only screen and (max-width: 320px) {
    font-size: 28px;
  }
`

export const StyledTextImage = styled.div`
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
