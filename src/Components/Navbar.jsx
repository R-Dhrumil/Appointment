import React from "react";
import { FaSearch, FaPlus , FaBell  , FaUser} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex flex-row p-5 gap-5">
      <div>
        <div className="px-3 py-2">
          <span className="text-2xl font-semibold">Appointmentia</span>
        </div>
      </div>

      <div className="flex flex-row px-5 justify-between w-full font-semibold items-center bg-gray-500 rounded-3xl">
        <div>
          <span className="font-bold text-lg">Calendar</span>
        </div>
        <div>
          <span className="flex gap-7">
            <button className="flex gap-2 justify-center items-center"><FaPlus className="pluse-icon"/><span>Add</span> </button>
            <button><FaSearch className="search-icon" /> </button>
            <button><FaBell /> </button>
            <button><FaUser /> </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
