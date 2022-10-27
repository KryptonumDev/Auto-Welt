import styled from "styled-components";

export const StyledShopInProgress = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const StyledImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 92px;
  padding-bottom: 290px;

  @media only screen and (max-width: 768px) {
    margin-top: 170px;
  }
  
  @media only screen and (max-width: 434px) {
    padding-bottom: 210px;
  }
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: -68px;
  transform: translateX(-60%);
  z-index: 1;

  @media only screen and (max-width: 434px) {
    max-width: 83px;
    top: -20px;
  }
`;

export const StyledHeroImage = styled.div`
  @media only screen and (max-width: 768px) {
    max-width: 673px;
  }
  @media only screen and (max-width: 434px) {
    max-width: 324px;
  }
`;

export const StyledCarImage = styled.div`
  position: absolute;
  left: -180px;
  bottom: 0;

  @media only screen and (max-width: 768px) {
    max-width: 571px;
    bottom: 40px;
    left: -120px;
  }

  @media only screen and (max-width: 434px) {
    max-width: 395px;
    bottom: 10px;
    left: -110px;
  }
`;

export const StyledShopInfoWrapper = styled.div`
  margin-bottom: 120px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 48px/1.2em "Nocturne Serif";
  margin: -40px 0 8px;
  text-align: center;
  color: var(--primary500);

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 38px;
  }
  @media only screen and (max-width: 375px) {
    margin-top: 0;
    font-size: 34px;
  }

  p {
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
  }
`;

export const StyledSubTitleWrapper = styled.div`
  font: 24px/1.2em "Roboto Condensed";
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }

  p {
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
  }
`;

export const StyledDescription = styled.div`
  font: 24px/1.2em "Roboto Condensed";
  margin: 40px 0;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 685px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin: 40px auto;
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 599px) {
    width: 92%;
    a {
      width: 100%;
    }
  }

  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
`;
