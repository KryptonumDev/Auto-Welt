import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { Formik, Form, Field } from "formik";
import parse from "html-react-parser";
import axios from "axios";
import * as Yup from "yup";

import Button from "../Button/Button";

import {
  StyledContactPageForm,
  StyledLeftWrapper,
  StyledModel,
  StyledRightWrapper,
  StyledHeading,
  StyledTitleImage,
  StyledInputWrapper,
  StyledHomeContactForm,
  StyledMessageWrapper,
  StyledTitle,
  StyledSubTitle,
  StyledDesc,
  StyledButtonsWrapper,
} from "./StyledContactPageForm";
import {
  StyledErrorMessage,
  StyledButtonWrapper,
  StyledCustomCheckbox,
} from "../HomeContactForm/StyledHomeContactForm";
import { StyledText } from "../Text/StyledText";

import AcceptIcon from "../../images/acceptSvg.svg";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "Imię powinno mieć 3-30 znaków.").required("Proszę o podanie imienia.").max(30, "Imię powinno mieć 3-30 znaków."),
  lastName: Yup.string().min(3, "*za krótkie").required("Proszę o podanie nazwiska.").max(40, "Nazwisko powinno mieć 3-30 znaków."),
  email: Yup.string().email("Proszę o podanie poprawnego adresu E-mail.").required("Proszę o podanie adresu E-mail."),
  tel: Yup.string().length(9, 'Proszę o podanie poprawnego numeru telefonu. Np. 504704112.').matches(/^[0-9]{9}$/, 'Proszę o podanie poprawnego numeru telefonu. Np. 504704112.'),
  message: Yup.string().required("*pole wymagane").max(1200, 'Wiadomość zbyt długa (maks. 1200 znaków).'),
  termsAndConditions: Yup.bool()
    .required("Akceptacja polityki prywatności jest wymagana.")
    .oneOf([true], "Akceptacja polityki prywatności jest wymagana."),
});

