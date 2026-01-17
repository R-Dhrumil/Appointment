// App.jsx
import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AppointmentList from "./Pages/AppointmentList";

const App = () => {
  
  

  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/Appointments"
        element={<AppointmentList />}
      />
    </Routes>
  );
};

export default App;
