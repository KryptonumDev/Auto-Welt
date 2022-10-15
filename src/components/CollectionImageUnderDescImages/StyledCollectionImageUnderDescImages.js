import styled from "styled-components";

export const StyledCollectionImageUnderDescImages = styled.section`
  width: 100%;
  margin-top: 120px;
  position: relative;
  min-height: 600px;

  @media only screen and (max-width: 768px){
    margin-top: 60px;
    padding-left: 16px;
  }
  @media only screen and (max-width: 600px){
    min-height: 500px;
  }
  @media only screen and (max-width: 480px){
    min-height: 400px;
  }
  @media only screen and (max-width: 395px){
    min-height: 280px;
  }
  @media only screen and (max-width: 335px){
    min-height: 230px;
  }
`;
export const StyledTopImage = styled.div`
  transform: translateX(-6px);
`;
export const StyledBottomImage = styled.div`
  position: absolute;
  bottom: -50px;
  right: -300px;
  max-width: 971px;
  max-height: 633px;

  @media only screen and (max-width: 768px){
    max-width: 620px;
    max-height: 360px;
    bottom: 40px;
    right: -110px;
  }
  @media only screen and (max-width: 600px){
    bottom: -10px;
  }
  @media only screen and (max-width: 480px){
    bottom: -40px;
  }
  @media only screen and (max-width: 395px){
    bottom: -60px;
  }
  @media only screen and (max-width: 375px){
    bottom: -75px;
  }
  @media only screen and (max-width: 335px){
    bottom: -90px;
  }
`;
