import styled from "styled-components";

export const StyledCollectionTemplateDesc = styled.section`
  width: 100%;
  min-height: 500px;
  border-top: 6px solid var(--secondary500);
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  margin-top: 60px;
  position: relative;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    width: calc(100% - 16px);
    margin: 30px auto 0 16px;
  }

  @media only screen and (max-width: 688px) {
    flex-direction: column-reverse;
    min-height: unset;
    align-items: center;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 50%;
  padding: 68px 58px;
  font: 400 24px/1.2em "Roboto Condensed";

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    padding: 41px 31px;
  }

  @media only screen and (max-width: 688px) {
    width: 100%;
    padding: 40px 23px;
  }

  p {
    strong,
    em {
      position: relative;
      font-weight: normal;
      font-style: normal;

      &:before {
        content: "";
        width: 100%;
        background: #f6e2ba;
        height: 0.5em;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
        display: inline-block;
      }
    }
  }
`;

export const StyledImageWrapper = styled.div`
  width: 50%;
  min-width: 340px;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 688px) {
    width: 100%;
    min-width: unset;
    max-height: unset;
  }
`;
