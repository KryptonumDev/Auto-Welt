import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import {
  startOfAdjacentMonth,
  endOfAdjacentMonth,
  areDatesEqual,
} from "../../utils/date";

import {
  StyledCalendarComponent,
  StyledCalendar,
  StyledExhibitionTitle,
  StyledPaginationElement,
  StyledOpenWrapper,
  StyledArrowWrapper,
  StyledCalendarElement
} from "./StyledCalendarComponent";

import { StyledText } from "../Text/StyledText";

import PrevCalendar from "../../images/prevCalendar.svg";
import NextCalendar from "../../images/nextCalendar.svg";
import ArrowDown from "../ArrowDown/ArrowDown";

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

  useEffect(
    () => {
      const elements = [...document.getElementsByClassName("react-calendar__tile")],
        handler = (e) => {
          if (e.key === "Tab" && e.shiftKey)
            setActiveDate(undefined);
        };

      elements.forEach(
        tile => tile.addEventListener("keydown", handler)
      );

      return () => elements.forEach(
        tile => tile.removeEventListener("keydown", handler)
      );
    }
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
                exhibitions.some(({ data, dataZakonczenia }) => {
                  if (
                    currentDate.getFullYear() !== date.getFullYear() ||
                    currentDate.getMonth() !== date.getMonth()
                  )
                    return false;
                  const exhibition_date = new Date(data.getFullYear(), data.getMonth(), data.getDate()),
                    exhibition_end_date = new Date(dataZakonczenia.getFullYear(), dataZakonczenia.getMonth(), dataZakonczenia.getDate());
                  return exhibition_date.getTime() <= date.getTime() && date.getTime() <= exhibition_end_date.getTime();
                })
              )
          }
          tileClassName={({ activeStartDate, date, view }) =>
            date.getMonth() === currentDate.getMonth()
              ? (() => {
                const exhibitions_today = exhibitions.filter(
                  ({ data: exhibition_date, dataZakonczenia: exhibition_end_date }) =>
                    areDatesEqual(exhibition_date, date) || areDatesEqual(date, exhibition_end_date)
                );
                const exhibitions_between = exhibitions.some(
                  ({ data: exhibition_date, dataZakonczenia: exhibition_end_date }) =>
                    exhibition_date.getTime() <= date.getTime() && date.getTime() <= exhibition_end_date.getTime()
                  );
                const has_one_day_exhibition = exhibitions_today.find(
                  ({ data: exhibition_date, dataZakonczenia: exhibition_end_date }) =>
                    areDatesEqual(exhibition_date, exhibition_end_date)
                );
                return (
                  has_one_day_exhibition ? "activeCalendarTileOne"
                  : exhibitions_today.length ? "activeCalendarTileStartEnd"
                  : exhibitions_between ? "activeCalendarTile"
                  : undefined
                );
              })()
              : undefined
          }
          tileContent={({ activeStartDate, date, view }) =>
            date.getMonth() === currentDate.getMonth()
              ? (() => {
                const exhibitions_starting_today = exhibitions.filter(
                  ({ data: exhibition_date }) => areDatesEqual(exhibition_date, date)
                );
                const exhibitions_ending_today = exhibitions.filter(
                  ({ dataZakonczenia: exhibition_end_date }) => areDatesEqual(exhibition_end_date, date)
                );

                const exhibitions_today = exhibitions_starting_today
                  .concat(exhibitions_ending_today)
                  .filter((val, idx, arr) => arr.indexOf(val) === idx);

                const has_one_day_exhibition = exhibitions_today.find(
                  ({ data: exhibition_date, dataZakonczenia: exhibition_end_date }) =>
                    areDatesEqual(exhibition_date, exhibition_end_date)
                );

                const exhibitions_between = exhibitions.filter(
                  ({ data: exhibition_date, dataZakonczenia: exhibition_end_date }) =>
                    exhibition_date.getTime() <= date.getTime() && date.getTime() <= exhibition_end_date.getTime()
                );

                const isOpen = (
                  activeDate instanceof Date
                  ? exhibitions_today
                    .some(
                      (exhibition) => areDatesEqual(date, activeDate)
                    )
                  : false
                );

                return (exhibitions_today.length || exhibitions_between.length) ? (
                  <StyledCalendarElement
                    onKeyDown={
                      (e) => {
                        if (e.key === "Tab" && !e.shiftKey)
                          setActiveDate(undefined);
                      }
                    }
                    className={
                      [
                        "activeDay",
                        ...(has_one_day_exhibition ? ['activeDayOne'] : [])
                      ].join(' ')
                    }
                  >
                    <StyledOpenWrapper
                      hasdeclaredbgcolor={
                        has_one_day_exhibition ? '#3E635D'
                        : exhibitions_today.length ? '#EDC169'
                        : null
                      }
                    >
                      {
                        (has_one_day_exhibition) ? (
                          <StyledText
                            hasdeclaredfontcolor="#FEFDFB"
                            hasdeclaredfontsize="13px"
                          >
                            {has_one_day_exhibition.title}
                          </StyledText>
                        ) : (
                          (exhibitions_starting_today.length) ? (
                            <StyledText
                              hasdeclaredfontcolor="#23423D"
                              hasdeclaredfontsize="13px"
                            >
                              Początek wystawy
                            </StyledText>
                          ) : (
                            (exhibitions_ending_today.length) ? (
                              <StyledText
                                hasdeclaredfontcolor="#23423D"
                                hasdeclaredfontsize="13px"
                              >
                                Koniec wystawy
                              </StyledText>
                            ) : (
                              (exhibitions_between) ? (
                                // for future use
                                undefined
                              ) : (undefined)
                            )
                          )
                        )
                      }
                      <StyledArrowWrapper
                        isopen={isOpen}
                        svgwhitebg={has_one_day_exhibition}
                        hasdeclaredbgcolor={
                          has_one_day_exhibition ? '#7A8D8A'
                          : exhibitions_today.length ? '#EDAC2A'
                          : null
                        }
                      >
                        {exhibitions_today.length ? <ArrowDown /> : null}
                      </StyledArrowWrapper>
                    </StyledOpenWrapper>
                    <StyledExhibitionTitle
                      isbgcolor={has_one_day_exhibition}
                      isopen={isOpen}
                      issunday={date.getDay() === 0}
                    >
                      {exhibitions_today.map((exhibition) => (
                        <div>
                          <StyledText
                            hasdeclaredfontsize="18px"
                            hasdeclaredfontcolor="#FAF6EE"
                            hasdeclaredlineheight="1.2em"
                          >
                            {exhibition.title}
                          </StyledText>
                          <div>
                              {exhibition.elementyListy.slice(0,2).map(element =>
                                <StyledText
                                  hasdeclaredfontsize="16px"
                                  hasdeclaredfontcolor="#FAF6EE"
                                  hasdeclaredlineheight="1.2em"
                                >
                                  {element.elementListy }
                                </StyledText>
                              )}
                          </div>
                          <Link to={`/wystawy/${exhibition.slug}`} aria-label="zobacz więcej" key={exhibition.slug}>
                            czytaj więcej
                          </Link>
                        </div>
                      ))}
                    </StyledExhibitionTitle>
                  </StyledCalendarElement>
                ) : undefined;
              })()
              : undefined
          }
          showNavigation={false}
          formatDay={(locale, date) =>
            (date.getMonth() === currentDate.getMonth() ? date.getDate() : "") +
            "\n"
          }
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
