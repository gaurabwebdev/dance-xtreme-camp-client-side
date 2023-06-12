import React, { useState } from "react";
import getUser from "../../../Hooks/getUsers";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const UsersTable = () => {
  const [users, refetch] = getUser();
  const [axiosSecure] = useAxios();
  // const [instructor, setInstructor] = useState(false);
  //make instructor =====
  const makeAdmin = (user) => {
    axiosSecure.patch(`/users/make-admin/${user._id}`).then((data) => {
      if (data.data.modifiedCount > 0) {
        Swal.fire(
          `You made ${user.name} admin`,
          `You clicked the button!`,
          `success`
        );
        refetch();
      }
    });
  };
  //make instructor =====
  const makeInstructor = (user) => {
    axiosSecure.patch(`/users/make-instructor/${user._id}`).then((data) => {
      if (data.data.modifiedCount > 0) {
        Swal.fire(
          `You made ${user.name} instructor`,
          `You clicked the button!`,
          `success`
        );
        refetch();
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users &&
            users.map((user, index) => (
              <tr key={user._id}>
                <th>
                  <span>{index + 1}</span>
                </th>
                <td>
                  <div className="flex flex-col items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={
                            user?.photo_url ||
                            "https://i.ibb.co/Yhn8Q8H/user.png"
                          }
                          alt="profile_picture"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <th>
                  <div className="flex flex-col justify-center  gap-2">
                    {/* TODO:: Button Disable */}
                    <button
                      disabled={
                        user?.role === "admin" || user?.role === "instructor"
                      }
                      onClick={() => makeInstructor(user)}
                      className="btn btn-secondary btn-xs"
                    >
                      Make Instructor
                    </button>
                    <button
                      disabled={
                        user?.role === "admin" || user?.role === "instructor"
                      }
                      onClick={() => makeAdmin(user)}
                      className="btn btn-secondary btn-xs"
                    >
                      Make Admin
                    </button>
                  </div>
                </th>
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            {/* <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th> */}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UsersTable;
