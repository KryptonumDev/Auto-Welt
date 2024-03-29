import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const StyledCollectionTemplateHeroImage = styled.section`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1065px) {
    > a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: clamp(100px, 17vw, 150px);
    padding-left: 16px;

    > a {
      margin-top: -20px;
    }
  }

  @media only screen and (max-width: 685px) {
    > a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 588px) {
    > a {
      width: 95%;
    }
  }

  @media only screen and (max-width: 375px) {
    > a {
      font-size: 15px;
      margin-top: 0;
    }
  }
`;

export const StyledGatsbyImage = styled(GatsbyImage)``;

export const StyledHeroImage = styled.div`
  width: 100%;
  filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));

  @media only screen and (max-width: 768px) {
    max-height: 428px;
  }
`;

export const StyledTitleWrapper = styled.div`
  width: 90%;
  max-width: 845px;
  min-height: 131px;
  transform: translateY(-50%);
  position: relative;

  h1 {
    width: 100%;
    min-height: 131px;
    font: 48px "Nocturne Serif";
    position: relative;
    text-align: center;
    padding: 16px;
    color: #fff;

    strong,
    em {
      color: #edac2a;
      font-weight: normal;
      font-style: normal;
    }

    @media only screen and (max-width: 768px) {
      font-size: 38px;
    }

    @media only screen and (max-width: 640px) {
      font-size: 34px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 28px;
    }
    @media only screen and (max-width: 420px) {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 83px;
    max-width: 595px;
    width: 87%;

    > h1 {
      min-height: 83px;
      font-size: 34px;
    }
  }

  @media only screen and (max-width: 440px){
    transform: translateY(-30%);
  }

  @media only screen and (max-width: 375px){
    transform: translateY(-10%);
  }
`;

export const StyledTitleImageWraper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
