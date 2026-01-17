import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCalendar, IoListSharp } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <div className="md:w-64 w-full">
      {/* Header (brand + mobile toggle) */}
      <div className="flex items-center justify-between md:justify-start p-4 md:p-0 mb-4">
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
          <span className="font-bold text-lg">Appointment</span>
        </Link>

        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className={`${open ? "block" : "hidden"} md:block transition-all`}>
        <ul className="space-y-2 px-4 md:px-0">
          <li>
            <Link to="/" onClick={handleLinkClick} className="flex gap-2 items-center">
              <div className="hover:bg-purple-100 hover:text-purple-700 rounded-lg px-3 py-2 font-semibold flex items-center gap-2 w-full">
                <span>
                  <IoCalendar />
                </span>
                <span>Calendar</span>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/appointments" onClick={handleLinkClick} className="flex gap-2 items-center">
              <div className="hover:bg-purple-100 hover:text-purple-700 rounded-lg px-3 py-2 flex items-center gap-2 font-semibold w-full">
                <span>
                  <IoListSharp />
                </span>
                <span>Appointment List</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
