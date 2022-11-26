import styled from "styled-components";

export const StyledAboutMeHeroSection = styled.section`
  width: 100%;
  display: flex;
  margin: 100px auto 120px auto;
  gap: 60px;
  padding: 0 32px;
  max-width: 1144px;

  @media only screen and (max-width: 768px) {
    margin-top: clamp(100px, 17vw, 120px);
    margin-bottom: 60px;
    padding: 0 16px;
  }

  @media only screen and (max-width: 670px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const StyledImagesWrapper = styled.div`
  width: 50%;
  margin-top: 30px;

  @media only screen and (max-width: 670px) {
    width: 100%;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 670px) {
    width: 100%;
  }
`;

export const StyledTitleWrapper = styled.div`
  font: 400 48px/1.2em "Nocturne Serif";
  color: #233532;

  @media only screen and (max-width: 1036px) {
    font-size: 38px;
  }

  @media only screen and (max-width: 450px) {
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
        height: 0.5em;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: inline-block;
      }
    }
  }
`;

export const StyledSubTitleWrapper = styled.div`
  font: 400 28px/1.2em "Nocturne Serif";
  color: #23423d;
  margin-top: 10px;

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
        height: 0.5em;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: inline-block;
      }
    }
  }

  @media only screen and (max-width: 1036px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 816px) {
    font-size: 24px;
  }
`;

export const StyledDescWrapper = styled.div`
  font: 400 24px/1.2em "Roboto Condensed";
  color: #000;
  margin: 30px 0 42px;

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
        height: 0.5em;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: inline-block;
      }
    }
  }

  @media only screen and (max-width: 1036px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 816px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

export const StyledButtonWrapper = styled.div`
  a {
    margin-left: 15px;
  }

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 438px) {
    width: 95%;
    align-self: center;

    a {
      width: 100%;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
`;

export const StyledTopImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const StyledBottomImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transform: translateY(-80px);
`;

export const StyledTopPlaster = styled.div`
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const StyledTopImage = styled.div``;

export const StyledBottomPlaster = styled.div`
  position: absolute;
  top: -40px;
  left: 30%;
  z-index: 1;
`;

export const StyledBottomImage = styled.div``;
