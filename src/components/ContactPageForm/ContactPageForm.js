import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";

import { 
    StyledContactPageForm,
    StyledLeftWrapper,
    StyledModel,
    StyledRightWrapper,
    StyledHeading,
    StyledTitleImage,
    StyledHomeContactForm
} from "./StyledContactPageForm"
import {
    StyledInputWrapper,
    StyledErrorMessage,
    StyledButtonWrapper,
    StyledCustomCheckbox
} from "../HomeContactForm/StyledHomeContactForm";
import { StyledText } from '../Text/StyledText';

import useWindowSize from "../../utils/getWindowSize";

const ContactSchema = Yup.object().shape({
    firstName: Yup.string().min(2, "*za krótkie!").required("*pole wymagane"),
    lastName: Yup.string().min(2, "*za krótkie").required("*pole wymagane"),
    email: Yup.string().email("*niepoprawny email").required("*pole wymagane"),
    tel: Yup.string().length(9).required("*pole wymagane"),
    message: Yup.string().required("*pole wymagane"),
    termsAndConditions: Yup.bool().required("*musisz zaakceptować").oneOf([true], '*musisz zaakceptować')
});

const ContactPageForm = ({ data }) => {
    const width = useWindowSize();
    const handleSubmit = () => {
        console.log("elo siema");
      };
    return (
        <StyledContactPageForm>
            <StyledLeftWrapper>
                <StyledModel>

                </StyledModel>
            </StyledLeftWrapper>
            <StyledRightWrapper>
                <StyledHeading>
                    <StyledTitleImage>

                    </StyledTitleImage>
                    <StyledText>

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
                    >
                        {({ isSubmitting, errors, values }) => (
                        <Form>
                            <StyledInputWrapper iserror={errors.firstName}>
                            <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaImie}</label>
                            <Field type="text" name="firstName" />
                            <StyledErrorMessage iserror={errors.firstName} name="firstName" component="div" />
                            </StyledInputWrapper>
                            <StyledInputWrapper iserror={errors.lastName}>
                            <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaNazwisko}</label>
                            <Field type="text" name="lastName" />
                            <StyledErrorMessage iserror={errors.lastName} name="lastName" component="div" />
                            </StyledInputWrapper>
                            <StyledInputWrapper iserror={errors.email}>
                            <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaEMail}</label>
                            <Field type="email" name="email" />
                            <StyledErrorMessage iserror={errors.email} name="email" component="div" />
                            </StyledInputWrapper>
                            <StyledInputWrapper iserror={errors.tel}>
                            <label>{data.wpPage.homepage.formularzKontaktowy.tytulPolaNrTelefonu}</label>
                            <Field type="text" placeholder="_ _ _  _ _ _  _ _ _" name="tel" />
                            <StyledErrorMessage iserror={errors.tel} name="tel" component="div" />
                            </StyledInputWrapper>
                            <StyledInputWrapper fullwidth iserror={errors.message}>
                            <label>{data.wpPage.homepage.formularzKontaktowy.tytulPola}</label>
                            <Field as="textarea" name="message" />
                            <StyledErrorMessage iserror={errors.message} name="message" component="div" />
                            </StyledInputWrapper>
                            <div>
                            <StyledText
                                hasdeclaredfontsize="18px"
                                hasdeclaredfontweight="400"
                                hasdeclaredlineheight="1.2em"
                                hasdeclaredfontcolor="var(--primary500)"
                            >
                                {data.wpPage.homepage.formularzKontaktowy.podpisPodObszaremDoWyslaniaWiadomosci}
                            </StyledText>
                            </div>
                            <StyledCustomCheckbox value={values.termsAndConditions}>
                            <Field type="checkbox" name="termsAndConditions" id="termsAndConditions" />
                            <label htmlFor="termsAndConditions" style={{ fontWeight: "400" }}>Akceptuję <Link to="/">politykę prywatności</Link></label>
                            <StyledErrorMessage name="termsAndConditions" component="div" />
                            </StyledCustomCheckbox>
                            <StyledButtonWrapper>
                            <button type="submit" disabled={isSubmitting}>
                                <Button
                                    text={data.wpPage.homepage.formularzKontaktowy.trescPrzyciskuPotwierdzajacegoWyslanie}
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
            </StyledRightWrapper>
        </StyledContactPageForm>
  )
}

export default ContactPageForm