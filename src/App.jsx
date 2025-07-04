import React from "react";
import { Route, Routes } from "react-router";
// import Hero from "./Pages/Hero";
// import Login from "./Pages/Login";
// import Calendar from "./Pages/CalenderComponent";
import MyScheduler from "./Pages/MyScheduler ";
import CalenderMap from "./Components/CalenderMap";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyScheduler />}></Route>
        <Route path="/calendar" element={<CalenderMap />}></Route>
      </Routes>
    </div>
  );
};

export default App;
