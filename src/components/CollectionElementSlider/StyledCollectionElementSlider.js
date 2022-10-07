import styled from "styled-components";

export const StyledCollectionElementSlider = styled.section`
  margin-top: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 346px;
  gap: 27px;
`;
export const StyledLeftArrow = styled.div`
  background: var(--primary500);
  padding: 5px;
  cursor: pointer;
  height: 56px;
  > svg {
    width: 100%;
    height: 100%;
    path {
      stroke: var(--secondary500);
    }
  }
`;
export const StyledRightArrow = styled.div`
  background: var(--primary500);
  padding: 5px;
  cursor: pointer;
  height: 56px;
  > svg {
    width: 100%;
    height: 100%;
    path {
      stroke: var(--secondary500);
    }
  }
`;
export const StyledImagesWrapper = styled.div`
  width: 100%;
  max-width: 943px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 27px;
`;
export const StyledImage = styled.div`
  max-width: 457px;
  height: 100%;
`;
