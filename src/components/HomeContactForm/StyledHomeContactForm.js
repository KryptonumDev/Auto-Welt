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
`;
export const StyledInputWrapper = styled.div`
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "50%")};
  max-width: ${({ fullwidth }) => (fullwidth ? "unset" : "255px")};
  position: relative;
  label {
    font: 500 16px/19px Roboto;
    color: var(--primary500);
  }
  input {
    width: 100%;
    height: 38px;
    border: 2px solid var(--primary500);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    background-color: var(--creamBg);
    padding: 0 14px;
  }
  textarea {
    width: 100%;
    height: 164px;
    border: 2px solid var(--primary500);
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
    background-color: var(--creamBg);
    resize: none;
  }
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: -16px;
  left: 0;
  font: 12px Roboto;
  color: red;
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
