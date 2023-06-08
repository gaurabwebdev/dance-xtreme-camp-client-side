import React from "react";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const [axiosSecure] = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(users);
  return (
    <div>
      <p>Total Users : {users.length}</p>
    </div>
  );
};

export default AllUsers;
