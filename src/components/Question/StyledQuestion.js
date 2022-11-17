import styled from "styled-components";

export const StyledQuestion = styled.details`
  width: 100%;
  trainsition: padding 250ms;
  cursor: pointer;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 0;
  }

  &[open]{
    svg{
      transform: rotateZ(180deg);
    }
  }
`;

export const StyledAnswerWrapper = styled.div`
  width: 80%;
  padding: 0 59px 0 68px;
  max-width: 746px;
  margin-top: 20px;
  font: 500 18px/1.2em "Roboto Condensed", Arial;

  ul,
  ol {
    margin-left: 20px;
  }

  p {
    strong,
    em {
      color: #edac2a;
      font-weight: normal;
      font-style: normal;
    }
  }

  @media only screen and (max-width: 768px) {
    color: #23423d;
    font-size: 16px;
  }

  @media only screen and (max-width: 420px) {
    padding: 0 23px 0 23px;
    max-width: 90%;
  }

  @media only screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

export const StyledQuestionWrapper = styled.summary`
  display: flex;
  align-items: center;
  gap: 17px;
  min-height: 59px;
  padding: 18px 23px;
  position: relative;


  &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }
    
  > svg {
    position: relative;
    z-index: 1;
    transition: transform 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;

export const StyledBgWrapper = styled.div`
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
export const StyledQuestionText = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  font: 700 18px/1.2em "Roboto Condensed", Arial;
  color: #fff;
  max-width: 70%;

  p {
    strong,
    em {
      color: #edac2a;
    }
  }

  @media only screen and (max-width: 375px) {
    font-size: 15px;
  }
`;
