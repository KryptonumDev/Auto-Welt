import styled from "styled-components";

export const StyledScheduleHeroSection = styled.section`
  width: 100%;
  max-width: 1144px;
  margin: 37px auto 0;
  padding: 0 32px;
  @media only screen and (max-width: 768px) {
    padding: 0 16px;
    margin-top: 130px;
  }
`;
export const StyledHeroImage = styled.div`
  width: 100%;
  min-height: 540px;

  img {
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
export const StyledTitleWrapper = styled.div`
  width: 85%;
  max-width: 641px;
  min-height: 111px;
  position: relative;
  margin: 0 auto;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0px 6px 6px 6px;
  border-style: solid;
  border-color: #23423d;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
`;
export const StyledTitleImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
