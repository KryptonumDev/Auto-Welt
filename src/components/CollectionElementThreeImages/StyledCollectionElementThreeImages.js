import styled from "styled-components";

export const StyledCollectionElementThreeImages = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 120px 0;
  width: 100%;
  gap: 40px;
  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 27px;
    div {
      width: 50%;
      max-width: 525px;
      &:first-child {
        max-width: unset;
        width: 100%;
      }
    }
  }
`;
