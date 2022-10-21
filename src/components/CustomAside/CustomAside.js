import React from "react";

import {
  StyledCustomAside,
  StyledContents,
  StyledChooseCollections,
} from "./StyledCustomAside";

const CustomAside = () => {
  return (
    <StyledCustomAside>
      <StyledContents></StyledContents>
      <StyledChooseCollections></StyledChooseCollections>
    </StyledCustomAside>
  );
};

export default CustomAside;
