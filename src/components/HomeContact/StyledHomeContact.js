import styled from "styled-components";

export const StyledHomeContact = styled.section`
  border-top: 6px solid var(--secondary500);
  width: 100%;
  min-height: 659px;
  margin-bottom: 120px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  background-color: var(--creamBg);
  margin-left: 30px;
`;
export const StyledLeftWrapper = styled.div`
  width: 410px;
  min-height: 659px;
  height: 100%;
  position: relative;
`;
export const StyledRightWrapper = styled.div`
  width: calc(100% - 410px);
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const StyledHeading = styled.div`
  width: 100%;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const StyledModel = styled.div`
  width: 584px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
export const StyledTitleImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .gatsby-image-wrapper-constrained{
    display: block;
  }
`