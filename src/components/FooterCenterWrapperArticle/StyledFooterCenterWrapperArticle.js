import styled from "styled-components";
import { Link } from "gatsby";

export const StyledFooterCenterWrapperArticle = styled(Link)`
  width: 100%;
  border-bottom: 4px solid var(--secondary500);
  margin-bottom: 12px;
  display: block;
  text-decoration: none;
  color: #23423D;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  &:hover {
    > div {
      &:nth-child(1) {
        img {
          transition: transform 250ms linear, mix-blend-mode 250ms linear;
          transform: scale(1.1);
          mix-blend-mode: unset;
        }
      }
    }
  }
`;

export const StyledTop = styled.div`
  width: 100%;
  height: 85px;

  img {
    width: 100%;
    height: 100%;
    mix-blend-mode: multiply;

    &:not(:hover) {
      transition: transform 250ms linear, mix-blend-mode 250ms linear;
    }
  }
  
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px){
    height: 120px;
  }
`;

export const StyledBottom = styled.div`
  width: 100%;
  background-color: var(--background500);
  flex: 1;
  padding: 17px 18px;

  font-size: 16px;
  line-height: 1.2em;
  color: var(--primary500);
  font-weight: 700;
  font-family: "Roboto Condensed";
  color: #23423D;
`;
