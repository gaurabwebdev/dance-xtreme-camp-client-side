import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import DashboardContent from "../Pages/DashboardContent/DashboardContent";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/DashboardContent/AllUsers";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/DashboardContent/AddClass/AddClass";
import InstructorClasses from "../Pages/DashboardContent/InstructorClasses/InstructorClasses";
import AllClasses from "../Pages/DashboardContent/AllClasses";
import Classes from "../Pages/Classes/Classes";
import Instructors from "../Pages/Instructors/Instructors";
import MyClasses from "../Pages/DashboardContent/MyClasses/MyClasses";
import MakePayment from "../Pages/DashboardContent/MakePayment/MakePayment";
import EnrolledClasses from "../Pages/DashboardContent/EnrolledClasses/EnrolledClasses";

const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardContent />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-selected-classes",
        element: (
          <PrivateRoute>
            <MyClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-enrolled-classes",
        element: (
          <PrivateRoute>
            <EnrolledClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/make-a-payment",
        element: <MakePayment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-classes",
        element: (
          <AdminRoute>
            <AllClasses />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-a-class",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/instructor-classes",
        element: <InstructorClasses />,
      },
    ],
  },
]);

export default AllRoutes;
