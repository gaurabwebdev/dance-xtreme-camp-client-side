import React from "react";
import getUser from "../../../Hooks/getUsers";

const UsersTable = () => {
  const [users, refetch] = getUser();
  console.log(users);
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
                    <button className="btn btn-secondary btn-xs">
                      Make Instructor
                    </button>
                    <button className="btn btn-secondary btn-xs">
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
