import styled from "styled-components";

export const StyledArticleCustomQuote = styled.div`
  width: 100%;
  background: #faf6ee;
  border-width: 6px 0px 0px 6px;
  border-style: solid;
  border-color: #edac2a;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  padding: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin: 40px 0 !important;
`;

export const StyledIconWrapper = styled.div``;

export const StyledTextWrapper = styled.div`
  font: normal 500 28px/1.2em "Nocturne Serif";
  text-align: center;
  color: #23423d;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
