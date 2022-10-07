import styled from "styled-components";

export const StyledHomeExhibitionsElement = styled.div`
  width: 33%;
  max-width: 340px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  border-top: 6px solid var(--borderTopOrange);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;
export const StyledDataInformationWrapper = styled.div`
  padding: 24px 34px;
  width: 100%;
`;
export const StyledDataWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;
export const StyledLogoWrapper = styled.div`
  width: 100%;
  height: 190px;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
export const StyledContentWrapper = styled.div`
  padding: 26px 34px;
`;
export const StyledContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 14px;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    > svg {
      flex-shrink: 0;
      margin-right: 8px;
    }
  }
`;
