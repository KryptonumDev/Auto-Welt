import styled from "styled-components"
import { StyledLink } from "../Link/StyledLink"

export const StyledButtonLink = styled(StyledLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ hasborder }) => hasborder ? hasborder : "2px solid var(--primary500)"};
    outline: 0;
    background-color: ${({ bgcolor }) => bgcolor ? bgcolor : "var(--white)"};
    height: ${({ hasheight }) => hasheight ? hasheight : "auto"};
    padding: 10px 22px;
    transform: skew(-26deg);
    > span {
        display: inline-block;
        transform: skew(26deg);
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3em;
    }
`