import styled from "styled-components";

export const StyledCollectionTemplate = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 32px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px 0 0;
  }

  .a{
    padding: 10px 33px;
  }

  @media (max-width: 432px) {
    .a{
      padding: 10px 12px;
    }
  }
`;
