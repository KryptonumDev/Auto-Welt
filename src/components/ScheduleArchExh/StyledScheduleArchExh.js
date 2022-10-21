import styled from "styled-components";

export const StyledScheduleArchExh = styled.section`
  width: 100%;
  max-width: 1144px;
  padding: 0 32px;
  margin: 120px auto;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin: 60px auto;
    > h2 {
      font-size: 38px;
    }
  }
  @media only screen and (max-width: 375px){
    > h2 {
      font-size: 34px;
    }
  }
`;
export const StyledElements = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
export const StyledbuttonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 648px) {
    flex-direction: column;
    gap: 12px;
    a {
      width: 95%;
    }
  }

  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
`;
export const StyledElement = styled.div`
  border-top: 6px solid #23423D;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  min-height: 372px;

  @media only screen and (max-width: 648px){
    flex-direction: column;
  }
`;
export const StyledImage = styled.div`
  height: 100%;
  width: 409px;
  min-height: 372px;
  img{
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 920px){
    width: 269px;
  }
  @media only screen and (max-width: 648px){
    width: 100%;
    height: auto;
    min-height: 210px;
  }
`;
export const StyledInfoWrapper = styled.div`
  width: calc(100% - 409px);
  padding: 42px;
  position: relative;
  height: 100%;
  min-height: 372px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: 920px){
    width: calc(100% - 269px);
  }
  @media only screen and (max-width: 648px){
    width: 100%;
  }
`;
export const StyledDataWrapper = styled.div`
  padding-bottom: 16px;
`;
export const StyledContentWrapper = styled.div``
export const StyledContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 14px;
  width: 100%;
  position: relative;
  z-index: 1;
  > div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    > svg {
      flex-shrink: 0;
      margin-right: 8px;
    }
  }
`
export const StyledButtonWrapper = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  @media only screen and (max-width: 648px){
    align-self: center;
  }
`
export const StyledBgWrapper = styled.div`
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