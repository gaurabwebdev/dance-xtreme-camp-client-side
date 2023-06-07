import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Instructors</Link>
      </li>
      <li>
        <Link>Classes</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <header className="px-8 py-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={"/"} className=" normal-case text-xl">
            danceXtreme
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <Link>
              <button className="btn btn-outline btn-secondary">Login</button>
            </Link>
            <Link to={"/registration"}>
              <button className="btn btn-active btn-secondary ml-4">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
