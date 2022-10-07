import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";

import {
  StyledHomeContactForm,
  StyledInputWrapper,
  StyledErrorMessage,
  StyledButtonWrapper,
} from "./StyledHomeContactForm";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Za krótkie!").required("Pole wymagane"),
  lastName: Yup.string().min(2, "Za krótkie").required("Pole wymagane"),
  email: Yup.string().email("Niepoprawny email").required("Pole wymagane"),
  tel: Yup.string().length(9).required("Pole wymagane"),
  message: Yup.string().required("Pole wymagane"),
});

const HomeContactForm = () => {
  const handleSubmit = () => {
    console.log("elo siema");
  };
  return (
    <StyledHomeContactForm>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          tel: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <StyledInputWrapper>
              <label>Imię</label>
              <Field type="text" name="firstName" />
              <StyledErrorMessage name="firstName" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>Nazwisko</label>
              <Field type="text" name="lastName" />
              <StyledErrorMessage name="lastName" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>E-mail</label>
              <Field type="email" name="email" />
              <StyledErrorMessage name="email" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>Nr. telefonu</label>
              <Field type="text" placeholder="_ _ _  _ _ _  _ _ _" name="tel" />
              <StyledErrorMessage name="tel" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper fullwidth>
              <label>Treść wiadomości</label>
              <Field as="textarea" name="message" />
              <StyledErrorMessage name="message" component="div" />
            </StyledInputWrapper>
            <StyledButtonWrapper>
              <button type="submit" disabled={isSubmitting}>
                <Button
                  text="WYŚLIJ"
                  bgColor="var(--secondary500)"
                  hasBorder="2px solid var(--secondary500)"
                  hasHeight="44px"
                  textColor="var(--primary900)"
                />
              </button>
            </StyledButtonWrapper>
          </Form>
        )}
      </Formik>
    </StyledHomeContactForm>
  );
};

export default HomeContactForm;
