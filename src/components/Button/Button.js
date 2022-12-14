/** @format */

import React from "react";

import {
    StyledButtonLink,
    StyledButtonLinkNoHref,
    StyledButtonParse,
} from "./StyledButtonLink";

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
    ariaLabel,
    isParse,
}) => {
    return (
        <>
            {whereGo ? (
                <StyledButtonLink
                    className='a'
                    to={whereGo}
                    hasborder={hasBorder}
                    bgcolor={bgColor}
                    hasdeclaredfontcolor={textColor}
                    hasdeclaredfontsize={hasFontSize}
                    hasdeclaredfontweight={
                        hasFontWeight ? hasFontWeight : "700"
                    }
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
            ) : !isParse ? (
                <StyledButtonLinkNoHref
                className='a'
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
            ) : (
                <StyledButtonParse
                className='a'
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
                    {text}
                </StyledButtonParse>
            )}
        </>
    );
};

export default Button;
