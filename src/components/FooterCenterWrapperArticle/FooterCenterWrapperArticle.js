import React from 'react'

import {
    StyledFooterCenterWrapperArticle,
    StyledTop,
    StyledBottom,
} from "./StyledFooterCenterWrapperArticle";
import { StyledText } from "../Text/StyledText";

const FooterCenterWrapperArticle = () => {
    return (
        <StyledFooterCenterWrapperArticle>
            <StyledTop></StyledTop>
            <StyledBottom>
                <StyledText>
                    Charakterystyka czasów PRL przez pryzmat motoryzacji
                </StyledText>
            </StyledBottom>
        </StyledFooterCenterWrapperArticle>
    );
}

export default FooterCenterWrapperArticle
