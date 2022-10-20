import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "gatsby";
import * as Yup from "yup";
import axios from "axios";
import Button from "../Button/Button";

import {
  StyledHomeContactForm,
  StyledInputWrapper,
  StyledErrorMessage,
  StyledButtonWrapper,
  StyledCustomCheckbox,
} from "./StyledHomeContactForm";
import { StyledText } from "../Text/StyledText";
import useWindowSize from "../../utils/getWindowSize";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "*za krótkie!").required("*pole wymagane"),
  lastName: Yup.string().min(2, "*za krótkie").required("*pole wymagane"),
  email: Yup.string().email("*niepoprawny email").required("*pole wymagane"),
  tel: Yup.string().length(9).required("*pole wymagane"),
  message: Yup.string().required("*pole wymagane"),
  termsAndConditions: Yup.bool()
    .required("*musisz zaakceptować")
    .oneOf([true], "*musisz zaakceptować"),
});

const HomeContactForm = ({ data, afterSubmit }) => {
  const width = useWindowSize();

  const handleSubmit = async (data, { setSubmitting }) => {
    const formData = new FormData();
    for (let field of Object.keys(data)) {
      formData.append(field, data[field]);
    }

    try {
      await axios.post(`${process.env.WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${process.env.WORDPRESS_FORM_ID}/feedback`, formData);
      setSubmitting(false);
      afterSubmit?.();
    } catch (err) {
      console.log("handleSubmit", err);
    }
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
        {({ isSubmitting, errors, values }) => (
          <Form>
            <StyledInputWrapper iserror={errors.firstName}>
              <label>
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaImie}
              </label>
              <Field type="text" name="firstName" />
              <StyledErrorMessage
                iserror={errors.firstName}
                name="firstName"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.lastName}>
              <label>
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaNazwisko}
              </label>
              <Field type="text" name="lastName" />
              <StyledErrorMessage
                iserror={errors.lastName}
                name="lastName"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.email}>
              <label>
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaEMail}
              </label>
              <Field type="email" name="email" />
              <StyledErrorMessage
                iserror={errors.email}
                name="email"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.tel}>
              <label>
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaNrTelefonu}
              </label>
              <Field type="text" placeholder="_ _ _  _ _ _  _ _ _" name="tel" />
              <StyledErrorMessage
                iserror={errors.tel}
                name="tel"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper fullwidth iserror={errors.message}>
              <label>
                {data.wpPage.homepage.formularzKontaktowy.tytulPola}
              </label>
              <Field as="textarea" name="message" />
              <StyledErrorMessage
                iserror={errors.message}
                name="message"
                component="div"
              />
            </StyledInputWrapper>
            <div>
              <StyledText
                hasdeclaredfontsize="18px"
                hasdeclaredfontweight="400"
                hasdeclaredlineheight="1.2em"
                hasdeclaredfontcolor="var(--primary500)"
              >
                {
                  data.wpPage.homepage.formularzKontaktowy
                    .podpisPodObszaremDoWyslaniaWiadomosci
                }
              </StyledText>
            </div>
            <StyledCustomCheckbox
              value={values.termsAndConditions}
              iserror={errors.termsAndConditions}
            >
              <Field
                type="checkbox"
                name="termsAndConditions"
                id="termsAndConditions"
              />
              <label htmlFor="termsAndConditions" style={{ fontWeight: "400" }}>
                Akceptuję <Link to="/">politykę prywatności</Link>
              </label>
              <StyledErrorMessage
                name="termsAndConditions"
                component="div"
                iserror={errors.termsAndConditions}
              />
            </StyledCustomCheckbox>
            <StyledButtonWrapper>
              <button type="submit" disabled={isSubmitting}>
                <Button
                  text={
                    data.wpPage.homepage.formularzKontaktowy
                      .trescPrzyciskuPotwierdzajacegoWyslanie
                  }
                  bgColor="var(--secondary500)"
                  textColor="var(--primary900)"
                  hasBorder="2px solid var(--secondary500)"
                  hasFontSize="21px"
                  hasDeclaredPadding="10px 33px"
                  hoverBgColor="var(--secondary700)"
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
