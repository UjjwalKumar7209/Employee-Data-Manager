import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4 justify-around items-center bg-gray-500 text-black p-2">
        <li>
          <Link className="font-bold text-2xl" to="/">
            DATA
          </Link>
        </li>
        <li>
          <ul className="flex justify-center items-center gap-3">
            <li>
              <NavLink
                className={`hover:bg-gray-300 px-2 py-1 rounded-md ${(e) => {return e.active? "active": ""}}`}
                to="/"
              >
                All Data
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`hover:bg-gray-300 px-2 py-1 rounded-md ${(e) => {return e.active? "active": ""}}`}
                to="/input"
              >
                Input Data
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
