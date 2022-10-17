import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHomeRecommendations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1144px;
  margin: 0 auto 120px auto;
  padding: 0 32px;

  @media only screen and (max-width: 768px){
    padding: 0;
    margin-bottom: ${({ isaboutpage }) => isaboutpage ? "0" : "60px"};
    > h2{
      font-size: 38px;
    }
  }
  @media only screen and (max-width: 462px){
    padding: 0 16px;
  }
  @media only screen and (max-width: 375px){
    > h2{
      font-size: 34px;
    }
  }
`;
export const StyledRecommendationsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const StyledButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 40px;

  @media only screen and (max-width: 1065px){
    a{
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 768px){
    flex-direction: column;
    gap: 12px;
    margin-top: 30px;
  }
  @media only screen and (max-width: 685px){
    a{
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 462px){
    width: 92%;
    a{
      width: 100%;
    }
  }
  @media only screen and (max-width: 375px){
    a{
      font-size: 15px;
    }
  }
`;

export const StyledSlides = styled.div`
  width: 87%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  gap: 10px;
  @media only screen and (max-width: 462px){
    justify-content: center;
  }
`;

export const StyledArrowWrapper = styled(motion.div)`
  width: 30px;
  height: 55px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  svg {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 768px){
    background-color: var(--primary500);
    width: 40px;
    height: 56px;
    padding: 6px;
    transform: translateX(${({ hasdeclaredtransform }) => hasdeclaredtransform ? hasdeclaredtransform : "0"});
  }
  @media only screen and (max-width: 462px){
    background: transparent;
  }
`;
