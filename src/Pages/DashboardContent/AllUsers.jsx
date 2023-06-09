import React from "react";
import UsersTable from "../../Components/Shared/UsersTable/UsersTable";
import getUser from "../../Hooks/getUsers";

const AllUsers = () => {
  const [users, refetch] = getUser();

  return (
    <div>
      <p>Total Users : {users.length}</p>
      <div>
        <UsersTable />
      </div>
    </div>
  );
};

export default AllUsers;
