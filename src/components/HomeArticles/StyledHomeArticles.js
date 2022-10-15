import styled from "styled-components";

export const StyledHomeArticles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 1144px;
  margin: ${({ iscollectionpage }) => iscollectionpage ? "120px auto" : "0 auto 120px auto"};
  padding: 0 32px;

  @media only screen and (max-width: 768px){
    padding: 0 16px;
    margin: ${({ iscollectionpage }) => iscollectionpage ? "60px auto" : "0 auto 60px auto"};
  }
`;
export const StyledArticlesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 21px;

  @media only screen and (max-width: 640px){
    flex-direction: column;
    align-items: center;
  }
`;
export const StyledButtonWrapper = styled.div`
  margin-top: 40px;
`;
