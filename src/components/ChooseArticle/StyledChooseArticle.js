import styled from "styled-components";

export const StyledChooseArticle = styled.div`
    width: 100%;
    margin-top: 120px;
    
    @media only screen and (max-width: 768px){
        margin-top: 60px;

        > h2 {
            font-size: 38px;
        }
    }

    @media only screen and (max-width: 375px){

        > h2 {
            font-size: 34px;
        }
    }
`;
export const StyledArticle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));

    &:hover{

        > div {

            &:first-of-type{

                img {
                    transition: transform 250ms, mix-blend-mode 250ms;
                    transform: scale(1.1);
                    mix-blend-mode: unset;
                }
            }
        }
    }
`;
export const StyledImageWrapper = styled.div`
    width: 100%;

    img{
        width: 100%;
        mix-blend-mode: multiply;
    }

    .gatsby-image-wrapper{
        width: 100%
    }
`;
export const StyledTextWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 33px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media only screen and (max-width: 768px) {
        a {
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 375px) {
        a {
            font-size: 15px;
            width: 95%;
        }
    }
`;
export const StyledBgWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    img{
        width: 100%;
        height: 100%;
    }

    .gatsby-image-wrapper{
        width: 100%;
        height: 100%;
    }
`