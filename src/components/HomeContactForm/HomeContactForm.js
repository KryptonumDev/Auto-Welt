import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "gatsby";

import axios from "axios";

import {
  StyledHomeContactForm,
  StyledInputWrapper,
  StyledErrorMessage,
  StyledButtonWrapper,
  StyledCustomCheckbox,
} from "./StyledHomeContactForm";
import { StyledText } from "../Text/StyledText";

import AcceptIcon from "../../images/acceptSvg.svg";

import { ContactSchema, initialState } from "../../utils/contactForm";

const HomeContactForm = ({ data, afterSubmit }) => {
  const handleSubmit = async (data, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    for (let field of Object.keys(data)) {
      formData.append(field, data[field]);
    }

    try {
      await axios.post(
        `${process.env.GATSBY_WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${process.env.GATSBY_WORDPRESS_FORM_ID}/feedback`,
        formData
      );
      setSubmitting(false);
      afterSubmit?.();
      resetForm();
    } catch (err) {
      console.error("handleSubmit", err);
    }
  };

  return (
    <StyledHomeContactForm>
      <Formik
        initialValues={initialState}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, values, handleChange }) => (
          <Form
            method="post"
            netlify-honeypot="bot-field"
            dataform-netlify="true"
            name="contact"
          >
            <StyledInputWrapper iserror={errors.firstName}>
              <label htmlFor="firstName">
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaImie}
              </label>
              <Field type="text" name="firstName" id="firstName"/>
              <StyledErrorMessage
                iserror={errors.firstName}
                name="firstName"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.lastName}>
              <label htmlFor="lastName">
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaNazwisko}
              </label>
              <Field type="text" name="lastName" id="lastName"/>
              <StyledErrorMessage
                iserror={errors.lastName}
                name="lastName"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.email}>
              <label htmlFor="email">
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaEMail}
              </label>
              <Field type="email" name="email" id="email"/>
              <StyledErrorMessage
                iserror={errors.email}
                name="email"
                component="div"
              />
            </StyledInputWrapper>
            <StyledInputWrapper iserror={errors.tel}>
              <label htmlFor="tel">
                {data.wpPage.homepage.formularzKontaktowy.tytulPolaNrTelefonu}
              </label>
              <Field
                placeholder="_ _ _  _ _ _  _ _ _"
                name="tel"
                id="tel"
                type="tel"
                onChange={
                  (e) => {
                    e.target.value = (
                      [...e.target.value.replaceAll(' ', '')]
                      .map(
                        (val, idx) => {
                          if (val === ' ')
                            return [ val ];
  
                          let ret = [];

                          if (!isNaN(parseInt(val))) {
                            if (idx > 0 && idx % 3 === 0)
                              ret.push(' ');
                            ret.push(val);
                          }
                          
                          return ret;
                        }
                      )
                      .reduce(
                        (prev, cur) => prev.concat(cur), []
                      )
                      .reduce(
                        (prev, cur) => prev += cur, ""
                      )
                    );

                    return handleChange(e);
                  }
                }
              />
              <StyledErrorMessage
                iserror={errors.tel}
                name="tel"
                component="div"
                bottommessage="-38px"
              />
            </StyledInputWrapper>
            <StyledInputWrapper fullwidth iserror={errors.message}>
              <label htmlFor="message">
                {data.wpPage.homepage.formularzKontaktowy.tytulPola}
              </label>
              <Field as="textarea" name="message" id="message" />
              <StyledErrorMessage
                iserror={errors.message}
                name="message"
                component="div"
              />
            </StyledInputWrapper>
            <div>
              <StyledText
                hasdeclaredfontsize="18px"
                hasdeclaredfontweight="500"
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
                <AcceptIcon />
                    Zapoznaem się i akceptuję <Link to='/polityka-prywatnosci/'>Politykę prywatności</Link> i <Link to='/regulamin-sklepu/'>Regulamin</Link> sklepu Auto-Welt.info*
              </label>
            </StyledCustomCheckbox>
            <StyledButtonWrapper>
              <button type="submit" aria-label="Wyślij wiadomość">
                <span>
                  {
                    data.wpPage.homepage.formularzKontaktowy
                      .trescPrzyciskuPotwierdzajacegoWyslanie
                  }
                </span>
              </button>
            </StyledButtonWrapper>
          </Form>
        )}
      </Formik>
    </StyledHomeContactForm>
  );
};

export default HomeContactForm;
