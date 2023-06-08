import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/${user?.email}`);
      console.log("res from use admin ", res);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
