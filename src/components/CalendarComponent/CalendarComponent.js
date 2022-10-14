import React, { useState } from "react";

import {
  StyledCalendarComponent,
  StyledCalendar,
} from "./StyledCalendarComponent";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  return (
    <StyledCalendarComponent>
      <StyledCalendar
        onChange={onChange}
        value={value}
        defaultValue={[
          new Date(2022, 10, 1),
          new Date(2022, 10, 2),
          new Date(2022, 10, 3),
        ]}
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
