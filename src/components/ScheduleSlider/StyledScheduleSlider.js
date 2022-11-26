import styled from "styled-components";

export const StyledScheduleSlider = styled.div`
  width: 100%;
  position: relative;
  justify-content: ${({ slides }) => slides === 1 ? "center" : "space-between"};
  align-items: center;
  gap: 10px;

  .slick-slider{
    width: 100%;
  }

  .slick-list{
    padding: 10px 0;
    width: 100%;
  }

  .slick-track{
    width: 100%;
    gap: 20px;
    display: flex;
  }

  .one-el{
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100% - 30px);
    margin: 0 auto;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
  }
`;

export const StyledPrevArrow = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 56px;
  cursor: pointer;
  position: absolute;
  left: -70px;
  top: 50%;
  transform: translateY(-50%);
  display: ${({ slides }) => slides < 3 ? "none" : "block"};

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
    display: ${({ slides }) => slides < 2 ? "none" : "block"};
    position: absolute;
    left: -20px;
    top: 30%;
    transform: translateY(-50%);
    z-index: 1;
  }

  @media only screen and (max-width: 375px) {
    top: 104%;
    left: 10%;
  }
`;

export const StyledNextArrow = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 56px;
  cursor: pointer;
  position: absolute;
  right: -70px;
  top: 50%;
  transform: translateY(-50%);
  display: ${({ slides }) => slides < 3 ? "none" : "block"};

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
    display: ${({ slides }) => slides < 2 ? "none" : "block"};
    position: absolute;
    right: -20px;
    top: 30%;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 375px) {
    top: 104%;
    right: 10%;
  }
`;
