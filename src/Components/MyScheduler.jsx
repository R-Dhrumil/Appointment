import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyScheduler = ({ events }) => {
  return (
    <div className="p-4 rounded-4xl">
      <Calendar
        className="p-4 rounded-4xl"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={["day", "week", "month"]}
        style={{ height: 600 }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
            color: "white",
            borderRadius: "4px",
          },
        })}
      />
    </div>
  );
};

export default MyScheduler;
