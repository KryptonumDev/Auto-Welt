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
  justify-content: center;
  overflow: hidden;

  > a {
    margin-left: 15px;
  }

  @media only screen and (max-width: 1065px) {
    > a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px){
    padding: 24px 32px;

    h3{
      font-size: 38px;
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

export const StyledTitleWrapper = styled.div`
  color: #23423D;
  font-size: 48px;
  line-height: 1.2em;
  font-family: "Nocturne Serif";
  margin: 16px 0 20px;
`