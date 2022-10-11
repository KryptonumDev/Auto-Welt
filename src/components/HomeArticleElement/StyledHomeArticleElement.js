import styled from "styled-components";

export const StyledHomeArticleElement = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  width: 49%;
  max-width: 526px;
  background: var(--creamBg);
  padding-bottom: 44px;
`;
export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 275px;
  img{
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
`;
export const StyledTitleWrapper = styled.div`
  width: 100%;
  min-height: 60px;
  position: relative;
`;
export const StyledTitleBgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
`
export const StyledTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  > p {
    font: 400 16px/1.2em
    padding: 8px 46px 26px 46px;
    color: var(--primary500);
    &:first-letter {
      font-size: 44px;
      color: #edac29;
      font-family: "Nocturne Serif";
    }
  }
`;
