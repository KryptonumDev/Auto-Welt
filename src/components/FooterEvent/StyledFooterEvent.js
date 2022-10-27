import styled from "styled-components";
import { Link } from "gatsby";

export const StyledFooterEvent = styled(Link)`
  width: 100%;
  min-height: 122px;
  background: var(--background500);
  border-left: 6px solid var(--secondary500);
  display: flex;
  text-decoration: none;
`;

export const StyledFooterEventContent = styled.div`
  padding: 35px 12px;
  width: calc(100% - 120px);
`;

export const StyledFooterEventImage = styled.div`
  width: 120px;
  min-height: 122px;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
