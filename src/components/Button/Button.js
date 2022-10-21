import React from "react";

import { StyledButtonLink, StyledButtonLinkNoHref } from "./StyledButtonLink";

const Button = ({
  text,
  whereGo,
  hasBorder,
  bgColor,
  textColor,
  hasMaxWidth,
  hasFontSize,
  hasDeclaredPadding,
  hasFontWeight,
  hasTarget,
  hasDeclaredMinHeight,
  hoverBgColor,
  hasdeclaredmargin,
  onClickHandler
}) => {
  return (
    <>
      {whereGo ? (
        <StyledButtonLink
          to={whereGo}
          hasborder={hasBorder}
          bgcolor={bgColor}
          hasdeclaredfontcolor={textColor}
          hasdeclaredfontsize={hasFontSize}
          hasdeclaredfontweight={hasFontWeight ? hasFontWeight : "500"}
          hasdeclaredmaxwidth={hasMaxWidth}
          hasdeclaredpadding={hasDeclaredPadding}
          hasdeclaredminheight={hasDeclaredMinHeight}
          hasdeclaredhoverbgcolor={hoverBgColor}
          hasdeclaredmargin={hasdeclaredmargin}
          target={hasTarget}
        >
          <span>{text}</span>
        </StyledButtonLink>
      ) : (
        <StyledButtonLinkNoHref
          hasborder={hasBorder}
          bgcolor={bgColor}
          hasdeclaredfontcolor={textColor}
          hasdeclaredfontsize={hasFontSize}
          hasfontweight={hasFontWeight ? hasFontWeight : "500"}
          hasdeclaredmaxwidth={hasMaxWidth}
          hasdeclaredpadding={hasDeclaredPadding}
          hasdeclaredminheight={hasDeclaredMinHeight}
          hasdeclaredhoverbgcolor={hoverBgColor}
          hasdeclaredmargin={hasdeclaredmargin}
          onClick={onClickHandler}
        >
          <span>{text}</span>
        </StyledButtonLinkNoHref>
      )}
    </>
  );
};

export default Button;
