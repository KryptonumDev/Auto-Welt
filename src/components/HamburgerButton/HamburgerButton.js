import React from "react";
import {
  StyledHamburgerButton,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from "./StyledHamburgerButton";

const HamburgerButton = ({ openMenu, isOpen }) => {
  return (
    <StyledHamburgerButton onClick={openMenu} isopen={isOpen}>
      <StyledHamburgerBox>
        <StyledHamburgerInner />
      </StyledHamburgerBox>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
