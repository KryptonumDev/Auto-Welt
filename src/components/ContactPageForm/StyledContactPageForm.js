import styled from "styled-components";

export const StyledContactPageForm = styled.section`
  width: 100%;
  background: #faf7f1;
  border-top: 6px solid #edac2a;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  min-height: 688px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

export const StyledLeftWrapper = styled.div`
  width: 385px;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 256px;
    height: 832px;
  }

  @media only screen and (max-width: 638px){
    height: 898px;
  }

  @media only screen and (max-width: 560px) {
    width: 100%;
    height: 440px;
  }
`;

export const StyledModel = styled.div`
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
    }

    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledRightWrapper = styled.div`
  width: calc(100% - 385px);

  @media only screen and (max-width: 768px) {
    width: calc(100% - 256px);
  }

  @media only screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const StyledHeading = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 972px) {
    p {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 375px) {
    p {
      font-size: 24px;
    }
  }
`;

export const StyledTitleImage = styled.div`
  width: 100%;
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
  }
`;

export const StyledHomeContactForm = styled.div`
  width: 100%;
  padding: 20px 30px;

  > form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 25px;
  }

  @media only screen and (max-width: 1119px) {
    padding: 22px;
  }

  @media only screen and (max-width: 898px) {
    > form {
      gap: 32px;
    }
  }

  @media only screen and (max-width: 768px) {
    > form {
      gap: 22px;
    }
  }

  @media only screen and (max-width: 657px) {
    padding: 10px 22px;
    
    > form {
      gap: 22px;
    }
  }

  @media only screen and (max-width: 560px){
    padding-bottom: 40px;
  }
`;

export const StyledInputWrapper = styled.div`
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "50%")};
  max-width: ${({ fullwidth }) => (fullwidth ? "unset" : "255px")};
  position: relative;

  label {
    font: 500 16px/19px Roboto Condensed;
    color: ${({ iserror }) => (iserror ? "#D63D3D" : "var(--primary500)")};
  }

  input {
    width: 100%;
    height: 38px;
    border: 2px solid
      ${({ iserror }) => (iserror ? "#D63D3D" : "var(--primary500)")};
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: var(--creamBg);
    padding: 0 14px;
    font-family: "Roboto Condensed", Arial;
    margin-top: 4px;
    border-radius: 0;

    &:focus-visible {
      outline-width: 0;
    }
  }

  textarea {
    width: 100%;
    height: 164px;
    border: 2px solid
      ${({ iserror }) => (iserror ? "#D63D3D" : "var(--primary500)")};
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
    background-color: var(--creamBg);
    resize: none;
    font-family: "Roboto Condensed", Arial;
    padding: 10px;
    margin-top: 4px;
    border-radius: 0;
    
    &:focus-visible {
      outline-width: 0;
    }

    @media only screen and (max-width: 898px){
      height: 120px;
    }

    @media only screen and (max-width: 768px){
      height: 164px;
    }
  }

  @media only screen and (max-width: 1087px) {
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "calc(50% - 13px)")};
  }

  @media only screen and (max-width: 1029px) {
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "47%")};
  }

  @media only screen and (max-width: 972px) {
    max-width: unset;
  }

  @media only screen and (max-width: 911px) {
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "46%")};
  }

  @media only screen and (max-width: 897px){
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "45%")};

    > div {
      bottom: ${({ telprop }) => (telprop ? "-34px" : "-20px")};
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 846px){
    > div {
      bottom: ${({ telprop }) => (telprop ? "-46px" : "-20px")};
    }
  }

  @media only screen and (max-width: 830px){
    > div {
      bottom: ${({ telprop, emailprop }) => (telprop ? "-46px" : (emailprop ? "-30px" : "-20px"))};
    }
  }

  @media only screen and (max-width: 813px){
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "calc(50% - 16px)")};

    > div {
      bottom: ${({ telprop, emailprop }) => (telprop ? "-18px" : (emailprop ? "-18px" : "-18px"))};
    }
  }

  @media only screen and (max-width: 768px){
    width: 100%;
  }

  @media only screen and (max-width: 638px){
    margin-top: ${({ fullwidth }) => (fullwidth ? "20px" : "4px")};

    > div {
      bottom: ${({ telprop, emailprop }) => (telprop ? "-32px" : (emailprop ? "-18px" : "-18px"))};
    }
  }

  @media only screen and (max-width: 560px){
    margin-top: ${({ fullwidth }) => (fullwidth ? "12px" : "4px")};

    > div {
      bottom: ${({ telprop, emailprop }) => (telprop ? "-18px" : (emailprop ? "-18px" : "-18px"))};
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 431px){
    margin-top: ${({ fullwidth }) => (fullwidth ? "18px" : "4px")};
    
    > div {
      bottom: ${({ telprop, emailprop }) => (telprop ? "-34px" : (emailprop ? "-18px" : "-18px"))};
    }
  }
`;

export const StyledMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 74px;
  min-height: 545px;
  height: 100%;

  @media only screen and (max-width: 907px) {
    padding: 0 43px;
  }

  @media only screen and (max-width: 592px) {
    padding: 0 26px;
  }
`;

export const StyledTitle = styled.div`
  font: 400 36px/1.2rem "Nocturne Serif";
  color: #23423d;

  @media only screen and (max-width: 375px) {
    font-size: 34px;
  }
`;

export const StyledSubTitle = styled.div`
  font: 400 24px/1.2em "Nocturne Serif";
  color: #1D2B29;

  p{
    margin-top: 20px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 22px;
  }
`;

export const StyledDesc = styled.div`
  font: 400 20px/1.4em "Roboto Condensed";
  color: #000;
  margin-top: 20px;

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

export const StyledButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  a,
  p {
    margin-left: 15px;
  }

  @media only screen and (max-width: 1065px) {
    a,
    p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 685px) {
    a,
    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 592px) {
    width: 100%;
    align-items: center;

    a,
    p {
      margin-left: 0;
      width: 95%;
    }
  }

  @media only screen and (max-width: 375px) {
    a,
    p {
      font-size: 15px;
    }
  }
`;
