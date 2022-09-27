import styled from "styled-components"
import { Link } from "gatsby"

export const StyledLink = styled(Link)`
  font-size: ${({ hasdeclaredfontsize }) =>
    hasdeclaredfontsize ? hasdeclaredfontsize : "16px"};
  font-weight: ${({ hasdeclaredfontweight }) =>
    hasdeclaredfontweight ? hasdeclaredfontweight : "normal"};
  color: ${({ hasdeclaredfontcolor }) =>
    hasdeclaredfontcolor ? hasdeclaredfontcolor : "var(--black)"};
  letter-spacing: ${({ hasdeclaredletterspacing }) =>
    hasdeclaredletterspacing ? hasdeclaredletterspacing : "0"};
  line-height: ${({ hasdeclaredlineheight }) =>
    hasdeclaredlineheight ? hasdeclaredlineheight : "1em"};
  font-family: ${({ hasdeclaredfontfamily }) =>
    hasdeclaredfontfamily ? hasdeclaredfontfamily : "Roboto"};
  text-decoration: ${({ hasdeclaredtextdecoration }) =>
    hasdeclaredtextdecoration ? hasdeclaredtextdecoration : "none"};
  text-transform: ${({ hasdeclaredtexttransform }) =>
    hasdeclaredtexttransform ? hasdeclaredtexttransform : "none"};
  transform: ${({ hasdeclaredtransform }) =>
    hasdeclaredtransform ? hasdeclaredtransform : "translate(0,0)"};
  text-align: ${({ hasdeclaredtextalign }) =>
    hasdeclaredtextalign ? hasdeclaredtextalign : "left"};
  padding: ${({ hasdeclaredpadding }) =>
    hasdeclaredpadding ? hasdeclaredpadding : "0"};
  margin: ${({ hasdeclaredmargin }) =>
    hasdeclaredmargin ? hasdeclaredmargin : "0"};
  max-width: ${({ hasdeclaredmaxwidth }) =>
    hasdeclaredmaxwidth ? hasdeclaredmaxwidth : "unset"};
  position: relative;
  cursor: pointer;
`