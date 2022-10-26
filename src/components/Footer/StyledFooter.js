import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 700px;
  display: flex;
  position: relative;
  z-index: 1;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledFooterMainWrapper = styled.div`
  width: 100%;
  max-width: 1112px;
  margin: 0 auto;
  padding: 52px 16px 89px 16px;
  position: relative;
  z-index: 1;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding-top: 70px;
  }
`;
