import styled from "styled-components";

export const StyledArticlePaginationNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  cursor: pointer;
  font: normal 500 28px/1.2em "Nocturne Serif", Arial;

  p {
    transition: color 250ms linear;

    &:hover {
      color: #edac2a;
    }
  }
`;
