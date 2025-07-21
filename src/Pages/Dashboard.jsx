import { useState } from "react";
import MyScheduler from "../Components/MyScheduler";

import { Link } from "react-router-dom";

const Dashboard = ({ events, setEvents }) => {
  const [createactive, setActive] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    start: "",
    end: "",
    type: "offline",
    link: "",
    color: "#6b46c1",
  });

  const handleCreate = () => {
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
    <div className="min-h-screen bg-gray-50 flex flex-row">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between py-6 px-4">
        <div>
          <div className="flex items-center mb-8">
            <span className="font-bold text-xl text-purple-700 mr-2">🗓️</span>
            <span className="font-bold text-lg">Appointopia</span>
          </div>
          <nav>
            <ul className="space-y-2">
              <li className="bg-purple-100 text-purple-700 rounded-lg px-3 py-2 font-semibold flex items-center gap-2">
                <span>📅</span> Calendar
              </li>
              <li className="hover:bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
                <Link to="/appointments" className="flex gap-2 items-center">
                  <span>📋</span> Appointment List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8">
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

      {/* Create Modal */}
      {createactive && (
        <section className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold mb-4">Create Meeting</h2>

            {[
              {
                label: "Meeting Name",
                type: "text",
                name: "title",
                placeholder: "Team Sync",
              },
              { label: "Meeting Date", type: "date", name: "date" },
              { label: "Start Time", type: "time", name: "start" },
              { label: "End Time", type: "time", name: "end" },
            ].map(({ label, type, name, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className="w-full border rounded-lg px-3 py-2"
                  value={newEvent[name]}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, [name]: e.target.value })
                  }
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">
                Choose Color
              </label>
              <input
                type="color"
                className="w-full h-10 p-1 border rounded-lg"
                value={newEvent.color}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, color: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                className="w-full border rounded-lg px-3 py-2"
                value={newEvent.type}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, type: e.target.value })
                }
              >
                <option value="offline">Offline</option>
                <option value="online">Online</option>
              </select>
            </div>

            {newEvent.type === "online" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Meeting Link
                </label>
                <textarea
                  placeholder="https://meeting-link.com"
                  className="w-full border rounded-lg px-3 py-2"
                  value={newEvent.link}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, link: e.target.value })
                  }
                />
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded-lg"
                onClick={() => setActive(false)}
              >
                Cancel
              </button>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700"
                onClick={handleCreate}
              >
                Create
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
