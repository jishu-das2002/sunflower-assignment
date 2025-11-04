import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <div className="navbar bg-base-100 shadow-sm w-3xs">
          <div className="dropdown sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Course">Course</NavLink>
              </li>
              <li>
                <NavLink to="/Signin">Signin</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="list-none">
              <li>
                <NavLink to="/">Sunflower</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-[40%] lg:w-[22%] flex justify-between items-center">
          <ul className="hidden sm:flex">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="ml-8">
              <NavLink to="/Course">Course</NavLink>
            </li>
          </ul>

          <ul>
            <li>
              <NavLink to="/Signin">Signin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
