import React, { useState } from "react";
import MyScheduler from "./MyScheduler ";
import { FaBell, FaComment } from "react-icons/fa";

const Dashboard = () => {
  const [createactive, setActive] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-row ">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between py-6 px-4">
        <div>
          {/* Logo and App Name */}
          <div className="flex items-center mb-8">
            <span className="font-bold text-xl text-purple-700 mr-2">🗓️</span>
            <span className="font-bold text-lg">Appointopia</span>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="space-y-2">
              <li className="bg-purple-100 text-purple-700 rounded-lg px-3 py-2 font-semibold flex items-center gap-2">
                <span>📅</span> Calendar
              </li>
              <li className="hover:bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
                <span>📋</span> Appointment Schedule
              </li>
              <li className="hover:bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
                <span>🔄</span> Workflows
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Calendar</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setActive(true);
              }}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700"
            >
              + Create
            </button>
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-3 py-1"
            />
            <span className="text-xl">
              <FaBell />
            </span>
            <span className="text-xl">
              <FaComment />
            </span>
            <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold">
              A
            </span>
          </div>
        </header>
        <div className="flex">
          {/* Calendar Section */}
          <section className="bg-white rounded-2xl shadow p-4 flex-1 overflow-auto">
            <MyScheduler />
          </section>
        </div>
      </main>
      {createactive ? (
        <section className="min-h-screen min-w-screen fixed flex justify-center items-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-xl font-bold mb-4">Create Meeting</h2>

            {/* Meeting name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Meeting Name
              </label>
              <input
                type="text"
                placeholder="Team Sync"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Start time */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Start Time
              </label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* End time */}
            <div>
              <label className="block text-sm font-medium mb-1">End Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Online / Offline toggle */}
            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="offline">Offline</option>
                <option value="online">Online</option>
              </select>
            </div>

            {/* Link field (only show if online) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Meeting Link
              </label>
              <textarea
                placeholder="https://meeting-link.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            {/* Action button */}
            <div className="flex justify-end">
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 "
                onClick={() => {
                  setActive(false);
                }}
              >
                Create
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Dashboard;
