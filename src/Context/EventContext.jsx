import React from "react";

export const EventDataContext = React.createContext();

const EventContext = (props) => {
  const [events, setEvents] = React.useState([]);
  const [createactive, setActive] = React.useState(false);
  const [newEvent, setNewEvent] = React.useState({
    title: "",
    date: "",
    start: "",
    end: "",
    type: "offline",
    link: "",
    color: "#6b46c1",
  });

  const handleCreate = () => {
    console.log(events);

    const startDate = new Date(`${newEvent.date}T${newEvent.start}`);
    const endDate = new Date(`${newEvent.date}T${newEvent.end}`);
    const eventToAdd = {
      title: newEvent.title || "Untitled Event",
      start: startDate,
      end: endDate,
      color: newEvent.color,
      type: newEvent.type,
      link: newEvent.link,
    };
    setEvents([...events, eventToAdd]);
    setNewEvent({
      title: "",
      date: "",
      start: "",
      end: "",
      type: "offline",
      link: "",
      color: "#6b46c1",
    });
    setActive(false);
  };

  return (
    <EventDataContext.Provider
      value={{
        events,
        setEvents,
        newEvent,
        setNewEvent,
        handleCreate,
        createactive,
        setActive
      }}
    >
      {props.children}
    </EventDataContext.Provider>
  );
};

export default EventContext;
