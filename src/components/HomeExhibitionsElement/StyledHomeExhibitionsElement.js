import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "gatsby";

export const StyledElementLink = styled(Link)`
  text-decoration: none;
  width: ${({ isscheduleelement, slidescount }) =>
    slidescount < 3
      ? "calc(50% - 15px)"
      : isscheduleelement
      ? "calc(50% - 15px)"
      : "33%"};
  max-width: ${({ isscheduleelement, slidescount }) =>
    slidescount < 3 ? "532px" : isscheduleelement ? "532px" : "340px"};
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  border-top: 6px solid var(--borderTopOrange);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  background-color: #faf7f1;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    > div {
      > div {
        &:nth-child(2) {
          img {
            transition: transform 250ms linear, mix-blend-mode 250ms linear;
            transform: scale(1.1);
            mix-blend-mode: unset;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    width: ${({ isscheduleelement }) => (isscheduleelement ? "50%" : "100%")};
  }

  @media only screen and (max-width: 648px) {
    width: 100%;
    max-width: unset;
  }
`;

export const StyledHomeExhibitionsElement = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1065px) {
    > a {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 768px) {
    > a {
      width: ${({ isscheduleelement }) =>
        isscheduleelement ? "82%" : "initial"};
      font-size: 21px;
    }
  }

  @media only screen and (max-width: 685px) {
    > a {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 375px) {
    > a {
      width: 85%;
      max-width: 300px;
      font-size: 15px;
    }
  }
`;

export const StyledDataInformationWrapper = styled.div`
  padding: 24px 34px;
  width: 100%;
  position: relative;
  min-height: 100px;
`;

export const StyledDataWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const StyledLogoWrapper = styled.div`
  width: 100%;
  height: 190px;
  overflow: hidden;

  img {
    mix-blend-mode: multiply;
    width: 100%;
    height: 100%;

    &:not(:hover) {
      transition: transform 250ms linear, mix-blend-mode 250ms linear;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const StyledContentWrapper = styled.div`
  padding: 26px 34px;
  width: 100%;
`;

export const StyledContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 14px;
  width: 100%;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    > svg {
      flex-shrink: 0;
      margin-right: 8px;
    }
  }
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
