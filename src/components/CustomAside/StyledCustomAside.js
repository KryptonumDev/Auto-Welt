import styled from "styled-components";

export const StyledCustomAside = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 31px 46px;
    position: relative;
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));

    position: -webkit-sticky;
    position: sticky;
    top: 60px;

    @media only screen and (max-width: 972px){
        padding: 31px 16px;
    }
`;
export const StyledContents = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        &:last-child{
            margin-bottom: 25px;
        }
        > a {
            color: #FAF6EE;
            font-size: 18px;
            line-height: 1.2em;
            font-weight: 600;
            font-family: 'Roboto';

            @media only screen and (max-width: 972px){
                font-size: 14px;
            }
        }
        ul{
            color: #FAF6EE;
            margin-left: 45px;
            a {
                color: #FAF6EE;
                font-size: 16px;
                line-height: 1.2em;
                font-weight: 400;
                font-family: 'Roboto';
                @media only screen and (max-width: 972px){
                    font-size: 14px;
                }
            }
        }
    }

    @media only screen and (max-width: 972px){
        p{
            font-size: 24px;
        }
    }
`;
export const StyledChooseCollections = styled.div`
    position: relative;
    z-index: 1;

    a{
        margin-bottom: 10px;
        display: block;
    }

    @media only screen and (max-width: 972px){
        p{
            font-size: 24px;
        }
        > a {
            font-size: 14px;
        }
    }
`;
export const StyledButtonsWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin-top: 30px;

    a {
        margin-left: 15px;
    }

    @media only screen and (max-width: 972px){
        a {
            font-size: 18px;
            width: 90%;
        }
    }
`
export const StyledBgContents = styled.div`
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