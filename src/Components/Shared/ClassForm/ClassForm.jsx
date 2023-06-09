import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const ClassForm = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="card w-full shadow-2xl bg-base-100  mx-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  {...register("class_name", { required: true })}
                  type="text"
                  placeholder="Class Name"
                  className="input input-bordered"
                />
                {errors.class_name?.type === "required" && (
                  <span className="text-red-500">Class name is required</span>
                )}
              </div>
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                <input
                  {...register("class_img_url", { required: true })}
                  type="URL"
                  placeholder="Class Image Url"
                  className="input input-bordered"
                />
                {errors.class_img_url?.type === "required" && (
                  <span className="text-red-500">Image url is required</span>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  readOnly
                  defaultValue={user?.displayName}
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  readOnly
                  defaultValue={user.email}
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control"></div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  {...register("available_seats", {
                    required: true,
                    min: 12,
                    max: 50,
                  })}
                  type="number"
                  placeholder="10"
                  className="input input-bordered"
                />
                {errors.available_seats?.type === "required" && (
                  <span className="text-red-500">Seats required</span>
                )}
              </div>
              <div className="form-control w-full lg:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  {...register("price", {
                    required: true,
                    min: 50,
                    max: 150,
                  })}
                  type="number"
                  placeholder="$50"
                  className="input input-bordered"
                />
                {errors.price?.type === "required" && (
                  <span className="text-red-500">Price is required</span>
                )}
                {errors.price?.type === "min" && (
                  <span className="text-red-500">
                    You can't set price below $50
                  </span>
                )}
                {errors.price?.type === "max" && (
                  <span className="text-red-500">
                    You can't set price over $150
                  </span>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description", {
                  required: true,
                  maxLength: 400,
                })}
                className="textarea textarea-bordered"
                placeholder="Description"
                rows={5}
              ></textarea>
              {errors.description?.type === "required" && (
                <span className="text-red-500">Description is required</span>
              )}
              {errors.description?.type === "maxLength" && (
                <span className="text-red-500">Word limit exceeded</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Add Class</button>
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
  );
};

export default ClassForm;
