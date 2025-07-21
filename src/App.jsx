// App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AppointmentList from "./Pages/AppointmentList";

const App = () => {
  const [events, setEvents] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard events={events} setEvents={setEvents} />}
      />
      <Route
        path="/appointments"
        element={<AppointmentList events={events} setEvents={setEvents} />}
      />
    </Routes>
  );
};

export default App;
