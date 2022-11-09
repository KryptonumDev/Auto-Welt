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
  onClickHandler,
  hasType,
  hasNotTabIndex,
  ariaLabel
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
          hasdeclaredfontweight={hasFontWeight ? hasFontWeight : "700"}
          hasdeclaredmaxwidth={hasMaxWidth}
          hasdeclaredpadding={hasDeclaredPadding}
          hasdeclaredminheight={hasDeclaredMinHeight}
          hasdeclaredhoverbgcolor={hoverBgColor}
          hasdeclaredmargin={hasdeclaredmargin}
          target={hasTarget}
          aria-label={ariaLabel}
        >
          <span>{text}</span>
        </StyledButtonLink>
      ) : (
        <StyledButtonLinkNoHref
          aria-label={ariaLabel}
          hasborder={hasBorder}
          bgcolor={bgColor}
          hasdeclaredfontcolor={textColor}
          hasdeclaredfontsize={hasFontSize}
          hasfontweight={hasFontWeight ? hasFontWeight : "700"}
          hasdeclaredmaxwidth={hasMaxWidth}
          hasdeclaredpadding={hasDeclaredPadding}
          hasdeclaredminheight={hasDeclaredMinHeight}
          hasdeclaredhoverbgcolor={hoverBgColor}
          hasdeclaredmargin={hasdeclaredmargin}
          onClick={onClickHandler}
          type={hasType}
          tabIndex={hasNotTabIndex ? "-1" : "0"}
        >
          <span>{text}</span>
        </StyledButtonLinkNoHref>
      )}
    </>
  );
};

export default Button;
