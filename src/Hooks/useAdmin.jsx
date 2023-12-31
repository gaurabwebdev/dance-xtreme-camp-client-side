import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import useAxios from "./useAxios";

const useAdmin = () => {
  const { user, loading } = useAuth();

  const [axiosSecure] = useAxios();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("accessJwt"),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
