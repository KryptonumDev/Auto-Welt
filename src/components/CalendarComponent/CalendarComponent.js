import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "gatsby";

import {
  startOfAdjacentMonth,
  endOfAdjacentMonth,
  areDatesEqual,
} from "../../utils/date";
import { motion } from "framer-motion";

import {
  StyledCalendarComponent,
  StyledCalendar,
  StyledExhibitionTitle,
  StyledPaginationElement,
} from "./StyledCalendarComponent";

import PrevCalendar from "../../images/prevCalendar.svg";
import NextCalendar from "../../images/nextCalendar.svg";
import ActiveCalendar from "../../images/activeCalendar.svg";

const CalendarComponent = ({ exhibitions = [] }) => {
  const [now] = useState(new Date())
  const futureMonths = 3,
    minDate = startOfAdjacentMonth({ date: now, month: -1 }),
    maxDate = endOfAdjacentMonth({ date: now, month: futureMonths }),
    [currentDate, setCurrentDate] = useState(now),
    [pagination, setPagination] = useState(1),
    [activeDate, setActiveDate] = useState(undefined),
    toggleActiveDate = (new_date) =>
      setActiveDate(
        new_date instanceof Date
          ? (date) =>
            date instanceof Date
              ? areDatesEqual(new_date, date)
                ? undefined
                : new_date
              : new_date
          : undefined
      );

  const calendar = useRef();

  const handlePrev = useCallback(() => {
    setCurrentDate((date) => {
      const newDate = new Date(date.getTime());

      newDate.setMonth(newDate.getMonth() - 1);

      if (newDate.getTime() < minDate.getTime()) {
        return date;
      }

      setPagination((val) => val - 1);
      return newDate;
    });
  }, [minDate])

  const handlePrevOnKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handlePrev();
    }
  }

  const handleNext = useCallback(() => {
    setCurrentDate((date) => {
      const newDate = new Date(date.getTime());

      newDate.setMonth(newDate.getMonth() + 1);

      if (newDate.getTime() > maxDate.getTime()) {
        return date;
      }

      setPagination((val) => val + 1);
      return newDate;
    });
  }, [maxDate])

  const handleNextOnKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleNext();
    }
  }

  const handlePagination = useCallback((key) => {
    setCurrentDate((date) => {
      const newDate = new Date(now.getTime());

      newDate.setMonth(newDate.getMonth() + (key - 1));

      if (newDate.getTime() > maxDate.getTime()) {
        return date;
      }

      setPagination(key);
      return newDate;
    });
  }, [maxDate, now])

  const handlePaginationOnKeyUp = (e, key) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handlePagination(key);
    }
  }

  useEffect(
    () => {
      const { current } = calendar;
      if (current) {
        [...current.getElementsByClassName("react-calendar__month-view__days__day")]
          .forEach(
            (node) => {
              node.setAttribute("aria-label", "data");
              node.querySelector("abbr")
                .removeAttribute("aria-label");
            }
          )
      }
    },
    [calendar]
  );

  return (
    <StyledCalendarComponent>
      <p className="calendarTitle">
        {currentDate.toLocaleString("pl-PL", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </p>
      <div style={{ display: "flex" }} className="calendarWrapper">
        <motion.div
          className="prevArrow"
          onClick={handlePrev}
          onKeyUp={handlePrevOnKeyUp}
          tabIndex="0"
        >
          <PrevCalendar />
        </motion.div>
        <StyledCalendar
          minDate={minDate}
          maxDate={maxDate}
          activeStartDate={currentDate}
          value={currentDate}
          defaultView="month"
          formatShortWeekday={(locale, date) =>
            ["ND", "PON", "WT", "ŚR", "CZW", "PT", "SO"][date.getDay()]
          }
          tileDisabled={
            ({ activeStartDate, date, view }) =>
              !Boolean(
                exhibitions.find(({ data: exhibition_date }) =>
                  areDatesEqual(exhibition_date, date)
                )
              )
          }
          tileContent={({ activeStartDate, date, view }) =>
            date.getMonth() === currentDate.getMonth()
              ? (() => {
                const exhibitions_today = exhibitions.filter(
                  ({ data: exhibition_date }) =>
                    areDatesEqual(exhibition_date, date)
                );
                return exhibitions_today.length ? (
                  <span className="activeDay">
                    <ActiveCalendar />
                    <StyledExhibitionTitle
                      isopen={
                        activeDate instanceof Date
                          ? exhibitions_today
                            .filter((exhibition) =>
                              areDatesEqual(exhibition.data, activeDate)
                            )
                            .length
                          : false
                      }
                    >
                      {exhibitions_today.map((exhibition) => (
                        <Link to={`/wystawy/${exhibition.slug}`} aria-label="przejdź do wydarzenia" key={exhibition.slug}>
                          {exhibition.title}
                          <br />
                        </Link>
                      ))}
                    </StyledExhibitionTitle>
                  </span>
                ) : undefined;
              })()
              : undefined
          }
          showNavigation={false}
          formatDay={(locale, date) =>
            (date.getMonth() === currentDate.getMonth() ? date.getDate() : "") +
            "\n"
          }
          markLastSunday={maxDate.getDay() === 0}
          onClickDay={(value, event) => toggleActiveDate(value)}
          inputRef={calendar}
        />
        <motion.div
          className="nextArrow"
          onClick={handleNext}
          onKeyUp={handleNextOnKeyUp}
          tabIndex="0"
        >
          <NextCalendar />
        </motion.div>
      </div>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          marginTop: "25px",
          gap: "6px",
        }}
      >
        {[...Array(2 + futureMonths).keys()].map((key) => (
          <StyledPaginationElement
            key={key}
            tabIndex="0"
            onClick={() => handlePagination(key)}
            onKeyUp={(e) => handlePaginationOnKeyUp(e, key)}
            style={{
              width: key === pagination ? "12px" : "10px",
              height: key === pagination ? "12px" : "10px",
              backgroundColor: key === pagination ? "#DA9610" : "#EDC169",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            &nbsp;
          </StyledPaginationElement>
        ))}
      </div>
    </StyledCalendarComponent>
  );
};

export default CalendarComponent;
