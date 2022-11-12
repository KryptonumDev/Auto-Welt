import styled from "styled-components";

export const StyledFooterCenterWrapper = styled.div`
  max-width: 294px;

  @media only screen and (max-width: 768px) {
    width: 42%;
    max-width: unset;
    order: 2;
    margin-top: 60px;
  }

  @media only screen and (max-width: 700px) {
    width: 40%;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    > div {
      &:first-child{
        padding: 0 51px;
      }
      
      > p {
        text-align: center;
      }
    }
  }
`;

export const StyledFastLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;

  a {
    transition: color 250ms linear;
    padding: 8px 0;
    
    &:hover {
      color: var(--secondary300);
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
    }
  }
`;

export const StyledArticlesWrapper = styled.div`
  width: 100%;
`;
