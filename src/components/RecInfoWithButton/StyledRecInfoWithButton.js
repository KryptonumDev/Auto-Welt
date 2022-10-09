import styled from "styled-components";

export const StyledRecInfoWithButton = styled.div`
    width: 100%;
    min-height: 131px;
    margin-top: 30px;
    position: relative;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 936px){
        transform: translateX(${({ ismoveleft }) =>
          ismoveleft ? "-32px" : "0"})
    }
    @media only screen and (max-width: 580px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        min-height: 141px;
        p{
          padding: 16px;
        }
        a{
          min-width: 255px;
          margin-left: 26px;
        }
    }
    @media only screen and (max-width: 375px){
      a, p{
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