import styled from "styled-components";

export const StyledMainChildren = styled.div`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 32px;
  @media only screen and (max-width: 768px){
    padding: 0 16px;
  }
`;
export const StyledOverflowWrapper = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
`;