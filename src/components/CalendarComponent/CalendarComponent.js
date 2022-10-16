import React, { useState } from "react";
import { startOfAdjacentMonth, endOfAdjacentMonth } from "../../utils/date";

import {
  StyledCalendarComponent,
  StyledCalendar,
} from "./StyledCalendarComponent";

import PrevCalendar from "../../images/prevCalendar.svg";
import NextCalendar from "../../images/nextCalendar.svg";
import ActiveCalendar from "../../images/activeCalendar.svg";

const CalendarComponent = ({ exhibitions = [] }) => {
  const now = new Date(),
    futureMonths = 3,
    minDate = startOfAdjacentMonth({ date: now, month: -1 }),
    maxDate = endOfAdjacentMonth({ date: now, month: futureMonths }),
    [currentDate, setCurrentDate] = useState(now),
    [pagination, setPagination] = useState(1);

  return (
    <StyledCalendarComponent>
      <p className="calendarTitle">
        {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
      </p>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="calendarWrapper"
      >
        <div
          className="prevArrow"
          onClick={() => {
            setCurrentDate((date) => {
              const newDate = new Date(date.getTime());

              newDate.setMonth(newDate.getMonth()-1);

              if (newDate.getTime() < minDate.getTime()) {
                return date;
              }

              setPagination(val => (val - 1));
              return newDate;
            })
          }}
        >
          <PrevCalendar />
        </div>
        <StyledCalendar
          minDate={minDate}
          maxDate={maxDate}
          onChange={setCurrentDate}
          value={currentDate}
          defaultValue={now}
          defaultView="month"
          formatShortWeekday={(locale, date) => (
            [
              "NIEDZIELA",
              "PONIEDZIAŁEK",
              "WTOREK",
              "ŚRODA",
              "CZWARTEK",
              "PIĄTEK",
              "SOBOTA"
            ][date.getDay()]
          )}
          tileDisabled={() => true}
          tileContent={({ activeStartDate, date, view }) => (
            date.getMonth() === currentDate.getMonth() ? (
              (() => {
                const exhibitions_today = exhibitions.filter(
                  ({ data: exhibition_date }) => (
                    exhibition_date.getFullYear() === date.getFullYear() &&
                    exhibition_date.getMonth() === date.getMonth() &&
                    exhibition_date.getDate() === date.getDate()
                  )
                );
                return (
                  (exhibitions_today.length) ? (
                    <p className="activeDay">
                      <ActiveCalendar />
                      {exhibitions_today.map(
                        exhibition => (
                          <>
                            {exhibition.title}
                            <br />
                          </>
                        )
                      )}
                    </p>
                  ) : (undefined)
                );
              })()
            ) : (undefined)
          )}
          showNavigation={false}
          formatDay={(locale, date) =>
            (date.getMonth() === currentDate.getMonth() ? date.getDate() : "") + '\n'
          }
        />
        <div
          className="nextArrow"
          onClick={() => {
            setCurrentDate((date) => {
              const newDate = new Date(date.getTime());

              newDate.setMonth(newDate.getMonth()+1);

              if (newDate.getTime() > maxDate.getTime()) {
                return date;
              }

              setPagination(val => (val + 1));
              return newDate;
            })
          }}
        >
          <NextCalendar />
        </div>
      </div>
      <div style={{ 
        width: "100%", 
        justifyContent: "center", 
        display: "flex", 
        alignItems: "center", 
        marginTop: "25px", 
        gap: "6px" }}
      >
        {[...Array(2+futureMonths).keys()].map(
          key => (
            <div
              className="paginationElement"
              key={key}
              style={{
                width: (key === pagination) ? "12px" : "10px",
                height: (key === pagination) ? "12px" : "10px",
                backgroundColor: (key === pagination) ? "#DA9610" : "#EDC169",
                borderRadius: "50%"
              }}
            >
              &nbsp;
            </div>
          )
        )}
      </div>
    </StyledCalendarComponent>
  );
};

export default CalendarComponent;
