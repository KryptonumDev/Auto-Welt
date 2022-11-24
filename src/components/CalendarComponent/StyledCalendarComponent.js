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

export const StyledCalendar = styled(({ markLastSunday, ...props }) => (
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
      height: 38px;
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

  .react-calendar__month-view__days__day--weekend:nth-child(7n) {
    background-color: #F6E2BA;
  }

  .react-calendar__month-view__days__day--weekend:last-child {
    background-color: ${({ markLastSunday }) =>
    markLastSunday ? "#F6E2BA" : "var(--background500)"};
  }

  .activeDay{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    font: normal 500 14px/1.2em 'Roboto Condensed', Arial;
    color: #23423D;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 30px 30px 0 5px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    transition: background-color 250ms linear;

    svg {
      position: absolute;
      top: -10px;
      left: -30px;
      z-index: 1;
    }

    @media only screen and (max-width: 768px){
      svg{
        width: 120%;
        height: 120%;
        top: 0;
        left: 0;
      }
    }
  }
`;

export const StyledExhibitionTitle = styled.p`
  a {
    position: relative;
    z-index: 2;
    transition: color 250ms linear;
    color: #23423D;
    text-decoration: none;
    
    &:hover {
      color: var(--secondary300);
    }

    &:focus-visible {
      outline-width: 1px;
      outline-style: solid;
      outline-color: #da9610;
    }
  }

  @media only screen and (max-width: 986px) {
    background-color: #23423d;
    font: normal 500 14px/1.2em 'Roboto Condensed', Arial;
    width: 193px;
    min-height: 70px;
    display: ${({ isopen }) => (isopen ? "flex" : "none")};
    align-items: center;
    position: absolute;
    left: 20px;
    bottom: -50%;
    transform: translateY(50%);
    z-index: 2;
    padding: 20px 20px 20px 11px;

    &:hover {
      display: flex;
    }

    &:after {
      content: "";
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid #23423d;
      position: absolute;
      top: -15px;
      left: 20px;
    }

    > a {
      color: #FEFDFB;
    }
  }

  @media only screen and (max-width: 516px) {
    left: 0;
    bottom: -60px;
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
