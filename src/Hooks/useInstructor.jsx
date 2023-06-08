import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";
import useAxios from "./useAxios";

const useInstructor = () => {
  const { user } = useAuth();

  const [axiosSecure] = useAxios();
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      console.log("res from use instructor ", res);
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
