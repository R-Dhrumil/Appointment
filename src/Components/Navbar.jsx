import React from "react";
import { Link } from "react-router-dom";
import { IoCalendar, IoListSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex items-center mb-8">
          <Link to="/">
            <span className="font-bold text-lg">Appointment</span>
          </Link>
        </div>
        <nav>
          <ul className="space-y-2">
            <Link to="/" className="flex gap-2 items-center">
              <li className="hover:bg-purple-100 hover:text-purple-700 rounded-lg px-3 py-2 font-semibold flex items-center gap-2">
                <span>
                  <IoCalendar />
                </span>{" "}
                Calendar
              </li>
            </Link>
            <Link to="/appointments" className="flex gap-2 items-center">
              <li className="hover:bg-purple-100 hover:text-purple-700 rounded-lg px-3 py-2 flex items-center gap-2 font-semibold">
                <span>
                  <IoListSharp />
                </span>{" "}
                Appointment List
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
