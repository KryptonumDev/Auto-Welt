import styled from "styled-components";

export const StyledHomeRecommendations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1144px;
  margin: ${({ hasmargin }) => hasmargin ? "0 auto 120px auto" : "0"};
  padding: 0 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin-bottom: ${({ isaboutpage }) => (isaboutpage ? "0" : "60px")};

    > h2 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 462px) {
    padding: 0 16px;
  }

  @media only screen and (max-width: 375px) {
    > h2 {
      font-size: 34px;
    }
  }
`;

export const StyledRecommendationsWrapper = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
  }

  .slick-slider {
    width: 100%;
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
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 462px) {
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

export const StyledArrowWrapper = styled.button`
  width: 30px;
  height: 55px;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  border: none;
  background-color: transparent;
  display: ${({ arrowsize }) => arrowsize < 3 ? "none" : "block"};

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .light{
    display: none;
  }

  &.left{
    left: 0;
    transform: translateY(-50%) translateX(-100%);

    @media (max-width: 768px){
      transform: translateY(-50%) ;
    }

    @media (max-width: 462px){
      transform: translateY(-50%) translateX(-6px);
    }
  }

  &.right{
    right: 0;
    transform: translateY(-50%) translateX(100%);

    @media (max-width: 768px){
      transform: translateY(-50%) ;
    }

    @media (max-width: 462px){
      transform: translateY(-50%) translateX(6px);
    }
  }

  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media only screen and (max-width: 768px) {
    background-color: var(--primary500);
    width: 40px;
    height: 56px;
    padding: 6px;
    display: ${({ arrowsize }) => arrowsize < 2 ? "none" : "block"};

    .light{
      display: block;
    }

    .regular{
      display: none;
    }
  }

  @media only screen and (max-width: 462px) {
    background: transparent;

    .light{
      display: none;
    }

    .regular{
      display: block;
    }
  }
`;
