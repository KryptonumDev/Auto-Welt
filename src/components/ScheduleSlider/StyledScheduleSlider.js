import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledScheduleSlider = styled.div`
  width: 100%;
  position: relative;
  justify-content: ${({ slides }) => slides === 1 ? "center" : "space-between"};
  align-items: center;
  gap: 10px;

  .slick-list{
    padding: 20px 0;
  }

  .one-el{}

  @media only screen and (max-width: 768px) {
    width: calc(100% - 30px);
    margin: 0 auto;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const StyledPrevArrow = styled(motion.div)`
  width: 40px;
  height: 56px;
  cursor: pointer;
  position: absolute;
  left: -70px;
  top: 50%;
  transform: translateY(-50%);

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  @media only screen and (max-width: 1280px) {
    left: -25px;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    left: -20px;
    top: 35%;
    transform: translateY(-50%);
    z-index: 1;
  }

  @media only screen and (max-width: 375px) {
    top: 109%;
    left: 10%;
  }
`;

export const StyledSlides = styled.div`
  display: flex;
  gap: 15px;
  justify-content: ${({ slides }) => slides === 1 ? "center" : "space-between"};
  width: 100%;
`;

export const StyledNextArrow = styled(motion.div)`
  width: 40px;
  height: 56px;
  cursor: pointer;
  position: absolute;
  right: -70px;
  top: 50%;
  transform: translateY(-50%);

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  @media only screen and (max-width: 1280px) {
    right: -25px;
  }

  @media only screen and (max-width: 768px) {
    position: absolute;
    right: -20px;
    top: 35%;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 375px) {
    top: 109%;
    right: 10%;
  }
`;
