import styled from "styled-components";

export const StyledHomeArticles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1144px;
  margin: ${({ iscollectionpage }) =>
    iscollectionpage ? "120px auto 0" : "0 auto"};
  padding: 0 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin: ${({ iscollectionpage }) =>
      iscollectionpage ? "60px auto" : "0 auto 60px auto"};

    > h2 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 375px) {
    > h2 {
      font-size: 34px;
    }
  }
`;

export const StyledArticlesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ slides }) => slides === 1 ? "center" : "space-between"};
  gap: 21px;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 0 32px 120px;

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    padding: 0 16px 60px;
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 594px) {
    a {
      width: 70%;
    }
  }

  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
`;

export const StyledPaddingWrapper = styled.div`
  max-width: 1144px;
  padding: 0 32px;
  margin: 0 auto 120px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px 0 0;
    margin: 0 auto 60px;
  }
`;
