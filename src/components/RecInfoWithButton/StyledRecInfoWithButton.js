import styled from "styled-components";

export const StyledRecInfoWithButton = styled.div`
    width: 100%;
    min-height: 131px;
    margin-top: 30px;
    position: relative;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-right: 100px;
    @media only screen and (max-width: 1065px){
      a{
        font-size: 18px;
      }
    }
    @media only screen and (max-width: 685px){
      padding-right: 40px;
      a{
        font-size: 16px;
      }
    }
    @media only screen and (max-width: 664px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        min-height: 141px;
        p{
          padding: 16px;
          font-size: 24px;
        }
        a{
          min-width: 255px;
          margin-left: 26px;
        }
    }
    @media only screen and (max-width: 375px){
      a{
        width: 65%;
        min-width: unset;
        font-size: 15px;
      }
    }
`;

export const StyledFooterImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  .img{
    widht: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    transform: translateY(5px);
  }
`;
