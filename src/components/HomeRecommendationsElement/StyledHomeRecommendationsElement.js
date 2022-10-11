import styled from "styled-components";

export const StyledHomeRecommendationsElement = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  border-width: 0px 0px 5px 5px;
  border-style: solid;
  border-color: var(--borderTopOrange);

  width: 49%;
  max-width: 438px;
  min-height: 228px;
  background: var(--creamBg);
  padding: 43px;
  position: relative;

  a{
    text-decoration: none;
    color: var(--primary500);
    font: 500 16px/19px "Roboto";
  }

  @media only screen and (max-width: 599px){
    width: 96%;
    max-width: unset;
  }
`;

export const StyledImageWrapper = styled.div`
  position: absolute;
  right: 34px;
  top: 20px;

  @media only screen and (max-width: 768px){
    top: 16px;
    right: 8px;
  }
`;
