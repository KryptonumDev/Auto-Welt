import styled from "styled-components";
import { motion } from "framer-motion"

export const StyledQuestion = styled.div`
  width: 100%;
  padding-bottom: ${({ isopen }) => (isopen ? "0" : "20px")};
`;
export const StyledAnswerWrapper = styled(motion.div)`
  width: 100%;
  padding: 15px 59px 20px 68px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  font-family: 'Roboto';
`;
export const StyledQuestionWrapper = styled.div`
  display: flex;
  gap: 17px;
  min-height: 59px;
  padding: 23px;
  position: relative;
  > svg {
    position: relative;
    z-index: 1;
    transition: transform 250ms ease-in-out;
    transform: ${({ isopen }) => (isopen ? "rotate(0)" : "rotate(180deg)")};
  }
`;
export const StyledBgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`
export const StyledQuestionText = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 21px;
  color: #fff;
`