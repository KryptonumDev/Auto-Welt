import React from "react";

import ChooseArticle from "../ChooseArticle/ChooseArticle";
import CustomAside from "../CustomAside/CustomAside";

import {
  StyledExhibitionTemplateContent,
  StyledAsideWrapper,
  StyledContentWrapper,
} from "./StyledExhibitionTemplateContent";

const ExhibitionTemplateContent = ({ exhibitionData }) => {
  return (
    <StyledExhibitionTemplateContent>
      <StyledAsideWrapper>
        <CustomAside asideData={exhibitionData.zielonyElementZKolekcjamiDoPolecenia} />
      </StyledAsideWrapper>
      <StyledContentWrapper>
        <ChooseArticle />
      </StyledContentWrapper>
    </StyledExhibitionTemplateContent>
  );
};

export default ExhibitionTemplateContent;
