import styled from "styled-components";
import { ErrorMessage } from "formik";

export const StyledHomeContactForm = styled.div`
  width: 100%;
  padding: 44px;

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

  @media only screen and (max-width: 1087px) {
    form {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 972px) {
    form {
      gap: 20px;
    }
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
    font-family: "Roboto Condensed";
    margin-top: 4px;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
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
    font-family: "Roboto Condensed";
    padding: 10px;
    margin-top: 4px;
    
    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }
  }

  @media only screen and (max-width: 1087px) {
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "48%")};
  }

  @media only screen and (max-width: 972px) {
    max-width: unset;
  }

  @media only screen and (max-width: 657px) {
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "47%")};
  }

  @media only screen and (max-width: 469px) {
    width: 100%;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -20px;
  left: 0;
  font: 14px "Roboto Condensed";
  color: ${({ iserror }) => (iserror ? "#D63D3D" : "var(--primary500)")};
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6px;

  > button {
    transform: skew(-26deg);
    -webkit-tap-highlight-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    flex: none;
    transition: background 250ms linear, border-color 250ms linear;

    background-color: var(--secondary500);
    color: var(--primary900);
    border: none;
    border: 2px solid var(--secondary500);
    font-size: 21px;
    padding: 10px 33px;
    cursor: pointer;

    > span {
      display: block;
      transform: skew(26deg);
      text-transform: uppercase;
      text-align: center;
      line-height: 1.3em;
    }

    &:hover{
      background: var(--secondary700);
      border-color: var(--secondary700);
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }
  }

  @media only screen and (max-width: 1065px) {
    > button {
      p {
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 685px) {
    > button {
      p {
        font-size: 16px;
      }
    }
  }

  @media only screen and (max-width: 375px) {
    > button {
      p {
        font-size: 15px;
      }
    }
  }
`;
export const StyledCustomCheckbox = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  label {
    position: relative;
    padding-left: 26px;

    svg {
      width: 16px;
      height: 16px;
      position: absolute;
      left: 2px;
      top: 2px;
      z-index: 1;
      cursor: pointer;
    }

    &:after {
      content: "";
      border: 2px solid ${({ iserror }) => (iserror ? "#D63D3D" : "#3E635D")};
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${({ value }) => (value ? "#3E635D" : "transparent")};
      cursor: pointer;
    }
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  label {
    font: 500 16px/19px Roboto Condensed;
    color: ${({ iserror }) => (iserror ? "#D63D3D" : "var(--primary500)")};
    cursor: pointer;
    
    a {
      color: ${({ iserror }) => (iserror ? "#D63D3D" : "#23423D")};
      font: 500 16px/19px "Roboto Condensed";
      transition: color 250ms linear;

      &:hover {
        color: var(--secondary300);
      }

      &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: #da9610;
      }
    }
  }
`;
