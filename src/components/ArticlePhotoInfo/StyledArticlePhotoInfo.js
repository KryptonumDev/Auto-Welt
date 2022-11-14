import styled from "styled-components";

export const StyledArticlePhotoInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 60px 0 0;
  max-width: 505px;

  a {
    text-decoration: none;
    
    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 60px 0 0;
  }
`;

export const StyledTextWrapper = styled.a`
  text-decoration: none;
  font: normal 500 16px/1.2em "Roboto Condensed", Arial;
  color: #000;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  a, strong {
    font: normal 700 16px/1.2em "Roboto Condensed", Arial;
    text-decoration-line: underline;
    color: #23423d;
  }

  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
