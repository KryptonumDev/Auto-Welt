import styled from "styled-components";

export const StyledHomeCollectionElement = styled.div`
  position: relative;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1065px){
    a{
      font-size: 18px;
      max-width: 289px;
    }
  }
  @media only screen and (max-width: 685px){
    max-width: 339px;
    a{
      font-size: 15px;
    }
  }
`;
export const StyledBackground = styled.div`
  width: 294px;
  height: 192px;
  margin-bottom: 53px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const StyledImage = styled.div`
  width: 294px;
  height: 192px;
  position: absolute;
  top: 23px;
  left: 23px;

  img {
    width: 100%;
    height: 100%;
  }
`;
