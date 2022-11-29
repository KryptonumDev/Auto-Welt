import styled from "styled-components";

export const StyledArticleTemplate = styled.article`
  width: 100%;
  max-width: 1144px;
  margin: 30px auto 0;
  padding: 0 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin: clamp(120px, 17vw, 150px) auto 0;
  }
`;
