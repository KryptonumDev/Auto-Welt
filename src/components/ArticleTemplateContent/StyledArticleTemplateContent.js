import styled from "styled-components";

export const StyledArticleTemplateContent = styled.section`
    margin: 90px 0;
    display: flex;
    justify-content: space-between;
    gap: 70px;
    @media only screen and (max-width: 972px){
        gap: 20px;
    }
    @media only screen and (max-width: 768px){
        margin: 60px 0;
    }
`;
export const StyledAside = styled.aside`
    width: calc(40% - 35px);
    max-width: 364px;
    
    @media only screen and (max-width: 972px){
        margin-left: -32px;
    }
    @media only screen and (max-width: 972px){
        margin-left: -16px;
    }
    @media only screen and (max-width: 660px){
        display: none;
    }
`;
export const StyledTextContent = styled.div`
    width: calc(60% - 35px);
    font-family: 'Roboto';
    font-size: 24px;
    
    .wp-block-columns{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    ul, ol{
        margin-left: 25px;
    }

    p{
        strong, em {
            position: relative;
            font-weight: normal;
            font-style: normal;
            &:before{
              content: '';
              width: 100%;
              background: #F6E2BA;
              height: 15px;
              position: absolute;
              bottom: 0;
              left: 0;
              z-index: -1;
            }
        }
    }

    h2{
        font-size: 28px;
    }
    h3{
        font-size: 24px;
    }
    h1, h2, h3, h4, h5, h6{
        font-family: 'Nocturne Serif';
    }


    @media only screen and (max-width: 972px){
        width: 60%;
    }

    @media only screen and (max-width: 768px){
        font-size: 20px;
    }

    @media only screen and (max-width: 660px){
        width: 100%;
    }

    @media only screen and (max-width: 375px){
        font-size: 16px;
    }
`;
