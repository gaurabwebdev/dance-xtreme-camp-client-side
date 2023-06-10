import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const getInstructor = () => {
  const [axiosSecure] = useAxios();
  const { data: allInstructors = [], refetch } = useQuery({
    queryKey: ["allInstructors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-instructors");
      console.log(res.data);
      return res.data;
    },
  });
  return [allInstructors, refetch];
};

export default getInstructor;
