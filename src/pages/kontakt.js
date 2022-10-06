import React from "react"

import HomeContact from "../components/HomeContact/HomeContact"
import Questions from "../components/Questions/Questions"
import QuestionContact from "../components/QuestionContact/QuestionContact";
// import GoogleMapsContact from "../components/GoogleMapsContact/GoogleMapsContact";

import { StyledText } from "../components/Text/StyledText"

const Contact = () => {
    return (
        <>
            <StyledText
                as="h1"
                hasdeclaredfontsize="clamp(24px, 48px, 60px)"
                hasdeclaredfontcolor="var(--primary500)"
                hasdeclaredmargin="45px 0 30px"
                hasdeclaredfontfamily="Nocturne Serif"
            >
                Skelp w trakcie budowy
            </StyledText>
            <StyledText
                hasdeclaredfontsize="24px"
                hasdeclaredlineheight="28px"
                hasdeclaredtextalign="left"
                hasdeclaredmargin="0 0 65px"
                hasdeclaredmaxwidth="870px"
            >
                Chcesz nawiązać współpracę i zorganizować 
                wspólnie wystawę? A może posiadasz jakieś ciekawe 
                informacje na temat motoryzacji w 
                okresie PRL-u? Skontaktuj się ze mną!
            </StyledText>
            <HomeContact leftImageSrc="../../images/kontaktImage.jpg" />
            {/* <GoogleMapsContact /> */}
            <Questions />
            <QuestionContact isContactPage />
        </>
    )
}

export default Contact;