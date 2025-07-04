import React, { useState } from "react";
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

const MyScheduler = () => {
  const [events, setEvents] = useState([
    {
      title: "Project Kickoff",
      start: new Date(2023, 6, 10, 8, 0),
      end: new Date(2023, 6, 10, 9, 0),
      resource: "gray",
    },
    {
      title: "Creative Workshop",
      start: new Date(2025, 6, 10, 9, 0),
      end: new Date(2025, 6, 10, 11, 0),
      resource: "teal",
    },
    {
      title: "Happy Hour",
      start: new Date(2025, 6, 10, 13, 0),
      end: new Date(2025, 6, 10, 14, 0),
      resource: "orange",
    },
    {
      title: "One-on-one",
      start: new Date(2025, 6, 10, 15, 0),
      end: new Date(2025, 6, 10, 16, 0),
      resource: "lightblue",
    },
  ]);

  return (
    <div className="p-4 rounded-4xl">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={["day", "week", "month"]}
        style={{ height: 600 }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.resource,
            color: "white",
            borderRadius: "4px",
          },
        })}
      />
    </div>
  );
};

export default MyScheduler;
