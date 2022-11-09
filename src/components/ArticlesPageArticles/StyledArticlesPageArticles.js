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

export const StyledPagginationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const StyledTopPaggination = styled.div`
  display: flex;
  gap: 20px;

  font-family: "Nocturne Serif", Arial;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 1.2em;

  > div {
    cursor: pointer;
  }
`;

export const StyledBottomPaggination = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  gap: 20px;
`;

export const StyledLeftArrow = styled.div``;

export const StyledRightArrow = styled.div``;

export const StyledInput = styled.div`
  input {
    width: 49px;
    height: 51px;
    background: #faf7f1;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    border: none;
    padding-left: 5px;
    font-family: "Roboto Condensed", Arial;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
    }

    &:active {
      background: #e9e4d6;
    }

    &:hover {
      background: #faf7f1;
    }
  }
`;

export const StyledButton = styled.button`
  font-family: "Roboto Condensed", Arial;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-decoration-line: underline;
  color: #23423d;
  border: none;
  background: none;
  cursor: pointer;

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
  }
`;
