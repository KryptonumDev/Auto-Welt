import styled from "styled-components";

export const StyledArticlePhotoInfo = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 70px 0 0;
  text-decoration: none;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  @media only screen and (max-width: 768px) {
    margin: 60px 0 0;
  }
`;

export const StyledTextWrapper = styled.div`
  p {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 500;
    font-size: 16px !important;
    line-height: 1.2em;
    color: #000000;
    
    a, strong{
      font-family: 'Roboto Condensed';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.2em;
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
