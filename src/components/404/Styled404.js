import styled from "styled-components"

export const StyledMainContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding-bottom: 60px;

    @media only screen and (max-width: 768px){
        margin-top: 134px;
    }
    @media only screen and (max-width: 617px){
        flex-direction: column-reverse;
        align-items: center;
    }
`
export const StyledLeftWrapper = styled.div`
    @media only screen and (max-width: 717px){
        width: 45%;
    }
    @media only screen and (max-width: 617px){
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
`
export const StyledRightWrapper = styled.div`
    display: flex;
    margin-top: 31px;
    position: relative;
    max-width: 50%;

    @media only screen and (max-width: 962px){
        width: 40%;
    }
    @media only screen and (max-width: 768px){
        margin-top: 0;
    }
    @media only screen and (max-width: 617px){
        width: 100%;
    }
`
export const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 37px;
    position: relative;
    z-index: 1;

    a {
        margin-left: 10px;
    }

    @media only screen and (max-width: 1024px){
        p {
            font-size: 40px;
            max-width: 494px;
        }
    }
    @media only screen and (max-width: 877px){
        p {
            font-size: 36px;
            max-width: 400px;
        }
    }
    @media only screen and (max-width: 768px){
        margin-top: 0;
        p {
            font-size: 38px;
            line-height: 46px;
        }
    }
    @media only screen and (max-width: 717px){
        p{
            max-width: unset;
        }
    }
    @media only screen and (max-width: 617px){
        align-items: center;
        a {
            width: 100%;
        }
        p{
            text-align: center;
        }
    }
    @media only screen and (max-width: 375px){
        a {
            font-size: 15px;
        }
        p{
            font-size: 34px;
        }
    }
`
export const StyledImageLeftWrapper = styled.div`
    transform: translateY(-44px);
    @media only screen and (max-width: 768px){
        display: none;
    }
`
export const StyledImageRightWrapper = styled.div`
    width: 100%;
    max-width: 456px;
    height: 181px;
    .img{
        width: 100%;
        height: 100%;
    }
    @media only screen and (max-width: 617px){
        max-width: unset;
        height: auto;
        .gatsby-image-wrapper{
            width: 100%;
            height: 100%;
        }
    }
`
export const StyledImageRightFirstWrapper = styled.div`
    position: absolute;
    top: 0;
    left: -100px;
    z-index: 1;

    @media only screen and (max-width: 1024px){
        height: 140px;
        width: 140px;
        img{
            width: 100%;
            height: 100%;
        }
        .gatsby-image-wrapper{
            width: 100%;
            height: 100%;
        }
    }
    @media only screen and (max-width: 877px){
        height: 110px;
        width: 110px;
        left: -60px;
    }
    @media only screen and (max-width: 768px){
        display: none;
    }
`