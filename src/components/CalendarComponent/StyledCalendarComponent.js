import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendarComponent = styled.div`
    width: 100%;
    .calendarTitle{
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 1.2em;
        color: #23423D;
        text-transform: uppercase;
        padding-bottom: 18px;
    }
    .calendarWrapper{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .prevArrow{
        width: 26px;
        height: 56px;
        > svg {
            width: 100%;
            height: 100%;
        }
    }
    .nextArrow{
        width: 26px;
        height: 56px;
        > svg {
            width: 100%;
            height: 100%;
        }
    }
`;
export const StyledCalendar = styled(({ markLastSunday, ...props }) => <Calendar {...props} />)`
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
        &:disabled{
            border-color: none;
        }
        > abbr {
            position: absolute;
            top: 9px;
            right: 13px;
            font-family: 'Nocturne Serif';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            color: #23423D;
        }
    }
    .react-calendar__month-view__weekdays{
        > div {
            border-right: 2px solid #23423D;
            border-bottom: 1px solid #23423D;
            text-align: center;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 1.2em;
            color: #23423D;
            padding: 18px 0;
            abbr[title]{
                text-decoration: none;
            }
        }
    }
    .react-calendar__month-view__days__day--weekend:nth-child(7n) {
        background-color: #F6E2BA;
    }
    .react-calendar__month-view__days__day--weekend:last-child {
        background-color: ${({ markLastSunday }) => (markLastSunday ? "#F6E2BA" : "var(--background500)")};
    }
    .activeDay{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: visible;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #23423D;
        text-align: center;
        display: flex;
        align-items: center;
        justify-center;
        padding: 30px 30px 0 5px;
        display: flex;
        flex-direction: column;
        svg {
            position: absolute;
            top: -10px;
            left: -30px;
            z-index: 1;
        }
    }
`;
export const StyledExhibitionTitle = styled.p`
    @media only screen and (max-width: 986px){
        background-color: #23423D;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1.2em;
        color: #FEFDFB;
        width: 193px;
        height: 70px;
        display: ${({ isopen }) => isopen ? "flex" : "none"};
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 20px;
        bottom: -40px;
        z-index: 2;
        &:hover{
            display: flex;
        }
        &:after{
            content: '';
            width: 0; 
            height: 0; 
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 15px solid #23423D;
            position: absolute;
            top: -15px;
            left: 20px;
        }
    }
`