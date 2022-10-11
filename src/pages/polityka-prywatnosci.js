import React, { useState, useEffect } from 'react'
import { graphql } from "gatsby"
import parse from "html-react-parser"

import { 
    StyledPrivacyPolicy,
    StyledTextWrapper,
    StyledOneLineWrapper,
    StyledOneLineContent,
    StyledTextOut,
    StyledElement,
    StyledTitleWrapper,
    StyledContentWrapper
} from "../components/PrivacyPolicy/StyledPrivacyPolicy"
import { StyledText } from '../components/Text/StyledText'

const PrivacyPolicy = ({ data }) => {
    const [leftData, setLeftData] = useState([]);
    const [rightData, setRightData] = useState([]);

    useEffect(()=>{
        const left = [];
        const right = [];

        data.wpPage.politykaPrywatnosCi.pytanieIOdpowiedz.forEach((e, index) => {
            if(index % 2 == 0){
                left.push(e);
            }else{
                right.push(e);
            }
        })

        setLeftData(left);
        setRightData(right);

        console.log(left);
        console.log(right);
    }, [data])


    return (
        <StyledPrivacyPolicy>
            <StyledText
                as="h1"
                hasdeclaredfontfamily="Nocturne Serif"
                hasdeclaredfontsize="48px"
                hasdeclaredlineheight="1.2em"
                hasdeclaredfontcolor="var(--primary500)"
            >
                {data.wpPage.politykaPrywatnosCi.tytulStrony}
            </StyledText>
            <StyledOneLineWrapper>
                <StyledTitleWrapper>
                    {parse(data.wpPage.politykaPrywatnosCi.pierwszePytanieNaCalaStrone)}
                </StyledTitleWrapper>
                <StyledOneLineContent>
                    <StyledTextOut>
                        {parse(data.wpPage.politykaPrywatnosCi.lewaOdpowiedzDo)}
                    </StyledTextOut>
                    <StyledTextOut>
                        {parse(data.wpPage.politykaPrywatnosCi.prawaOdpowiedzDoDlugiegoPytania)}
                    </StyledTextOut>
                </StyledOneLineContent>
            </StyledOneLineWrapper>
            <StyledTextWrapper>
                <div>
                    {leftData.map(e => (
                        <StyledElement key={e.pytanie}>
                            <StyledTitleWrapper>
                                {parse(e.pytanie)}
                            </StyledTitleWrapper>
                            <StyledContentWrapper>
                                {parse(e.odpowiedz)}
                            </StyledContentWrapper>
                        </StyledElement>
                    ))}
                </div>
                <div>
                    {rightData.map(e => (
                        <StyledElement key={e.pytanie}>
                            <StyledTitleWrapper>
                                {parse(e.pytanie)}
                            </StyledTitleWrapper>
                            <StyledContentWrapper>
                                {parse(e.odpowiedz)}
                            </StyledContentWrapper>
                        </StyledElement>
                    ))}
                </div>
            </StyledTextWrapper>
        </StyledPrivacyPolicy>
    )
}

export default PrivacyPolicy

export const query = graphql`
query privacyPolicyQuery {
    wpPage(id: {eq: "cG9zdDozODU="}) {
      politykaPrywatnosCi {
        lewaOdpowiedzDo
        pierwszePytanieNaCalaStrone
        prawaOdpowiedzDoDlugiegoPytania
        tytulStrony
        pytanieIOdpowiedz {
          odpowiedz
          pytanie
        }
      }
    }
  }
`