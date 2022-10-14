import React, { useState } from "react";
import { startOfAdjacentMonth, endOfAdjacentMonth } from "../../utils/date";

import {
  StyledCalendarComponent,
  StyledCalendar,
} from "./StyledCalendarComponent";

const CalendarComponent = () => {
  const now = new Date(),
    minDate = startOfAdjacentMonth({ date: now, month: -1 }),
    maxDate = endOfAdjacentMonth({ date: now, month: 3 }),
    [currentDate, setCurrentDate] = useState(now);

  return (
    <StyledCalendarComponent>
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
        tileContent={({ activeStartDate, date, view }) =>
          view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null
        }
        navigationLabel={({ date, label, locale, view }) =>
          `Current view: ${view}, date: ${date.toLocaleDateString(locale)}`
        }
      />
    </StyledCalendarComponent>
  );
};

export default CalendarComponent;
