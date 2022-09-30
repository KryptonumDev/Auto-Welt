import styled from "styled-components"
import { StyledLink } from "../Link/StyledLink"

export const StyledButtonLink = styled(StyledLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ hasborder }) =>
        hasborder ? hasborder : "2px solid var(--primary500)"};
    outline: 0;
    background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "var(--white)")};
    height: ${({ hasheight }) => (hasheight ? hasheight : "auto")};
    padding: 10px 22px;
    transform: skew(-26deg);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    > span {
        display: inline-block;
        transform: skew(26deg);
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3em;
    }
`;

export const StyledButtonLinkNoHref = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ hasborder }) =>
        hasborder ? hasborder : "2px solid var(--primary500)"};
    outline: 0;
    background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "var(--white)")};
    height: ${({ hasheight }) => (hasheight ? hasheight : "auto")};
    padding: 10px 22px;
    transform: skew(-26deg);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    color: ${({ hasdeclaredfontcolor }) => hasdeclaredfontcolor ? hasdeclaredfontcolor : "#000"};
    > span {
        display: inline-block;
        transform: skew(26deg);
        text-transform: uppercase;
        text-align: center;
        line-height: 1.3em;
    }
`;