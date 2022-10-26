import styled from "styled-components";

export const StyledFooterLeftWrapper = styled.div`
  max-width: 295px;
  @media only screen and (max-width: 768px){
    width: 100%;
    max-width: unset;
    display: flex;
    justify-content: space-between;
    > div {
      width: 42%;
      &:first-child{
        width: 55%;
      }
    }
  }
  @media only screen and (max-width: 500px){
    width: 100%;
    flex-wrap: wrap;
    order 1;
    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      &:first-child{
        width: 100%;
      }
    }
  }
`;
export const StyledLogoWrapper = styled.div`
  width: 100%;
  max-width: 268px;
  height: 117px;
  > a {
    width: 100%;
    height: 100%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
export const StyledSubLogoText = styled.div`
  width: 100%;
  margin-top: 32px;
  font: 300 18px/1.2em;
  color: #faf6ee;
  font-family: "Roboto Condensed";

  strong{
    font-weight: 300;
    color: #EDAC2A;
  }

  @media only screen and (max-width: 500px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;
export const StyledContactWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
  @media only screen and (max-width: 500px) {
    > div {
      p {
        text-align: center;
      }
    }
  }
`;
export const StyledIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  gap: 30px;
  > a {
    width: 42px;
    height: 42px;
    > svg {
      fill: #faf1de;
      width: 100%;
      height: 100%;
      transition: fill 250ms linear;
      &:hover {
        fill: #edac2a;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    justify-content: center;
    > a {
      svg {
        width: 48px;
        height: 48px;
      }
    }
  }
`;
export const StyledAddressWrapper = styled.div`
  > div {
    p {
      font-wieght: 400;
    }
    &:first-child {
      p {
        font-wieght: 500;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    > div {
      p {
        text-align: center;
      }
    }
  }
`;
export const StyledTextKryptonum = styled.div`
  margin-top: 32px;
  color: #fff;
  font-family: "Roboto Condensed";
  font-weight: 400;
  line-height: 21px;
  strong {
    font-weight: 600;
  }
`;
