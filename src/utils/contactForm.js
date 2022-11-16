import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Imię powinno mieć 3-30 znaków.")
    .required("Proszę o podanie imienia.")
    .max(30, "Imię powinno mieć 3-30 znaków."),
  lastName: Yup.string()
    .min(3, "*za krótkie")
    .required("Proszę o podanie nazwiska.")
    .max(40, "Nazwisko powinno mieć 3-30 znaków."),
  email: Yup.string()
    .email("Proszę o podanie poprawnego adresu E-mail.")
    .required("Proszę o podanie adresu E-mail."),
  tel: Yup.string()
    .length(11, "Proszę o podanie poprawnego numeru telefonu. Np. 504 704 112.")
    .matches(
      /^[0-9]{3} [0-9]{3} [0-9]{3}$/,
      "Proszę o podanie poprawnego numeru telefonu. Np. 504 704 112."
    ),
  message: Yup.string()
    .required("*pole wymagane")
    .max(1200, "Wiadomość zbyt długa (maks. 1200 znaków)."),
  termsAndConditions: Yup.bool()
    .required("Akceptacja polityki prywatności jest wymagana.")
    .oneOf([true], "Akceptacja polityki prywatności jest wymagana."),
});

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  message: "",
  termsAndConditions: false,
};
