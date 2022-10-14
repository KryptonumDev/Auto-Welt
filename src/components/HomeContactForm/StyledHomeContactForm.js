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
    gap: 15px;
  }

  @media only screen and (max-width: 1119px){
    padding: 22px;
  }
`;
export const StyledInputWrapper = styled.div`
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "50%")};
  max-width: ${({ fullwidth }) => (fullwidth ? "unset" : "255px")};
  position: relative;
  label {
    font: 500 16px/19px Roboto;
    color: ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"};
  }
  input {
    width: 100%;
    height: 38px;
    border: 2px solid ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"};
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    background-color: var(--creamBg);
    padding: 0 14px;
  }
  textarea {
    width: 100%;
    height: 164px;
    border: 2px solid ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"};
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    background-color: var(--creamBg);
    resize: none;
  }

  @media only screen and (max-width: 1119px){
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "48%")};
  }
  @media only screen and (max-width: 972px){
    width: ${({ fullwidth }) => (fullwidth ? "100%" : "50%")};
  }
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -16px;
  left: 0;
  font: 12px Roboto;
  color: ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"}
`;
export const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6px;
  > button {
    background-color: transparent;
    border: none;
  }
`;
export const StyledCustomCheckbox = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  label{
    position: relative;
    padding-left: 26px;
    &:after{
      content: '';
      border: 2px solid #3E635D;
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${({ value }) => value ? "red" : "transparent"};
    }
  }
  input{
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  label {
    font: 500 16px/19px Roboto;
    color: ${({ iserror }) => iserror ? "#D63D3D" : "var(--primary500)"};
    a{
      color: #23423D;
      font: 500 16px/19px "Roboto"
    }
  }
`