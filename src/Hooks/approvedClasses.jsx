import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const approvedClasses = () => {
  const { data: allApprovedClasses = [], refetch } = useQuery({
    queryKey: ["allApprovedClasses"],
    queryFn: async () => {
      const res = await axios.get(
        "https://dance-xtreme-school-server-site.vercel.app/all-classes"
      );
      return res.data;
    },
  });
  return [allApprovedClasses, refetch];
};

export default approvedClasses;
