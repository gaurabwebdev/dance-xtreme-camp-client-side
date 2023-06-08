import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaHeartbeat } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Registration = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const { createUser, setUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      const {
        Gender,
        address,
        confirmPassword,
        contact_number,
        email,
        first_name,
        last_name,
        password,
        photo_url,
      } = data;

      const newUser = {
        first_name,
        last_name,
        email,
        photo_url,
        address,
        Gender,
        role: "student",
      };

      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          if (createdUser) {
            setUserProfile(first_name, last_name, photo_url)
              .then(() => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Account Created Successfully",
                  showConfirmButton: false,
                  timer: 2000,
                });

                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(newUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                  });
              })
              .then((error) => {
                if (error) {
                  console.log(error);
                }
              });
          }
        })
        .then((error) => {
          if (error) {
            console.log(error);
          }
        });
    }
  };
  return (
    <div>
      <div className="hero-content flex-col  m-5 lg:m-20">
        <div className="flex flex-col items-center lg:text-left w-full h-full md:w-1/2">
          <h1 className="text-5xl font-medium uppercase">Join Us Now!!!</h1>
          <p className="text-xl font-semibold flex items-center gap-1 mt-5">
            <span>& Make Your Heart Dance With Beat</span>
            <FaHeartbeat className="text-5xl text-secondary ml-3" />
          </p>
        </div>
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input
                    {...register("first_name", { required: true })}
                    type="text"
                    placeholder="First Name"
                    className="input input-bordered"
                  />
                  {errors.first_name?.type === "required" && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    {...register("last_name", { required: true })}
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                  />
                  {errors.last_name?.type === "required" && (
                    <span className="text-red-500">Last name is required</span>
                  )}
                </div>
              </div>
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
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                <div className="form-control relative w-full lg:w-1/2">
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
                      Password should contain at least one number and one
                      special character
                    </span>
                  )}
                </div>
                <div className="form-control relative w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: true,
                      pattern: /^[a-zA-Z0-9!@#$%^&*]{6,12}$/,
                    })}
                    type={showPass2 ? "text" : "password"}
                    placeholder="confirm password"
                    className="input input-bordered"
                  />
                  <div className="absolute right-2 bottom-3 cursor-pointer">
                    {showPass2 ? (
                      <FaEye
                        onClick={() => setShowPass2(!showPass2)}
                        className="text-xl"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => setShowPass2(!showPass2)}
                        className="text-xl"
                      />
                    )}
                  </div>
                  {errors.confirmPassword?.type === "required" && (
                    <span className="text-red-500">
                      Password Confirmation required
                    </span>
                  )}
                  {errors.confirmPassword?.type === "pattern" && (
                    <span className="text-red-500">
                      Password should contain at least one number and one
                      special character
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text">Contact Number</span>
                  </label>
                  <input
                    {...register("contact_number", { required: true })}
                    type="text"
                    placeholder="Contact Number"
                    className="input input-bordered"
                  />
                  {errors.contact_number?.type === "required" && (
                    <span className="text-red-500">
                      Contact number is required
                    </span>
                  )}
                </div>
                <div className="form-control w-full lg:w-1/2">
                  <label className="label">
                    <span className="label-text ">Gender</span>
                  </label>
                  <div className="flex items-center ">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2">Male</span>
                      <input
                        type="radio"
                        name="Male"
                        className="radio radio-secondary"
                        {...register("Gender", { required: true })}
                        value="Male"
                      />
                    </label>
                    <label className="label cursor-pointer">
                      <span className="label-text mr-2">Female</span>
                      <input
                        type="radio"
                        name="radio-3"
                        className="radio radio-secondary"
                        {...register("Gender", { required: true })}
                        value="Female"
                      />
                    </label>
                  </div>
                  {errors.Gender?.type === "required" && (
                    <span className="text-red-500">Gender is required</span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("photo_url", { required: true })}
                  type="URL"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photo_url?.type === "required" && (
                  <span className="text-red-500">Photo Url is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  {...register("address", {
                    required: true,
                  })}
                  className="textarea textarea-bordered"
                  placeholder="Address"
                ></textarea>
                {errors.address?.type === "required" && (
                  <span className="text-red-500">Address is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Create Account</button>
              </div>
            </form>
            <label className="label">
              <span className="">Already Have Account?</span>
              <Link
                to={"/login"}
                className=" link link-hover hover:text-secondary hover:no-underline"
              >
                Log into Your Account
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
