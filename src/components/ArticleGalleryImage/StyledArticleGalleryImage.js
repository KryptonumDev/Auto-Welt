import styled from "styled-components";

export const StyledArticleGalleryImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 18px;
    width: 100%;
    > div {
        width: calc(32% - 6px); 
        filter: drop-shadow(2px 4px 8px rgba(0, 0, 0, 0.3));
        &:last-child{
            width: 100%;
        }
    }
`;
