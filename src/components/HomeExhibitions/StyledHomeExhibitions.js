import styled from "styled-components";

export const StyledHomeExhibitions = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: ${({ isaboutpage }) => (isaboutpage ? "0 auto 120px" : "120px auto")};
  padding: 0 32px;
  > h2 {
    align-self: flex-start;
  }
  @media only screen and (max-width: 1065px) {
    > a {
      font-size: 18px;
    }
    > h2 {
      align-self: center;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin: 60px auto;
    > h2 {
      font-size: 38px;
    }
  }
  @media only screen and (max-width: 685px) {
    > a {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 380px) {
    > a {
      width: 95%;
    }
  }
  @media only screen and (max-width: 375px) {
    > a {
      width: 95%;
      font-size: 15px;
    }
    > h2 {
      font-size: 34px;
    }
  }
`;
export const StyledElementsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
  margin-bottom: 40px;

  @media only screen and (max-width: 1080px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
