import React from "react";
import useAxios from "./useAxios";
import useAuth from "./useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxios();
  const {
    refetch,
    data: myCart = [],
    isLoading,
  } = useQuery({
    queryKey: ["myCart"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/selected-classes?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [refetch, myCart, isLoading];
};

export default useCart;
