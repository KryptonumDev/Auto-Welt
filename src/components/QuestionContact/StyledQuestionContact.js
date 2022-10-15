import styled from "styled-components";

export const StyledQuestionContact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 1144px;
  margin: 60px auto 80px auto;
  padding: 0 32px;
  @media only screen and (max-width: 768px){
    padding: 0 16px;
  }
`;
export const StyledInfoWrapper = styled.div`
  max-width: 621px;
  width: 100%;
  padding: 20px;
  min-height: 120px;
  height: 100%;
  transform: translateY(-40px);
  border-width: 0px 6px 6px 0px;
  border-style: solid;
  border-color: var(--primary500);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

  display: flex;
  gap: 15px;
  align-items: center;
  jusityf-content: center;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: 768px){
    max-width: 70%;
  }
  @media only screen and (max-width: 583px){
    max-width: 95%;
  }
  @media only screen and (max-width: 439px){
    > p {
      font-size: 13px;
    }
    > a {
      font-size: 15px;
      width: 100%;
    }
  }
  @media only screen and (max-width: 375px){
    padding-bottom: 30px;
  }
`;
export const StyledImageContactWrapper = styled.div`
  width: 100%;
`;
export const StyledImageInfoWrapper = styled.div`
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
    top: 0;
    left: 0;
  }
`