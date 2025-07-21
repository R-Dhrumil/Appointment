// AppointmentList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentList = ({ events, setEvents }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updated = [...events];
    updated.splice(index, 1);
    setEvents(updated);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <div className="flex items-center mb-8">
          <span className="font-bold text-xl text-purple-700 mr-2">🗓️</span>
          <span className="font-bold text-lg">Appointopia</span>
        </div>
        <nav className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-100"
          >
            📅 Calendar
          </button>
          <button className="w-full text-left bg-purple-200 px-3 py-2 rounded-lg font-semibold">
            📋 Appointment List
          </button>
        </nav>
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
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => alert("Edit functionality coming soon")}
                >
                  ✏️ Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(index)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AppointmentList;
