import styled from "styled-components"
import { StyledLink } from "../Link/StyledLink"

export const StyledButtonLink = styled(StyledLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ hasborder }) => hasborder ? hasborder : "2px solid var(--primary500)"};
    outline: 0;
    background-color: ${({ bgcolor }) => bgcolor ? bgcolor : "var(--white)"};
    color: ${({ textcolor }) => textcolor ? textcolor : "var(--primary500)"};
    height: ${({ hasheight }) => hasheight ? hasheight : "44px"};
    width: ${({ haswidth }) => haswidth ? haswidth : "200px"};
    transform: skew(-26deg);
    > span {
        display: inline-block;
        transform: skew(26deg);
    }
`