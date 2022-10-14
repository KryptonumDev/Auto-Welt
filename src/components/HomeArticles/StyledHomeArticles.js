import styled from "styled-components";

export const StyledHomeArticles = styled.section`
  width: 100%;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ iscollectionpage }) => iscollectionpage ? "120px" : "0"};
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
