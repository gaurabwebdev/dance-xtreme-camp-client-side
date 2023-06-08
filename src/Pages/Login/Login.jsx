import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { userLogin } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    userLogin(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        if (error) {
          console.log(error);
        }
      });
  };
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  console.log("admin ", isAdmin);
  console.log("instructor", isInstructor);
  return (
    <div>
      <div className="hero-content flex-col  justify-around items-center m-5 lg:m-20">
        <div className="text-center lg:text-left w-full lg:w-1/2 flex flex-col justify-center items-center">
          <img
            className="w-24 h-24 my-3"
            src="https://i.ibb.co/Yhn8Q8H/user.png"
            alt="user-profile"
          />
          <h1 className="text-5xl font-bold">Login Now!</h1>
        </div>
        <div className="card w-full md:max-w-lg shadow-2xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control relative ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    pattern: /^[a-zA-Z0-9!@#$%^&*]{6,12}$/,
                  })}
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                />
                <div className="absolute right-2 bottom-3 cursor-pointer">
                  {showPass ? (
                    <FaEye
                      onClick={() => setShowPass(!showPass)}
                      className="text-xl"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPass(!showPass)}
                      className="text-xl"
                    />
                  )}
                </div>
                {errors.password?.type === "required" && (
                  <span className="text-red-500">Password Must required</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500">
                    Password should contain at least one number and one special
                    character
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary">Login</button>
              </div>
            </form>
            <label className="label">
              <span className="">Don't Have An Account?</span>
              <Link
                to={"/registration"}
                className=" link link-hover hover:text-secondary hover:no-underline"
              >
                Create An Account
              </Link>
            </label>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