const ContactPageForm = ({ dataForm }) => {
  const [isSend, setIsSend] = useState(false);
  const data = useStaticQuery(graphql`
    query contactPageContactQuery {
      wpPage(id: { eq: "cG9zdDoxNQ==" }) {
        homepage {
          formularzKontaktowy {
            trescWiadomosciPoPoprawnymPrzeslaniu {
              opis
              podTytul
              przyciskPoPrawo
              tytul
              przyciskPoLewo {
                target
                title
                url
              }
            }
          }
        }
      }
    }
  `);
  const shortData =
    data.wpPage.homepage.formularzKontaktowy
      ?.trescWiadomosciPoPoprawnymPrzeslaniu;
  const images = withArtDirection(
    getImage(dataForm.zdjecieDlaFormularza.localFile),
    [
      {
        media: "(max-width: 560px)",
        image: getImage(dataForm.zdjecieDoFormularzaMobile.localFile),
      },
      {
        media: "(max-width: 768px)",
        image: getImage(dataForm.zdjecieDoFormularzaTablet.localFile),
      },
    ]
  );

  const handleSubmit = async (data, { setSubmitting }) => {
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
      setIsSend(true);
    } catch (err) {
      console.error("handleSubmit", err);
    }
  };
  return (
    <StyledContactPageForm>
      <StyledLeftWrapper>
        <StyledModel>
          <GatsbyImage
            image={images}
            alt={dataForm.zdjecieDoFormularzaMobile?.altText || " "}
            objectFit="fill"
            title={dataForm.zdjecieDoFormularzaMobile?.title}
          />
        </StyledModel>
      </StyledLeftWrapper>
      <StyledRightWrapper>
        {isSend ? (
          <>
            <StyledMessageWrapper>
              <StyledTitle>
                {shortData.tytul && parse(shortData.tytul)}
              </StyledTitle>
              <StyledSubTitle>
                {shortData.podTytul && parse(shortData.podTytul)}
              </StyledSubTitle>
              <StyledDesc>{shortData.opis && parse(shortData.opis)}</StyledDesc>
              <StyledButtonsWrapper>
                {shortData.przyciskPoLewo.title && (
                  <Button
                    whereGo={shortData.przyciskPoLewo.url}
                    text={shortData.przyciskPoLewo.title}
                    textColor="var(--white)"
                    bgColor="var(--primary500)"
                    hasDeclaredPadding="8px 36px"
                    hasBorder="2px solid var(--primary500)"
                    hasFontSize="21px"
                    hasFontWeight="700"
                    hasTarget={shortData.przyciskPoLewo.target}
                    hoverBgColor="var(--primary900)"
                    ariaLabel="link"
                  />
                )}
                {shortData.przyciskPoPrawo && (
                  <Button
                    text={shortData.przyciskPoPrawo}
                    bgColor="var(--creamBg)"
                    hasBorder="2px solid var(--primary500)"
                    textColor="var(--primary500)"
                    hasDeclaredPadding="8px 36px"
                    hasFontWeight="700"
                    hasFontSize="21px"
                    onClickHandler={() => setIsSend(false)}
                    ariaLabel="link"
                  />
                )}
              </StyledButtonsWrapper>
            </StyledMessageWrapper>
          </>
        ) : (
          <>
            <StyledHeading>
              <StyledTitleImage>
                {dataForm.zdjecieDlaTytuluFormularza.localFile && (
                  <GatsbyImage
                    image={getImage(
                      dataForm.zdjecieDlaTytuluFormularza.localFile
                    )}
                    alt={dataForm.zdjecieDlaTytuluFormularza.altText || " "}
                    objectFit="fill"
                  />
                )}
              </StyledTitleImage>
              <StyledText
                hasdeclaredfontsize="48px"
                hasdeclaredfontfamily="Nocturne Serif"
                hasdeclaredfontcolor="#23423D"
                hasdeclaredtextalign="center"
                hasdeclaredpadding="0 20px"
                hasdeclaredlineheight="1.2em"
              >
                {dataForm.tytulFormularza && dataForm.tytulFormularza}
              </StyledText>
            </StyledHeading>
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
                {({ isSubmitting, errors, values }) => (
                  <Form
                    method="post"
                    netlify-honeypot="bot-field"
                    dataForm-netlify="true"
                    name="contact"
                  >
                    <StyledInputWrapper iserror={errors.firstName}>
                      <label htmlFor="firstName">{dataForm.tytulPolaImie}</label>
                      <Field type="text" name="firstName" id="firstName"/>
                      <StyledErrorMessage
                        iserror={errors.firstName}
                        name="firstName"
                        component="div"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper iserror={errors.lastName}>
                      <label htmlFor="lastName">{dataForm.tytulPolaNazwisko}</label>
                      <Field type="text" name="lastName" id="lastName"/>
                      <StyledErrorMessage
                        iserror={errors.lastName}
                        name="lastName"
                        component="div"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper emailprop iserror={errors.email}>
                      <label htmlFor="email">{dataForm.tytulPolaEmail}</label>
                      <Field type="email" name="email" id="email"/>
                      <StyledErrorMessage
                        iserror={errors.email}
                        name="email"
                        component="div"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper telprop iserror={errors.tel}>
                      <label htmlFor="tel">{dataForm.tytulPolaNrTelefonu}</label>
                      <Field
                        type="text"
                        placeholder="_ _ _  _ _ _  _ _ _"
                        name="tel"
                        id="tel"
                      />
                      <StyledErrorMessage
                        iserror={errors.tel}
                        name="tel"
                        component="div"
                        bottommessage="-38px"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper fullwidth iserror={errors.message}>
                      <label htmlFor="message">{dataForm.tytulPolaTrescWiadomosci}</label>
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
                        {dataForm.podpisPodObszaremDoWyslaniaWiadomosci}
                      </StyledText>
                    </div>
                    <StyledCustomCheckbox
                      iserror={errors.termsAndConditions}
                      value={values.termsAndConditions}
                    >
                      <Field
                        type="checkbox"
                        name="termsAndConditions"
                        id="termsAndConditions"
                      />
                      <label
                        htmlFor="termsAndConditions"
                        style={{ fontWeight: "400" }}
                      >
                        <AcceptIcon />
                        Akceptuję <Link to="/polityka-prywatnosci">politykę prywatności</Link>
                      </label>
                    </StyledCustomCheckbox>
                    <StyledButtonWrapper>
                      <button type="submit" disabled={isSubmitting} ariaLabel="Prześlij formularz">
                        <span>
                          {dataForm.trescPrzyciskuPotwierdzajacegoWyslanie}
                        </span>
                      </button>
                    </StyledButtonWrapper>
                  </Form>
                )}
              </Formik>
            </StyledHomeContactForm>
          </>
        )}
      </StyledRightWrapper>
    </StyledContactPageForm>
  );
};

export default ContactPageForm;
