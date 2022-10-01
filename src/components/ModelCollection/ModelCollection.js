import React from 'react'

import Button from "../Button/Button"

import { 
    StyledModelCollection, 
    StyledImage, 
    StyledTitle, 
    StyledButtonSpace 
} from "./StyledModelCollection"

const ModelCollection = () => {
  return (
    <StyledModelCollection>
        <StyledImage>

        </StyledImage>
        <StyledTitle>
            dsa dsa dsad dsa
        </StyledTitle>
        <StyledButtonSpace>
            <Button
                whereGo="/kontakt"
                text="CHCĘ ZOBACZYĆ"
                textColor="var(--white)"
                bgColor="var(--primary500)"
                hasMaxWidth="175px"
            />
        </StyledButtonSpace>
    </StyledModelCollection>
  )
}

export default ModelCollection