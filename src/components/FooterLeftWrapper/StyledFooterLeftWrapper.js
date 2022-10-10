import styled from "styled-components";

export const StyledFooterLeftWrapper = styled.div`
  max-width: 295px;
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
`;
export const StyledContactWrapper = styled.div`
  width: 100%;
  margin-top: 48px;
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
      fill: #FAF1DE;
      width: 100%;
      height: 100%;
      transition: fill 250ms;
      &:hover{
        fill: #EDAC2A;
      }
    }
  }
`;
export const StyledAddressWrapper = styled.div`
  > div {
    p {
      font-wieght: 400;
    }
    &:first-child{
      p {
        font-wieght: 500;
      }
    }
  }
`
export const StyledTextKryptonum = styled.div`
  margin-top: 32px;
  color: #fff;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 21px;
  strong{
    font-weight: 600;
  }
`