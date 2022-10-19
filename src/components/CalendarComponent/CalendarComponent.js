import React, { useState } from "react";
import { startOfAdjacentMonth, endOfAdjacentMonth, areDatesEqual } from "../../utils/date";
import { motion } from "framer-motion";
import {
  StyledCalendarComponent,
  StyledCalendar,
  StyledExhibitionTitle
} from "./StyledCalendarComponent";

import PrevCalendar from "../../images/prevCalendar.svg";
import NextCalendar from "../../images/nextCalendar.svg";
import ActiveCalendar from "../../images/activeCalendar.svg";
import useWindowSize from "../../utils/getWindowSize";

const CalendarComponent = ({ exhibitions = [] }) => {
  const now = new Date(),
    futureMonths = 3,
    minDate = startOfAdjacentMonth({ date: now, month: -1 }),
    maxDate = endOfAdjacentMonth({ date: now, month: futureMonths }),
    [currentDate, setCurrentDate] = useState(now),
    [pagination, setPagination] = useState(1),
    width = useWindowSize(),
    [activeDate, setActiveDate] = useState(undefined),
    toggleActiveDate = (
      (new_date) => (
        setActiveDate(
          (new_date instanceof Date) ? (
            (date) => (
              (date instanceof Date) ? (
                areDatesEqual(new_date, date) ? (undefined) : (new_date)
              ) : (new_date)
            )
          ) : (
            undefined
          )
        )
      )
    );

  return (
    <StyledCalendarComponent>
      <p className="calendarTitle">
        {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
      </p>
      <div
        style={{ display: "flex" }}
        className="calendarWrapper"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
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
        </motion.div>
        <StyledCalendar
          minDate={minDate}
          maxDate={maxDate}
          onChange={setCurrentDate}
          value={currentDate}
          defaultValue={now}
          defaultView="month"
          formatShortWeekday={(locale, date) => ( 
            width > 986 ?
            [
              "NIEDZIELA",
              "PONIEDZIAŁEK",
              "WTOREK",
              "ŚRODA",
              "CZWARTEK",
              "PIĄTEK",
              "SOBOTA"
            ][date.getDay()] :
            [
              "ND",
              "PON",
              "WT",
              "ŚR",
              "CZW",
              "PT",
              "SO"
            ][date.getDay()]
          )}
          tileDisabled={
            width > 986 ? (() => true) : (
              ({ activeStartDate, date, view }) => (
                !Boolean(
                  exhibitions.find(
                    ({ data: exhibition_date }) => areDatesEqual(exhibition_date, date)
                  )
                )
              )
            )
          }
          tileContent={({ activeStartDate, date, view }) => (
            date.getMonth() === currentDate.getMonth() ? (
              (() => {
                const exhibitions_today = exhibitions.filter(
                  ({ data: exhibition_date }) => areDatesEqual(exhibition_date, date)
                );
                return (
                  (exhibitions_today.length) ? (
                    <p className="activeDay">
                      <ActiveCalendar />
                      <StyledExhibitionTitle
                        isopen={
                          (width > 986) ? (false) :(
                            (activeDate instanceof Date) ? (
                              exhibitions_today.map(
                                exhibition => areDatesEqual(exhibition.data, activeDate)
                              )
                              .find(val => val)
                            ) : (false)
                          )
                        }
                      >
                        {exhibitions_today.map(
                          exhibition => (
                            <>
                              {exhibition.title}
                              <br />
                            </>
                          )
                        )}
                      </StyledExhibitionTitle>
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
          markLastSunday={maxDate.getDay() === 0}
          onClickDay={(value, event) => toggleActiveDate(value)}
        />
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
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
        </motion.div>
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
