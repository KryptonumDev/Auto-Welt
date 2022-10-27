import styled from "styled-components";

export const StyledContact = styled.section`
  padding: 0 32px 120px;
  max-width: 1144px;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    padding: 134px 16px 60px;

    > h1 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 375px) {
    padding-top: 120px;

    > h1 {
      font-size: 34px;
    }
  }
`;

export const StyledDesc = styled.div`
  font-size: 24px;
  line-height: 1.2em;
  max-width: 870px;
  font-family: "Roboto Condensed";
  padding-bottom: 60px;
  width: 100%;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 30px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 16px;
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
        height: 15px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -1;
      }
    }
  }
`;

export const StyledBigImage = styled.div``;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;

  @media only screen and (max-width: 1065px) {
    a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }

  @media only screen and (max-width: 685px) {
    a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 624px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;

    > a {
      width: 95%;
    }
  }
  @media only screen and (max-width: 375px) {
    a {
      font-size: 15px;
    }
  }
`;

export const StyledBottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;
