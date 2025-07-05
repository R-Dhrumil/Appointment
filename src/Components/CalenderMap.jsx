import React, { useState } from "react"
import { Calendar,dateFnsLocalizer } from "react-big-calendar"
import  format  from "date-fns/format"
import parse from "date-fns/parse"
import  startOfWeek  from "date-fns/startOfWeek"
import  getDay  from "date-fns/getDay"
import  enUS  from "date-fns/locale/en-US"

const locales = {"en-US" : enUS};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalenderMap = () => {

  const [event , setEvent] = useState([
    {
      title: "Fist event",
      start : new Date(2025, 7 , 6 , 12 , 0 ,0 ,0),
      end : new Date(2025, 7 , 6 , 2 , 0 ,0 ,0),
      color: "red"
    }
  ])

  return (
    <div>
      <Calendar 
      localizer={localizer}
      events={event}
      startAccessor="start"
      endAccessor="end"
      defaultView="month"
      views={["day","week","month"]}
      style={{height: 600}}
      eventPropGetter={(event) =>({
        style:{
          backgroundColor: event.color,
          color: "black"
        },
      })}
      
      />
      
    </div>
  )
}

export default CalenderMap
