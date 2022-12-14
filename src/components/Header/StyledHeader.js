import styled from "styled-components";

export const StyledHeader = styled.header`
  width: calc(100% - 64px);
  margin: 20px auto 0;

  @media only screen and (max-width: 767px){
    width: calc(100% - 32px);
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: ${({ isopen }) => (isopen ? "flex" : "none")};
    height: 100vh;
    overflow-y: scroll;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: var(--primary800);
    flex-direction: column;
    min-height: 600px;
  }
`;

export const StyledLeftWrapper = styled.div`
  background: var(--primary500);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 20px;
  clip-path: polygon(0 0, 94.5% 0, 100% 100%, 0% 100%);
  max-width: 439px;
  width: 50%;

  a {
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

  @media only screen and (max-width: 768px) {
    width: 70%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
    gap: 30px;
    clip-path: none;
    background-color: transparent;
    align-self: flex-start;
    padding-right: 0;
    
    > a {
      width: 100%;
      font-size: 28px;
      text-align: right;
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

  a {
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

  @media only screen and (max-width: 768px) {
    background-color: transparent;
    width: 70%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
    gap: 30px;
    clip-path: none;
    align-self: flex-start;
    margin-top: 30px;

    > a {
      font-size: 28px;
      margin-left: 0;
      text-align: right;
      width: 100%;
    }
  }
`;

export const StyledLogoWrapper = styled.div`
  padding-top: 15px;
  position: relative;
  z-index: 2;

  > a {
    &:focus-visible {
      outline-style: solid;
      outline-color: #da9610;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
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
    display: ${({ isopen }) => (isopen ? "none" : "block")};
    position: absolute;
    top: 32px;
    left: 16px;
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

  a {
    > svg {
      width: 24px;
      height: 24px;
      fill: #faf1de;
      transition: fill 250ms linear;
    }

    &:hover {
      > svg {
        fill: #edab26;
      }
    }
  }

  @media only screen and (max-width: 1107px) {
    margin-left: 25px;
  }

  @media only screen and (max-width: 903px) {
    margin-left: 18px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    padding-right: 8px;
    gap: 20px;

    a {
      > svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
