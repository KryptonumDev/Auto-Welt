import React from "react";
import {
  StyledHamburgerButton,
  StyledHamburgerBox,
  StyledHamburgerInner,
} from "./StyledHamburgerButton";

const HamburgerButton = ({ openMenu, isOpen }) => {
  return (
    <StyledHamburgerButton aria-label="otwórz menu" onClick={openMenu} isopen={isOpen}>
      <StyledHamburgerBox>
        <StyledHamburgerInner />
      </StyledHamburgerBox>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
