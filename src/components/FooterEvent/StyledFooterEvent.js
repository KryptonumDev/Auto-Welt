import styled from "styled-components";
import { Link } from "gatsby";

export const StyledFooterEvent = styled(Link)`
  width: 100%;
  height: 122px;
  background: var(--background500);
  border-left: 6px solid var(--secondary500);
  display: flex;
  text-decoration: none;

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

export const StyledFooterEventContent = styled.div`
  padding: 12px 12px;
  width: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;  
  }
`;

export const StyledFooterEventImage = styled.div`
  width: 120px;
  min-height: 122px;

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
`;
