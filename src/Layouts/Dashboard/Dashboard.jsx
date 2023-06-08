import React from "react";
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import useInstructor from "../../Hooks/useInstructor";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const { user } = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const sideBarItems = (
    <>
      {user && !isInstructor && !isAdmin && (
        <>
          <li>
            <Link>My Selected Classes</Link>
          </li>
          <li>
            <Link>My Enrolled Classes</Link>
          </li>
        </>
      )}
      {isInstructor && (
        <>
          <li>
            <Link>My Classes</Link>
          </li>
          <li>
            <Link>Add A Class</Link>
          </li>
        </>
      )}
      {isAdmin && (
        <>
          <li>
            <Link>Manage Classes</Link>
          </li>
          <li>
            <Link>Manage Users</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <Header />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          {/* Page content here */}
          <div>
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {sideBarItems}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
