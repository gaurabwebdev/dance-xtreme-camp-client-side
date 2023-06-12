import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useAxios = () => {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: "https://dance-xtreme-school-server-site.vercel.app",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const jToken = localStorage.getItem("accessJwt");
      if (jToken) {
        config.headers.Authorization = `Bearer ${jToken}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response === 401 || error.response === 403)
        ) {
          await userLogOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [userLogOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxios;
