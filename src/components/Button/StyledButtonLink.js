import styled from "styled-components";
import { StyledLink } from "../Link/StyledLink";

export const StyledButtonLink = styled(StyledLink)`
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ hasborder }) =>
    hasborder ? hasborder : "0px solid transparent"};
  outline: 0;
  background: ${({ bgcolor }) => (bgcolor ? bgcolor : "var(--white)")};
  height: ${({ hasheight }) => (hasheight ? hasheight : "auto")};
  transform: skew(-26deg);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  flex: none;
  min-height: ${({ hasdeclaredminheight }) =>
    hasdeclaredminheight ? hasdeclaredminheight : "unset"};
  transition: background 250ms;
  > span {
    display: block;
    transform: skew(26deg);
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3em;
  }

  &:hover {
    background: ${({ hasdeclaredhoverbgcolor }) => hasdeclaredhoverbgcolor};
  }
`;

export const StyledButtonLinkNoHref = styled.p`
  -webkit-tap-highlight-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ hasdeclaredfontsize }) =>
    hasdeclaredfontsize ? hasdeclaredfontsize : "21px"};
  border: ${({ hasborder }) =>
    hasborder ? hasborder : "2px solid var(--primary500)"};
  outline: 0;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "var(--white)")};
  height: ${({ hasheight }) => (hasheight ? hasheight : "auto")};
  padding: ${({ hasdeclaredpadding }) =>
    hasdeclaredpadding ? hasdeclaredpadding : "0"};
  transform: skew(-26deg);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  color: ${({ hasdeclaredfontcolor }) =>
    hasdeclaredfontcolor ? hasdeclaredfontcolor : "#000"};
  max-width: ${({ hasdeclaredmaxwidth }) =>
    hasdeclaredmaxwidth ? hasdeclaredmaxwidth : "unset"};
  min-height: ${({ hasdeclaredminheight }) =>
    hasdeclaredminheight ? hasdeclaredminheight : "unset"};
  transition: background-color 250ms;
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  font-family: "Roboto";
  > span {
    display: block;
    transform: skew(26deg);
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3em;
    font-weight: ${({ hasfontweight }) =>
      hasfontweight ? hasfontweight : "500"};
  }
  &:hover {
    background-color: ${({ hasdeclaredhoverbgcolor }) =>
      hasdeclaredhoverbgcolor};
  }
`;
