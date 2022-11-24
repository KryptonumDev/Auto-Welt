import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHomeRecommendationsElement = styled.div`
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  border-width: 0px 0px 5px 5px;
  border-style: solid;
  border-color: var(--borderTopOrange);
  overflow: hidden;
  height: 228px;
  margin: 0 20px;
  background: var(--creamBg);
  padding: 43px;
  position: relative;
  flex: 1;

  @media (max-width: 462px) {
    margin: 0 36px;
  }

  @media (max-width: 350px){
    margin: 0 20px;
  }

  a {
    text-decoration: none;
    color: var(--primary500);
    font: 500 16px/19px "Roboto Condensed";
    transition: color 250ms linear;
    max-width: 85%;
    display: block;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }

    &:hover {
      color: var(--secondary300);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 43px 33px;
  }
`;

export const StyledImageWrapper = styled(motion.div)`
  position: absolute;
  right: 34px;
  top: 20px;

  @media only screen and (max-width: 768px) {
    top: 16px;
    right: 8px;
  }

  @media only screen and (max-width: 414px) {
    display: none;
  }
`;

export const StyledTextWrapper = styled.div`
  width: 100%;
  max-width: 275px;
  margin: 10px 0 0;
  font: 400 14px/1.2em "Roboto Condensed";

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    max-width: 80%;
  }

  @media only screen and (max-width: 414px) {
    max-width: unset;
  }
`;
