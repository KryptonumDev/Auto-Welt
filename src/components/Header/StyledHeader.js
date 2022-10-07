import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin-top: 20px;
`;
export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const StyledLeftWrapper = styled.div`
  background: var(--primary500);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  height: 42px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  clip-path: polygon(0 0, 94.5% 0, 100% 100%, 0% 100%);
  max-width: 439px;
  width: 50%;
  @media only screen and (max-width: 1107px) {
    width: 100%;
    justify-content: space-evenly;
    padding-left: 0;
    > a {
      margin: 0;
    }
  }

  @media only screen and (max-width: 998px) {
    > a {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 903px) {
    > a {
      font-size: 12px;
    }
  }
`;
export const StyledRightWrapper = styled.div`
  background: var(--primary500);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  height: 42px;
  display: flex;
  align-items: center;
  padding-right: 50px;
  clip-path: polygon(5.5% 0, 100% 0, 100% 100%, 0% 100%);
  max-width: 439px;
  width: 50%;
  @media only screen and (max-width: 1107px) {
    width: 100%;
    justify-content: space-evenly;
    padding-right: 0;
  }

  @media only screen and (max-width: 998px) {
    > a {
      font-size: 14px;
      margin-left: 25px;
    }
  }

  @media only screen and (max-width: 903px) {
    > a {
      font-size: 12px;
      margin-left: 18px;
    }
  }
`;
export const StyledLogoWrapper = styled.div`
  padding-top: 15px;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 32px;
    left: 32px;
    z-index: 2;
  }
`;
export const StyledLogoMobileWrapper = styled.div`
  display: none;
  width: 158px;
  height: 63px;
  svg {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 32px;
    left: 32px;
    z-index: 2;
  }
  @media only screen and (max-width: 375px) {
    width: 150px;
    height: 59px;
    top: 22px;
    left: 16px;
  }
`;
export const StyledIconsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 55px;
  > svg {
    width: 24px;
    height: 24px;
  }

  @media only screen and (max-width: 1107px) {
    margin-left: 25px;
  }
  @media only screen and (max-width: 903px) {
    margin-left: 18px;
  }
`;
