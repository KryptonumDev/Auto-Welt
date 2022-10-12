import styled from "styled-components";

export const StyledShopInProgress = styled.section`
  width: 100%;
`;
export const StyledImagesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 142px;
  padding-bottom: 290px;
`;
export const StyledIconWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: -68px;
  transform: translateX(-60%);
  z-index: 1;
`;
export const StyledHeroImage = styled.div``;
export const StyledCarImage = styled.div`
  position: absolute;
  left: -180px;
  bottom: 0;
`;
export const StyledShopInfoWrapper = styled.div`
  margin-bottom: 120px;
`;
export const StyledTitleWrapper = styled.div`
  font: 48px/1.2em "Nocturne Serif";
  margin: 80px 0 8px;
  text-align: center;
  color: var(--primary500);
`
export const StyledSubTitleWrapper = styled.div`
  font: 24px/1.2em 'Roboto';
  text-align: center;
`
export const StyledDescription = styled.div`
  font: 24px/1.2em 'Roboto';
  margin: 80px 0 20px;
  text-align: center;
`
export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;

  @media only screen and (max-width: 768px){
    flex-direction: column;
    gap: 12px;
  }

  @media only screen and (max-width: 599px){
    width: 92%;
    a{
      width: 100%;
    }
  }
`