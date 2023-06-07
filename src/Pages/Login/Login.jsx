import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row justify-around items-center m-5 lg:m-20">
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-[url('https://i.ibb.co/Kht7YR0/login-banner.jpg')] flex-shrink-0 w-full lg:max-w-md shadow-2xl bg-base-100 bg-cover bg-center bg-no-repeat">
          <div className="backdrop-brightness-50 w-full h-full rounded-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password")}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
