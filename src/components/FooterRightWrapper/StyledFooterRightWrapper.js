import styled from "styled-components";

export const StyledFooterRightWrapper = styled.div`
  width: 40%;
  max-width: 365px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 1065px){
    > a{
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px){
    width: 55%;
    max-width: unset;
  }

  @media only screen and (max-width: 685px){
    > a{
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 500px){
    width: 100%;
    order 3;
    align-items: center;

    > p {
      text-align: center;
      font-size: 24px;
    }

    > a{
      width: 95%;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 375px){
    > a{
      font-size: 15px;
    }
  }
`;

export const StyledEventWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
