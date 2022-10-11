import styled from "styled-components";

export const StyledModelCollection = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  border-top: 6px solid var(--secondary500);
  width: 100%;
`;
export const StyledImage = styled.div`
  min-height: 500px;
  width: 100%;
  img{
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 768px){
    min-height: 350px;
  }
  @media only screen and (max-width: 594px){
    min-height: 190px;
  }
`;
export const StyledTitle = styled.div`
  min-height: 120px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 594px){
    h2{
      font-size: 34px;
    }
  }
`;
export const StyledButtonSpace = styled.div`
  padding: 23px 0 54px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 594px){
    padding: 11px 20px 40px; 
    a{
      font-size: 15px;
      width: 100%;
    }
  }
`;
export const StyledTitleImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img{
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
`