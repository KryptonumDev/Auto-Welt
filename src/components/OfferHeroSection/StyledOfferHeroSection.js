import styled from "styled-components";

export const StyledOfferHeroSection = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 37px auto 0;
  padding: 0 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin-top: 130px;
  }
`;

export const StyledTimeInfo = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 6px solid #23423d;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;

  @media only screen and (max-width: 908px) {
    flex-direction: column;
    padding: 68px;
  }

  @media only screen and (max-width: 668px) {
    padding: 40px 25px;
  }
`;

export const StyledBgWrapper = styled.div`
  position: absolute;
  top: -3px;
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

export const StyledImagesWrapper = styled.div`
  width: 456px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  div {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 908px) {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 17px;

    > div {
      &:first-child,
      &:nth-child(2) {
        width: calc(50% - 10px);
      }

      &:last-child {
        width: 100%;
        max-height: 349px;

        img {
          width: 100%;
          height: 100%;
        }

        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 584px) {
    gap: 9px;

    > div {
      &:first-child,
      &:nth-child(2) {
        width: calc(50% - 5px);
      }
    }
  }
`;

export const StyledTextWrapper = styled.div`
  width: calc(100% - 456px);
  padding: 63px 87px 54px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 1152px) {
    padding: 40px;
  }

  @media only screen and (max-width: 1052px) {
    h2 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 908px) {
    width: 100%;
    padding: 0;

    h2 {
      margin-top: 40px;
    }
  }

  @media only screen and (max-width: 375px) {
    h2 {
      font-size: 34px;
    }
  }
`;

export const StyledMoreInfoWrapper = styled.div`
  font-size: 24px;
  font-family: "Roboto Condensed", Arial;
  line-height: 1.2em;

  @media only screen and (max-width: 1052px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 908px) {
    font-size: 24px;
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
        height: 0.5em;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: inline-block;
      }
    }
  }
  
  a{
    color: rgba(35, 66, 61, 1);
    transition: color 250ms linear;
    
    &:hover {
      color: var(--secondary300);
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
    }
  }
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 40px;

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

  @media only screen and (max-width: 375px) {
    width: 100%;
    display: flex;
    justify-content: center;

    a {
      margin-left: 0;
      width: 95%;
      font-size: 15px;
    }
  }
`;
