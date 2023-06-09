import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const getInstructorClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      return res.data;
    },
  });
  return [classes, isLoading];
};

export default getInstructorClasses;
