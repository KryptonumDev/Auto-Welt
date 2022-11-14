import styled from "styled-components";
import { Link } from "gatsby";

export const StyledModelCollection = styled(Link)`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  border-top: 6px solid var(--secondary500);
  width: 100%;
  text-decoration: none;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }
`;

export const StyledImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const StyledTitle = styled.div`
  min-height: 120px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary500);
  padding: 10px 20px;
  text-align: center;
  font: 500 48px/1.2em "Nocturne Serif";

  p, h2 {
    position: relative;
    z-index: 1;
  }

  @media only screen and (max-width: 594px) {
    p {
      font-size: 34px;
    }
  }

  @media only screen and (max-width: 375px) {
    p {
      font-size: 30px;
    }
  }
`;

export const StyledButtonSpace = styled.div`
  padding: 23px 0 54px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 594px) {
    a {
      font-size: 15px;
    }
  }
`;

export const StyledTitleImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
