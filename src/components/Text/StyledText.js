import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledText = styled(motion.p)`
  font-size: ${({ hasdeclaredfontsize }) =>
    hasdeclaredfontsize ? hasdeclaredfontsize : "16px"};
  font-weight: ${({ hasdeclaredfontweight }) =>
    hasdeclaredfontweight ? hasdeclaredfontweight : "normal"};
  color: ${({ hasdeclaredfontcolor }) =>
    hasdeclaredfontcolor ? hasdeclaredfontcolor : "var(--black)"};
  letter-spacing: ${({ hasdeclaredletterspacing }) =>
    hasdeclaredletterspacing ? hasdeclaredletterspacing : "0"};
  line-height: ${({ hasdeclaredlineheight }) =>
    hasdeclaredlineheight ? hasdeclaredlineheight : "1"};
  font-family: ${({ hasdeclaredfontfamily }) =>
    hasdeclaredfontfamily ? hasdeclaredfontfamily : "Roboto Condensed, Arial"};
  text-decoration: ${({ hasdeclaredtextdecoration }) =>
    hasdeclaredtextdecoration ? hasdeclaredtextdecoration : "none"};
  display: ${({ hasdeclareddisplay }) =>
    hasdeclareddisplay ? hasdeclareddisplay : "block"};
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
  height: ${({ hasdeclaredheight }) =>
    hasdeclaredheight ? hasdeclaredheight : "auto"};
  overflow: ${({ hasoverflow }) => (hasoverflow ? hasoverflow : "visible")};
`;
