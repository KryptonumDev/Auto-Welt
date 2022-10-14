import styled from "styled-components";

export const StyledFooterCenterWrapper = styled.div`
  max-width: 294px;
  @media only screen and (max-width: 768px){
    width: 42%;
    max-width: unset;
    order: 2;
    margin-top: 60px;
  }
  @media only screen and (max-width: 700px){
    width: 40%;
  }
  @media only screen and (max-width: 500px){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 51px;
    > div {
      > p{
        text-align: center;
      }
    }
  }
`;
export const StyledFastLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  a{
    margin-right: 30px;
  }
  @media only screen and (max-width: 500px){
    justify-content: space-evenly;
    gap: 10px;
    a{
      margin-right: 10px;
    }
  }
`;
export const StyledArticlesWrapper = styled.div`
  width: 100%;
`;
