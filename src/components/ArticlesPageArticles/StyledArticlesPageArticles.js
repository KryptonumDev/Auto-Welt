import styled from "styled-components";

export const StyledArticlesPageArticles = styled.section`
  padding: 0 32px;
  max-width: 1144px;
  width: 100%;
  margin: 30px auto 0;

  @media only screen and (max-width: 768px) {
    margin: 130px auto 0;
    padding: 0 16px;
    > h1 {
      font-size: 38px;
    }
  }
  @media only screen and (max-width: 375px) {
    > h1 {
      font-size: 34px;
    }
  }
`;
export const StyledArticlesSlider = styled.div``;
export const StyledSlidesWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 44px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export const StyledPagginationWrapper = styled.div``;
export const StyledTopPaggination = styled.div``;
export const StyledBottomPaggination = styled.div``;
