import styled from "styled-components";
import { motion } from "framer-motion"

export const StyledQuestion = styled.div`
  width: 100%;
  padding-bottom: ${({ isopen }) => (isopen ? "0" : "20px")};
  trainsition: padding 250ms;
  cursor: pointer;
  @media only screen and (max-width: 768px){
    padding-bottom: ${({ isopen }) => (isopen ? "0" : "15px")};
  }
`;
export const StyledAnswerWrapper = styled(motion.div)`
  width: 100%;
  padding: 15px 59px 20px 68px;
  font-size: 18px;
  line-height: 1.2em;
  font-weight: 500;
  font-family: 'Roboto';
  ul,ol{
    margin-left: 20px;
  }
  @media only screen and (max-width: 768px){
    color: #23423D;
    font-size: 16px;
  }
  @media only screen and (max-width: 420px){
    padding: 15px 23px 20px 23px;
    max-width: 90%;
  }
  @media only screen and (max-width: 375px){
    font-size: 14px;
  }
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
  img{
    width: 100%;
    height: 100%;
  }
  .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
  }
`
export const StyledQuestionText = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.2em;
  font-weight: 500;
  color: #fff;
  max-width: 70%;
  @media only screen and (max-width: 375px){
    font-size: 15px;
  }
`