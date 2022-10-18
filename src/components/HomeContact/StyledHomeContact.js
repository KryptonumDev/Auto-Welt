import styled from "styled-components";

export const StyledHomeContact = styled.section`
  border-top: 6px solid var(--secondary500);
  width: calc(100% - 32px);
  min-height: 659px;
  margin-bottom: 120px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  background-color: var(--creamBg);
  margin-left: 30px;

  @media only screen and (max-width: 972px){
    flex-direction: column;
    align-self: right;
    max-width: 621px;
    max-height: unset;
  }
  @media only screen and (max-width: 768px){
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 751px){
    width: 87%;
    max-width: unset;
  }
`;
export const StyledLeftWrapper = styled.div`
  max-width: 410px;
  width: 100%;
  min-height: 659px;
  height: 100%;
  position: relative;
  @media only screen and (max-width: 972px){
    max-width: unset;
  }
  @media only screen and (max-width: 657px){
    min-height: 410px;
  }
`;
export const StyledRightWrapper = styled.div`
  width: calc(100% - 410px);
  height: 100%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 972px){
    width: 100%;
  }
`;
export const StyledHeading = styled.div`
  width: 100%;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const StyledModel = styled.div`
  width: 584px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 972px){
    width: 732px;
  }
  @media only screen and (max-width: 751px){
    width: 110%;
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
  .gatsby-image-wrapper-constrained{
    display: block;
  }
`
export const StyledContactWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 32px;
  @media only screen and (max-width: 972px){
    justify-content: flex-end;
    padding: 0 16px;
  }
`
export const StyledMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 74px;
  height: 100%;
  min-height: 345px;

  @media only screen and (max-width: 972px){
    padding: 61px 67px;
  }
  @media only screen and (max-width: 592px){
    padding: 61px 26px;
  }
`
export const StyledTitle = styled.div`
  font: 400 36px/1.2rem 'Nocturne Serif';
  color: #23423D;

  @media only screen and (max-width: 375px){
    font-size: 34px;
  }
`
export const StyledSubTitle = styled.div`
  font: 400 24px/1.2em 'Nocturne Serif';
  color: #1D2B29;
  margin-top: 10px;
  @media only screen and (max-width: 375px){
    font-size: 22px;
  }
`
export const StyledDesc = styled.div`
  font: 400 20px/1.4em 'Roboto';
  color: #000;
  margin-top: 20px;
  @media only screen and (max-width: 375px){
    font-size: 16px;
  }
`
export const StyledButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media only screen and (max-width: 1065px){
    a, p{
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 685px){
    a, p{
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 592px){
    width: 100%;
    align-items: center;
    a, p{
      width: 95%;
    }
  }
  @media only screen and (max-width: 375px){
    a, p{
      font-size: 15px;
    }
  }
`