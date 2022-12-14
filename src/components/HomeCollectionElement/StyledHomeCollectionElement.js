import styled from "styled-components";
import { Link } from "gatsby";

export const StyledHomeCollectionElement = styled(Link)`
  position: relative;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  max-width: 325px;
  width: 100%;
  text-decoration: none;
  align-items: center;
  justify-content: center;

  &:hover {
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

  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }

  > div {
    &:last-child{
      margin-left: 5%;
    }
  }

  @media only screen and (max-width: 1065px) {
    p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 1024px){
    > div {
      &:last-child{
        width: 92%;
        margin-left: 1%;
      }
    }
  }

  @media only screen and (max-width: 685px) {
    max-width: 339px;
    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 375px) {
    p {
      font-size: 15px;
    }
  }
`;

export const StyledBackground = styled.div`
  width: 294px;
  height: 192px;
  margin-bottom: 53px;

  img {
    width: 100%;
    height: 100%;
  }

  .gatsby-image-wrapper {
  }

  @media only screen and (max-width: 1024px){
    width: 212px;
    height: 139px;
  }
`;

export const StyledImage = styled.div`
  width: 294px;
  position: absolute;
  top: 23px;
  left: 50%;
  transform: translateX(calc(-50% + 23px));

  img {
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

  @media only screen and (max-width: 1024px){
    width: 212px;
  }
`;
