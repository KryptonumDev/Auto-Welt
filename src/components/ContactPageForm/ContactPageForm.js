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

import useWindowSize from "../../utils/getWindowSize";
import AcceptIcon from "../../images/acceptSvg.svg";

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
  const width = useWindowSize();
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
        `${process.env.WORDPRESS_URL}/wp-json/contact-form-7/v1/contact-forms/${process.env.WORDPRESS_FORM_ID}/feedback`,
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
          <GatsbyImage image={images} alt={dataForm.zdjecieDoFormularzaMobile.altText} objectFit="fill" />
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
                    hasDeclaredPadding="10px 36px"
                    hasBorder="2px solid var(--primary500)"
                    hasFontSize="21px"
                    hasFontWeight="500"
                    hasTarget={shortData.przyciskPoLewo.target}
                    hoverBgColor="var(--primary900)"
                  />
                )}
                {shortData.przyciskPoPrawo && (
                  <Button
                    text={shortData.przyciskPoPrawo}
                    bgColor="var(--creamBg)"
                    hasBorder="2px solid var(--primary500)"
                    textColor="var(--primary500)"
                    hasDeclaredPadding="10px 36px"
                    hasFontWeight="500"
                    hasFontSize="21px"
                    onClickHandler={() => setIsSend(false)}
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
                    alt={dataForm.zdjecieDlaTytuluFormularza.altText}
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
                      <label>{dataForm.tytulPolaImie}</label>
                      <Field type="text" name="firstName" />
                      <StyledErrorMessage
                        iserror={errors.firstName}
                        name="firstName"
                        component="div"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper iserror={errors.lastName}>
                      <label>{dataForm.tytulPolaNazwisko}</label>
                      <Field type="text" name="lastName" />
                      <StyledErrorMessage
                        iserror={errors.lastName}
                        name="lastName"
                        component="div"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper iserror={errors.email}>
                      <label>{dataForm.tytulPolaEmail}</label>
                      <Field type="email" name="email" />
                      <StyledErrorMessage
                        iserror={errors.email}
                        name="email"
                        component="div"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper iserror={errors.tel}>
                      <label>{dataForm.tytulPolaNrTelefonu}</label>
                      <Field
                        type="text"
                        placeholder="_ _ _  _ _ _  _ _ _"
                        name="tel"
                      />
                      <StyledErrorMessage
                        iserror={errors.tel}
                        name="tel"
                        component="div"
                      />
                    </StyledInputWrapper>
                    <StyledInputWrapper fullwidth iserror={errors.message}>
                      <label>{dataForm.tytulPolaTrescWiadomosci}</label>
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
                        {dataForm.podpisPodObszaremDoWyslaniaWiadomosci}
                      </StyledText>
                    </div>
                    <StyledCustomCheckbox iserror={errors.termsAndConditions} value={values.termsAndConditions}>
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
                        Akceptuję <Link to="/">politykę prywatności</Link>
                      </label>
                    </StyledCustomCheckbox>
                    <StyledButtonWrapper>
                      <button type="submit" disabled={isSubmitting}>
                        <Button
                          text={dataForm.trescPrzyciskuPotwierdzajacegoWyslanie}
                          bgColor="var(--secondary500)"
                          textColor="var(--primary900)"
                          hasBorder="2px solid var(--secondary500)"
                          hasFontSize={width < 376 ? "15px" : "21px"}
                          hasDeclaredPadding="10px 33px"
                          hoverBgColor="var(--secondary700)"
                        />
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
