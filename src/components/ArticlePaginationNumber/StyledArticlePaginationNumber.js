import styled from "styled-components";

export const StyledArticlePaginationNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Nocturne Serif", Arial;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #000;
  cursor: pointer;

  p {
    transition: color 250ms linear;

    &:hover {
      color: #edac2a;
    }
  }
`;
