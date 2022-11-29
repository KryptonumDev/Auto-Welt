import styled from "styled-components";

export const StyledTemplateExhibitions = styled.article`
  width: 100%;
  max-width: 1144px;
  margin: 30px auto 0;
  padding: 0 32px;
  scroll-behavior: smooth;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin-top: clamp(120px, 17vw, 150px);
  }
`;
