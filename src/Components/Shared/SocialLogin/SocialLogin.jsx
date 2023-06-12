import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SocialLogin = ({ targetRoute }) => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const presentUser = result.user;
        const newUser = {
          name: presentUser.displayName,
          email: presentUser.email,
          photo_url: presentUser.photoURL,
          address: "N/A",
          Gender: "N/A",
          role: "student",
        };
        axios
          .post(
            "https://dance-xtreme-school-server-site.vercel.app/users",
            newUser
          )
          .then((data) => {
            if (data.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Account Created Successfully",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .catch((error) => {
            if (error) {
              console.log(error.message);
            }
          });

        navigate(targetRoute || "/");
      })
      .then((error) => {
        if (error) {
          console.log(error.message);
        }
      });
  };
  return (
    <div>
      <div className="divider ">
        OR{" "}
        {(path === "/login" && "Login With") ||
          (location.pathname === "/registration" && "Create Account With")}{" "}
      </div>
      <div className="flex justify-center items-center">
        <img
          onClick={handleGoogleLogin}
          className="w-12 h-12 cursor-pointer"
          src="https://i.ibb.co/pxC49zN/google.png"
          alt="google"
        />
      </div>
    </div>
  );
};

export default SocialLogin;
