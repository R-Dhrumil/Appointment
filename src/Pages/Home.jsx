import { useState } from "react";
import MyScheduler from "../Components/MyScheduler";
import MeetingForm from "../Components/MeetingForm.jsx";
import { useContext } from "react";
import { EventDataContext } from "../Context/EventContext.jsx";

import Navbar from "../Components/Navbar";

const Home = () => {
  const {
    events,
    setEvents,
    newEvent,
    setNewEvent,
    handleCreate,
    createactive,
    setActive,
  } = useContext(EventDataContext);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-row">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between p-6 ">
        <Navbar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8 bg-purple-100">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Calendar</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActive(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700"
            >
              + Create
            </button>
          </div>
        </header>

        <section className="bg-white rounded-2xl shadow p-4 flex-1 overflow-auto">
          <MyScheduler events={events} />
        </section>
      </main>

      {/* Create Meeting Form */}
      {createactive && <MeetingForm />}
    </div>
  );
};

export default Home;
