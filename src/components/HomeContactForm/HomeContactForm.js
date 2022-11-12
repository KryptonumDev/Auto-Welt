import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "gatsby";
import * as Yup from "yup";
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

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "Imię powinno mieć 3-30 znaków.").required("Proszę o podanie imienia.").max(30, "Imię powinno mieć 3-30 znaków."),
  lastName: Yup.string().min(3, "*za krótkie").required("Proszę o podanie nazwiska.").max(40, "Nazwisko powinno mieć 3-30 znaków."),
  email: Yup.string().email("Proszę o podanie poprawnego adresu E-mail.").required("Proszę o podanie adresu E-mail."),
  tel: Yup.string().length(11, 'Proszę o podanie poprawnego numeru telefonu. Np. 504 704 112.').matches(/^[0-9]{3} [0-9]{3} [0-9]{3}$/, 'Proszę o podanie poprawnego numeru telefonu. Np. 504 704 112.'),
  message: Yup.string().required("*pole wymagane").max(1200, 'Wiadomość zbyt długa (maks. 1200 znaków).'),
  termsAndConditions: Yup.bool()
    .required("Akceptacja polityki prywatności jest wymagana.")
    .oneOf([true], "Akceptacja polityki prywatności jest wymagana."),
});

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
                Akceptuję <Link to="/polityka-prywatnosci">politykę prywatności</Link>
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
