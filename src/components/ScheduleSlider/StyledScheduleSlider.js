import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledScheduleSlider = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export const StyledPrevArrow = styled(motion.div)`
  width: 40px;
  height: 56px;
  cursor: pointer;
  position: absolute;
  left: -70px;
  top: 50%;
  transform: translateY(-50%);
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
`;
