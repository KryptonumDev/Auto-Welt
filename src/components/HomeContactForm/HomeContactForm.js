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
import { StyledText } from "../Text/StyledText";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Za krótkie!").required("Pole wymagane"),
  lastName: Yup.string().min(2, "Za krótkie").required("Pole wymagane"),
  email: Yup.string().email("Niepoprawny email").required("Pole wymagane"),
  tel: Yup.string().length(9).required("Pole wymagane"),
  message: Yup.string().required("Pole wymagane"),
  termsAndConditions: Yup.bool().required("Musisz zaakceptować").oneOf([true], 'Musisz zaakceptować')
});

const HomeContactForm = ({ data }) => {
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
          termsAndConditions: false,
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <StyledInputWrapper>
              <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaImie}</label>
              <Field type="text" name="firstName" />
              <StyledErrorMessage name="firstName" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaNazwisko}</label>
              <Field type="text" name="lastName" />
              <StyledErrorMessage name="lastName" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaEMail}</label>
              <Field type="email" name="email" />
              <StyledErrorMessage name="email" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper>
              <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaNrTelefonu}</label>
              <Field type="text" placeholder="_ _ _  _ _ _  _ _ _" name="tel" />
              <StyledErrorMessage name="tel" component="div" />
            </StyledInputWrapper>
            <StyledInputWrapper fullwidth>
              <label>{data.wpPage.homepage.formularzKontaktowy.tytulPola}</label>
              <Field as="textarea" name="message" />
              <StyledErrorMessage name="message" component="div" />
            </StyledInputWrapper>
            <div>
              <StyledText>
                {data.wpPage.homepage.formularzKontaktowy.podpisPodObszaremDoWyslaniaWiadomosci}
              </StyledText>
            </div>
            <StyledInputWrapper>
              <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaNrTelefonu}</label>
              <Field type="checkbox" name="termsAndConditions" />
              <StyledErrorMessage name="termsAndConditions" component="div" />
            </StyledInputWrapper>
            <StyledButtonWrapper>
              <button type="submit" disabled={isSubmitting}>
                <Button
                  text={data.wpPage.homepage.formularzKontaktowy.trescPrzyciskuPotwierdzajacegoWyslanie}
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
