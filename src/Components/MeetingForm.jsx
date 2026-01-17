import React, { useContext } from "react";
import { X, Calendar, Clock, Video, MapPin } from "lucide-react";
import { EventDataContext } from "../Context/EventContext";

const MeetingForm = () => {

  const {
    newEvent, setNewEvent, handleCreate, setActive
  } = useContext(EventDataContext)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create Meeting
          </h2>
          <button
            onClick={() => setActive(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {/* Meeting Name */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Meeting Name
            </label>
            <input
              type="text"
              placeholder="Team Sync"
              className="mt-1 w-full rounded-xl border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Meeting Date
            </label>
            <div className="relative mt-1">
              <Calendar
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="date"
                className="w-full rounded-xl border pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
              />
            </div>
          </div>

          {/* Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Start Time
              </label>
              <div className="relative mt-1">
                <Clock
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="time"
                  className="w-full rounded-xl border pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={newEvent.start}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, start: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                End Time
              </label>
              <div className="relative mt-1">
                <Clock
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="time"
                  className="w-full rounded-xl border pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={newEvent.end}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, end: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Color */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Choose Color
            </label>
            <input
              type="color"
              className="mt-2 h-12 w-full cursor-pointer rounded-xl border"
              value={newEvent.color}
              onChange={(e) =>
                setNewEvent({ ...newEvent, color: e.target.value })
              }
            />
          </div>

          {/* Type */}
          <div>
            <label className="text-sm font-medium text-gray-600">Type</label>
            <select
              className="mt-1 w-full rounded-xl border px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={newEvent.type}
              onChange={(e) =>
                setNewEvent({ ...newEvent, type: e.target.value })
              }
            >
              <option value="offline">Offline</option>
              <option value="online">Online</option>
            </select>
          </div>

          {/* Online Link */}
          {newEvent.type === "online" && (
            <div>
              <label className="text-sm font-medium text-gray-600">
                Meeting Link
              </label>
              <div className="relative mt-1">
                <Video
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <input
                  type="url"
                  placeholder="https://meeting-link.com"
                  className="w-full rounded-xl border pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={newEvent.link}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, link: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={() => setActive(false)}
              className="rounded-xl px-5 py-2.5 bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              className="rounded-xl px-6 py-2.5 bg-purple-600 text-white font-semibold hover:bg-purple-700 shadow-md"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingForm;
