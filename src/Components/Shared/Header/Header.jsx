import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
const Header = () => {
  const { user, userLogOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        navigate("/login");
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      });
  };
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
    <header className="">
      <div className="navbar bg-gray-100 p-3 md:px-8 md:py-4">
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
          {user ? (
            <div className="flex justify-center items-center gap-2">
              <div
                className="tooltip tooltip-secondary  tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  className="w-12 h-12 rounded-full cursor-pointer"
                  src={user.photoURL || "https://i.ibb.co/Yhn8Q8H/user.png"}
                  alt=""
                />
              </div>

              <div className="flex flex-col-reverse  justify-center gap-1">
                <Link to={"/dashboard"}>
                  <button className="btn btn-outline btn-xs btn-secondary ml-4">
                    Dashboard
                  </button>
                </Link>
                <button
                  onClick={handleLogOut}
                  className="btn btn-active btn-xs btn-secondary ml-4"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Link to={"/login"}>
                <button className="btn btn-outline btn-secondary">Login</button>
              </Link>
              <Link to={"/registration"}>
                <button className="btn btn-active btn-secondary ml-4">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
