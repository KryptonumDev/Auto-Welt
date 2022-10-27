import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledScheduleSlider = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

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

  @media only screen and (max-width: 1244px) {
    position: relative;
    top: auto;
    left: auto;
    transform: translateY(0);
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
  justify-content: space-between;
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

  @media only screen and (max-width: 1244px) {
    position: relative;
    top: auto;
    right: auto;
    transform: translateY(0);
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
