import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../Button/Button"

import { StyledText } from "../Text/StyledText"
import { 
    StyledHomeExhibitionsElement, 
    StyledDataInformationWrapper, 
    StyledDataWrapper,
    StyledLogoWrapper, 
    StyledContentWrapper,
    StyledContentList
} from "./StyledHomeExhibitionsElement"

import ListIcon from "../../images/ListIcon.svg"

const HomeExhibitionsElement = () => {
    return (
        <StyledHomeExhibitionsElement>
            <StyledDataInformationWrapper>
                <StyledDataWrapper>
                    <StyledText
                        hasdeclaredfontsize="32px"
                        hasdeclaredfontcolor="var(--secondary500)"
                        hasdeclaredlineheight="1.2em"
                    >
                        23
                    </StyledText>
                    <StyledText
                        hasdeclaredfontsize="26px"
                        hasdeclaredfontcolor="var(--primary500)"
                        hasdeclaredlineheight="1.2em"
                        hasdeclaredpadding="0 0 1.5px 0"
                    >
                        września 2022
                    </StyledText>
                </StyledDataWrapper>
                <StyledText>
                    Warszawa
                </StyledText>
            </StyledDataInformationWrapper>
            <StyledLogoWrapper>
                <StaticImage 
                    placeholder="blurred" 
                    src="../../images/RectangleExample.png"
                    alt="A dinosaur" 
                />
            </StyledLogoWrapper>
            <StyledContentWrapper>
                <StyledText
                    hasdeclaredfontcolor="var(--primary500)"
                    hasdeclaredfontsize="20px"
                >
                    Kultowe samochody osobowe z czasów PRL-u.
                </StyledText>
                <StyledContentList>
                    <div>
                        <ListIcon />
                        <StyledText
                            hasdeclaredfontsize="14px"
                            hasdeclaredlineheight="1.2em"
                        >
                            samochody osobowe bloku Wschodniego z okresu PRL
                        </StyledText>
                    </div>
                    <div>
                        <ListIcon />
                        <StyledText
                            hasdeclaredfontsize="14px"
                            hasdeclaredlineheight="1.2em"
                        >
                            pojazdy polskiej produkcji
                        </StyledText>
                    </div>
                    <div>
                        <ListIcon />
                        <StyledText
                            hasdeclaredfontsize="14px"
                            hasdeclaredlineheight="1.2em"
                        >
                            samochody z Niemiec Wschodnich, Rumunii, Związku Radzieckiego, byłej Jugosławii
                        </StyledText>
                    </div>
                </StyledContentList>
            </StyledContentWrapper>     
            <Button 
                text="CZYTAM WIĘCEJ" 
                bgColor="var(--secondary500)" 
                hasBorder="2px solid var(--secondary500)"
                textColor="var(--primary900)"
                hasMaxWidth="228px"
                hasFontSize="21px"
            />
        </StyledHomeExhibitionsElement>
    )
}


export default HomeExhibitionsElement