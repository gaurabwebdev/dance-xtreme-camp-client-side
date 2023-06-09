import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const getClasses = () => {
  const [axiosSecure] = useAxios();
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  });
  return [allClasses, refetch];
};

export default getClasses;
