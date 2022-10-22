import styled from "styled-components";

export const StyledOfferEvent = styled.div`
  width: 100%;
  min-height: 297px;
  display: flex;
  background: #faf7f1;
  border-left: 6px solid #edac2a;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 632px) {
    flex-direction: column;
  }
`;
export const StyledOfferEventImage = styled.div`
  width: 50%;
  min-height: 297px;
  img {
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 632px) {
    width: 100%;
    min-height: 202px;
  }
`;
export const StyledOfferEventInfo = styled.div`
  width: 50%;
  padding: 47px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > a {
    margin-left: 15px;
  }

  @media only screen and (max-width: 1065px) {
    > a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 685px) {
    > a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 632px) {
    width: 100%;
  }

  @media only screen and (max-width: 488px) {
    padding: 24px 32px;
    > a {
      margin-left: 0;
      align-self: center;
      width: 95%;
    }
  }
  @media only screen and (max-width: 375px) {
    > a {
      font-size: 15px;
    }
  }
`;
