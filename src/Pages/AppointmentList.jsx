// AppointmentList.jsx
import React, { useContext , useState } from "react";
import Navbar from "../Components/Navbar";

import { EventDataContext } from "../Context/EventContext.jsx";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import MeetingForm from "../Components/MeetingForm.jsx";

const AppointmentList = () => {
  const {
    events,
    setEvents,
    newEvent,
    setNewEvent,
    handleCreate,
    createactive,
    setActive,
  } = useContext(EventDataContext);
  

  

  const handleDelete = (index) => {
    const updated = [...events];
    updated.splice(index, 1);
    setEvents(updated);
  };

  return (
    <div className="flex min-h-screen bg-purple-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <Navbar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-6">
        <h1 className="text-3xl font-bold mb-4">All Appointments</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 border-l-4"
              style={{ borderColor: event.color || "gray" }}
            >
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-sm text-gray-600">
                {event.start.toLocaleString()} - {event.end.toLocaleString()}
              </p>
              <p className="text-sm mt-1">Type: {event.type || "offline"}</p>
              {event.type === "online" && (
                <p className="text-sm mt-1 text-blue-600">🔗 {event.link}</p>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex gap-2 items-center"
                  onClick={() => {
                    alert("Edit functionality to be implemented");
                  }}
                >
                  <span>
                    <FaEdit />
                  </span>{" "}
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex gap-2 items-center"
                  onClick={() => handleDelete(index)}
                >
                  <span>
                    <MdOutlineDeleteOutline />
                  </span>{" "}
                  Delete
                </button>
              </div>
            </div>
          ))}
          {createactive && <MeetingForm />}
        </div>
      </main>
    </div>
  );
};

export default AppointmentList;
