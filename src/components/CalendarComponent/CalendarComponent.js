import React, { useState } from "react";
import { startOfAdjacentMonth, endOfAdjacentMonth } from "../../utils/date";

import {
  StyledCalendarComponent,
  StyledCalendar,
} from "./StyledCalendarComponent";

const CalendarComponent = () => {
  const now = new Date(),
    futureMonths = 3,
    minDate = startOfAdjacentMonth({ date: now, month: -1 }),
    maxDate = endOfAdjacentMonth({ date: now, month: futureMonths }),
    [currentDate, setCurrentDate] = useState(now),
    [pagination, setPagination] = useState(1);

  return (
    <StyledCalendarComponent>
      <p>{currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}</p>
      <div
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          style={{ backgroundColor: "red", minWidth: "50px" }}
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
          {'<'}
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
          tileContent={({ activeStartDate, date, view }) =>
            view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null
          }
          showNavigation={false}
          formatDay={(locale, date) =>
            date.getMonth() === currentDate.getMonth() ? date.getDate() : ""
          }
        />
        <div
          style={{ backgroundColor: "red", minWidth: "50px" }}
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
          {'>'}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        {[...Array(2+futureMonths).keys()].map(
          key => (
            <div
              key={key}
              style={{
                minWidth: "20px",
                minHeight: "2s0px",
                backgroundColor: (key === pagination) ? "blue" : "red"
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
