import styled from "styled-components";

export const StyledCollectionElementThreeImages = styled.section`
  margin: 120px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 40px;
    margin-bottom: 40px;
    > div {
      width: calc(50% - 20px);
      min-height: 316px;
      &:last-child{
        width: 100%;
        min-height: 499px;
      }
    }
  }

  @media only screen and (max-width: 768px){
    margin: 60px 0;
    > div{
      margin-bottom: 25px;
      gap: 20px;
      > div{
        min-height: 205px;
        &:last-child{
          min-height: 327px;
        }
      }
    }
  }
  @media only screen and (max-width: 588px){
    > div{
      margin-bottom: 25px;
      > div{
        min-height: unset;
        width: 100%;
        &:last-child{
          width: 100%;
          min-height: unset;
        }
      }
    }
    > a{
      width: 95%;
    }
  }
  @media only screen and (max-width: 375px){
    > a {
      font-size: 15px;
    }
  }
`;
