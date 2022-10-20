import styled from "styled-components";

export const StyledHamburgerButton = styled.button`
  display: none;

  @media only screen and (max-width: 768px) {
    position: ${({ isopen }) => (isopen ? "fixed" : "absolute")};
    z-index: 3;
    right: 16px;
    top: 33px;
    cursor: pointer;
    border: 0;
    width: 70px;
    height: 38px;
    background-color: var(--primary500);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
    display: flex;
    justify-content: flex-end;
    transition: all 250ms;
  }
  @media only screen and (max-width: 375px) {
    right: 16px;
  }
`;

export const StyledHamburgerBox = styled.span`
  width: 38px;
  height: 38px;
  display: inline-block;
  position: relative;
`;
export const StyledHamburgerInner = styled.span`
  width: 30px;
  height: 2px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-2px, -50%);
  transition: background-color 50ms ease-in-out;
  background-color: ${({ hamburger }) =>
    hamburger ? "transparent" : "var(--secondary500)"};
  border-radius: 2px;
  &::after {
    content: "";
    right: 0;
    width: 36px;
    height: 2px;
    position: absolute;
    background-color: var(--secondary500);
    top: 8px;
    transition: transform 100ms ease-in-out;
    border-radius: 3px;
    transform: ${({ hamburger }) =>
      hamburger
        ? "translateY(-8px) rotate(-135deg)"
        : "translateY(0) rotate(0)"};
  }
  &::before {
    content: "";
    right: 0;
    width: 25px;
    height: 2px;
    position: absolute;
    background-color: var(--secondary500);
    top: -8px;
    transition: transform 100ms ease-in-out;
    border-radius: 2px;
    transform: ${({ hamburger }) =>
      hamburger ? "translateY(8px) rotate(135deg)" : "translateY(0) rotate(0)"};
  }
`;
