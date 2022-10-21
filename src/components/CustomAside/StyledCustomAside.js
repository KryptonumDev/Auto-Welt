import styled from "styled-components";

export const StyledCustomAside = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 31px 46px;
    filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));
`;
export const StyledContents = styled.div`
    position: relative;
    z-index: 1;
`;
export const StyledChooseCollections = styled.div`
    position: relative;
    z-index: 1;

    a{
        margin-bottom: 10px;
        display: block;
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