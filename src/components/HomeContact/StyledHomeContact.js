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