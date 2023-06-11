import React from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const getEnrolledClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: enrolledClasses = [], isLoading: enrolledClassesLoading } =
    useQuery({
      queryKey: ["enrolledClasses", user?.email],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/enrolled-classes?email=${user.email}`
        );
        return res.data;
      },
    });
  return [enrolledClasses, enrolledClassesLoading];
};

export default getEnrolledClasses;
