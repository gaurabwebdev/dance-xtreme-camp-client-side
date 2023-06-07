import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse justify-around items-center m-5 lg:m-20">
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
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Login</button>
                </div>
              </form>
              <label className="label">
                <span className="">Don't Have An Account?</span>
                <Link href="#" className=" link link-hover">
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

export default Registration;
