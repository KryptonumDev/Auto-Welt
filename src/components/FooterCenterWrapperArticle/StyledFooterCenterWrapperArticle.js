import styled from "styled-components";
import { Link } from "gatsby";

export const StyledFooterCenterWrapperArticle = styled(Link)`
  width: 100%;
  border-bottom: 4px solid var(--secondary500);
  margin-bottom: 12px;
  display: block;
  text-decoration: none;
`;
export const StyledTop = styled.div`
  width: 100%;
  min-height: 85px;
  img {
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
export const StyledBottom = styled.div`
  width: 100%;
  background-color: var(--background500);
  flex: 1;
  padding: 17px 18px;
`;
