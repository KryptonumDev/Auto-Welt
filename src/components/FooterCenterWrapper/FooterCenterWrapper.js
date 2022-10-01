import React from "react"

import FooterCenterWrapperArticle from "../FooterCenterWrapperArticle/FooterCenterWrapperArticle";

import {
    StyledFooterCenterWrapper,
    StyledFastLinks,
    StyledArticlesWrapper,
} from "./StyledFooterCenterWrapper";
import { StyledText } from "../Text/StyledText";
import { StyledLink } from "../Link/StyledLink";

const FooterCenterWrapper = () => {
    return (
        <StyledFooterCenterWrapper>
            <StyledText
                hasdeclaredfontfamily="Nocturne Serif"
                hasdeclaredfontsize="24px"
                hasdeclaredfontweight="400"
                hasdeclaredlineheight="29px"
                hasdeclaredfontcolor="var(--secondary500)"
            >
                Szybkie linki
            </StyledText>
            <StyledFastLinks>
                <StyledLink
                    to="/kolekcje-modeli"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    Kolekcje modeli
                </StyledLink>
                <StyledLink
                    to="/sklep"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    Sklep
                </StyledLink>
                <StyledLink
                    to="/o-mnie"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    O mnie
                </StyledLink>
                <StyledLink
                    to="/ciekawostki"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    Ciekawostki
                </StyledLink>
                <StyledLink
                    to="/terminarz"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    Terminarz
                </StyledLink>
                <StyledLink
                    to="/artykuly"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    Artykuły
                </StyledLink>
                <StyledLink
                    to="/wystawy"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    Wystawy
                </StyledLink>
                <StyledLink
                    to="/polityka-prywatnosci"
                    hasdeclaredmargin="0 35px 10px 0"
                    hasdeclaredfontcolor="var(--creamText)"
                    hasdeclaredfontsize="16px"
                    hasdeclaredtextdecoration="default"
                >
                    Polityka prywatności
                </StyledLink>
            </StyledFastLinks>
            <StyledText
                hasdeclaredfontfamily="Nocturne Serif"
                hasdeclaredfontsize="24px"
                hasdeclaredfontweight="400"
                hasdeclaredlineheight="29px"
                hasdeclaredmargin="42px 0 0 0"
                hasdeclaredfontcolor="var(--secondary500)"
            >
                Artykuły
            </StyledText>
            <StyledArticlesWrapper>
                <FooterCenterWrapperArticle />
                <FooterCenterWrapperArticle />
            </StyledArticlesWrapper>
        </StyledFooterCenterWrapper>
    );
}

export default FooterCenterWrapper