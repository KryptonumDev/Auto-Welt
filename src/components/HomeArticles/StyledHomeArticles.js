import styled from "styled-components";

export const StyledHomeArticles = styled.section`
  width: 100%;
  margin-bottom: 120px;
  margin-top: ${({ iscollection }) => (iscollection ? "120px" : "0")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledArticlesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 21px;
`;
export const StyledButtonWrapper = styled.div`
  margin-top: 40px;
`;
