import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import { motion } from "framer-motion";

export const StyledCalendarComponent = styled.div`
  width: 100%;

  .calendarTitle {
    font: normal 700 36px/1.2em "Roboto Condensed", Arial;
    text-align: center;
    color: #23423d;
    text-transform: uppercase;
    padding-bottom: 18px;
  }

  .calendarWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .prevArrow {
    width: 26px;
    height: 56px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }

    > svg {
      width: 100%;
      height: 100%;
    }
  }

  .nextArrow {
    width: 26px;
    height: 56px;
    cursor: pointer;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }

    > svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 786px) {
    .calendarTitle {
      font-size: 30px;
    }

    .calendarWrapper {
      position: relative;
    }

    .prevArrow {
      position: absolute;
      left: 0;
      top: -52px;

      svg {
        width: 27px;
        height: 34px;
      }
    }

    .nextArrow {
      position: absolute;
      right: 0;
      top: -52px;

      svg {
        width: 27px;
        height: 34px;
      }
    }
  }
  @media only screen and (max-width: 516px) {
    .calendarTitle {
      font-size: 26px;
    }
  }
`;

export const StyledCalendarElement = styled.div`
  width: 100%;
  height: 100%;
`

export const StyledCalendar = styled((props) => (
  <Calendar {...props} />
))`
  width: 100%;
  position: relative;
  border-width: 6px 0 2px 2px;
  border-style: solid;
  border-color: #23423D;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  
  button{
    width: 148px;
    height: 97px;
    border-right: 2px solid #23423D;
    border-top: 1px solid transparent;
    border-bottom: 1px solid #23423D;
    border-left: none;
    background-color: var(--background500);
    position: relative;
    overflow: visible !important;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    &:disabled{
      border-color: none;
    }

    > abbr {
      position: absolute;
      z-index: 1;
      top: 9px;
      right: 13px;
      color: #23423D;
      font: normal 500 32px "Nocturne Serif", Arial;
    }

    @media only screen and (max-width: 768px){
      height: 77px;
      width: 99px;

      > abbr{
        font-size: 24px;
        top: 5px;
        right: 12px;
      }
    }

    @media only screen and (max-width: 516px){
      height: auto;
      width: auto;
      height: 40px;
      width: 38px;

      > abbr {
        font-size: 14px;
        right: 6px;
      }
    }
  }

  .react-calendar__month-view__weekdays{
    > div {
      border-right: 2px solid #23423D;
      border-bottom: 1px solid #23423D;
      text-align: center;
      color: #23423D;
      padding: 18px 0;
      font: normal 700 16px/1.2em 'Roboto Condensed', Arial;

      abbr[title]{
        text-decoration: none;
      }

      @media only screen and (max-width: 768px){
        font-size: 24px;
        max-height: 40px;
        padding: 9px 0;
        line-height: 1em;
      }

      @media only screen and (max-width: 517px){
        font-size: 13px;
        padding: 9px 0;
      }
    }
  }

  .activeCalendarTileOne {
    background-color: var(--primary200);
    cursor: pointer;
    &:focus-visible {
      z-index: 2;
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 8px;
    }
  }

  .activeCalendarTileStartEnd {
    background-color: var(--secondary200);
    cursor: pointer;
    &:focus-visible {
      z-index: 2;
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 8px;
    }
  }

  .activeCalendarTile {
    background-color: var(--secondary50);
    &:focus-visible {
      z-index: 2;
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 8px;
    }
  }
`;

export const StyledExhibitionTitle = styled.div`
  display: ${({ isopen }) => isopen ? "flex" : "none"};
  position: absolute;
  z-index: 3;
  left: ${({ issunday }) => issunday ? "auto" : "0"};
  right: ${({ issunday }) => issunday ? "0" : "auto"};
  top: 100%;
  width: 250px; 
  background-color: #23423D;
  color: #FAF6EE;
  padding: 14px;
  cursor: default;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px; 

    @media only screen and (max-width: 516px){
      > p {
        font-size: 15px;
      }
      > div {
        > p {
          font-size: 14px;
        }
      }
    }
  }

  a {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    align-self: flex-end;
    transition: color 250ms linear;
    color: #FAF6EE;
    
    &:hover {
      color: var(--secondary300);
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
      outline-offset: 4px;
    }

    @media only screen and (max-width: 516px){
      font-size: 14px;
    }
  }
`;

export const StyledPaginationElement = styled(motion.div)`
  &:focus-visible {
    outline-width: 1px;
    outline-style: solid;
    outline-color: #da9610;
    outline-offset: 4px;
  }
`;

export const StyledOpenWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 31px;
  background-color: ${({ hasdeclaredbgcolor }) => hasdeclaredbgcolor ? hasdeclaredbgcolor : "transparent"};
  display: flex;
  align-items: center;
  padding-left: 8px;
  justify-content: space-between;
  overflow: hidden;
  
  @media only screen and (max-width: 740px){
    height: 24px;
    justify-content: flex-end;

    p {
      display: none;
    }
  }

  @media only screen and (max-width: 516px){
    height: 16px;
  }
`

export const StyledArrowWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 25px;
  background-color: ${({ hasdeclaredbgcolor }) => hasdeclaredbgcolor ? hasdeclaredbgcolor : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;

  > svg {
    transition: transform 250ms linear;
    transform: ${({ isopen }) => isopen ? "rotate(-180deg)" : "none"};
    color: ${({ svgwhitebg }) => svgwhitebg ? '#fff' : '#23423D'};
  }

  @media only screen and (max-width: 740px){
    height: 24px;
    width: 24px;
  }

  @media only screen and (max-width: 516px){
    height: 16px;
    width: 16px;
  }
`