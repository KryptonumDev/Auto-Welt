import React from 'react'

import ChooseArticle from "../ChooseArticle/ChooseArticle"
 
import { 
    StyledExhibitionTemplateContent,
    StyledAsideWrapper,
    StyledContentWrapper
} from "./StyledExhibitionTemplateContent"

const ExhibitionTemplateContent = () => {
  return (
    <StyledExhibitionTemplateContent>
        <StyledAsideWrapper>

        </StyledAsideWrapper>
        <StyledContentWrapper>
            <ChooseArticle />
        </StyledContentWrapper>
    </StyledExhibitionTemplateContent>
  )
}

export default ExhibitionTemplateContent