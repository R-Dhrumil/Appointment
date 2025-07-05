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

const Model = ({ event }) => {
  
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] fixed bg-sky-100/50 top-0 left-0">
      <div
        style={{ backgroundColor: event.color }}
        className="p-3 font-medium text-gray-100 rounded-2xl flex gap-3 z-20 flex-col"
      >
        <div className="flex flex-col justify-center">
          <p className="my-1">Update Appointment</p>
          <input
            type="text"
            className="bg-white text-sm rounded-2xl p-2 text-black"
            placeholder={event.title}
          />
        </div>
        <div className="flex justify-center  gap-2">
          <div>
            Start time
            <input
              type="time"
              name=""
              id=""
              className="bg-white text-black rounded-2xl px-1 ml-1.5"
            />
          </div>
          <div>
            End time
            <input
              type="time"
              name=""
              id=""
              className="bg-white text-black rounded-2xl px-1 ml-1.5"
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="p-1 px-2 bg-teal-900 rounded-lg">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

const MyScheduler = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [event, setEvent] = useState([
    {
      title: "Project Kickoff",
      start: new Date(2023, 6, 10, 8, 0),
      end: new Date(2023, 6, 10, 9, 0),
      color: "gray",
    },
    {
      title: "Creative Workshop",
      start: new Date(2025, 6, 10, 9, 0),
      end: new Date(2025, 6, 10, 11, 0),
      color: "teal",
    },
    {
      title: "Happy Hour",
      start: new Date(2025, 6, 10, 13, 0),
      end: new Date(2025, 6, 10, 14, 0),
      color: "orange",
    },
    {
      title: "One-on-one",
      start: new Date(2025, 6, 10, 15, 0),
      end: new Date(2025, 6, 10, 16, 0),
      color: "lightblue",
    },
  ]);

  return (
    <div className="p-4 rounded-4xl ">
      <Calendar
        className={`p-4 rounded-4xl
        ${selectedEvent && "opacity-50"}`}
        localizer={localizer}
        events={event}
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
        onSelectEvent={(event) => {
          setSelectedEvent(event);
        }}
      />
      {selectedEvent ? <Model event={selectedEvent} /> : null}
    </div>
  );
};

export default MyScheduler;
