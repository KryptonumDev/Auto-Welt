import styled from "styled-components";

export const StyledArticlePhotoInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 70px 0 0;
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

export const StyledTextWrapper = styled.div`
  p {
    color: #000;
    font: normal 500 16px/1.2em 'Roboto Condensed', Arial !important;
    
    a, strong{
      font: normal 500 16px/1.2em 'Roboto Condensed', Arial !important;
      text-decoration-line: underline;
      color: #23423D;
      transition: color 250ms linear;

      &:hover {
        color: var(--secondary300);
      }
  
      &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: #da9610;
      }
    }
  }
`;
