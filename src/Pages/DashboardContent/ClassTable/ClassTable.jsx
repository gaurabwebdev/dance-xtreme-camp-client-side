import React, { useState } from "react";
import getInstructorClasses from "../../../Hooks/getInstructorClasses";
import { useLocation } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const ClassTable = ({ classes, refetch }) => {
  const location = useLocation();
  console.log(location);
  // /dashboard/all-classes
  const [currentClass, setCurrentClass] = useState({});
  const [denyClass, setDenyClass] = useState({});
  console.log(denyClass);
  const [axiosSecure] = useAxios();
  const approveClass = (classId, newStatus) => {
    axiosSecure
      .patch(`/classes?classId=${classId}&newStatus=${newStatus}`)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          console.log(data);
          refetch();
          Swal.fire(`Course Approved!`, `You clicked the button!`, `success`);
        }
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { class_id, status, feedback } = data;
    console.log(data);
    axiosSecure
      .patch(`/classes?classId=${class_id}&newStatus=${status}`, { feedback })
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          setDenyClass({});
          console.log(data);
          refetch();
          Swal.fire(
            `Course denied with feedback!`,
            `You clicked the button!`,
            `success`
          );
        }
      });
  };

  // TODO :: Set Deny API

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            {location.pathname === "/dashboard/all-classes" && (
              <>
                <th>S.N</th>
                <th>
                  <div>
                    <p>Class</p>
                    <p>Name | Image</p>
                  </div>
                </th>
                <th>
                  {" "}
                  <div>
                    <p>Instructor </p>
                    <p>Name | Email</p>
                  </div>{" "}
                </th>
                <th>
                  <div>
                    <p>Class </p>
                    <p>Available Seats | Price</p>
                  </div>
                </th>
                <th>Status</th>
                <th>Action</th>
              </>
            )}
            {location.pathname === "/dashboard/instructor-classes" && (
              <>
                <th>S.N</th>
                <th> Class Name</th>
                <th> Instructor Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {/* Admin Data */}
          {classes &&
            location.pathname === "/dashboard/all-classes" &&
            classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <th>
                  <span>{index + 1}</span>
                </th>
                <td>
                  <div className="flex flex-col items-center gap-3">
                    <div className="font-bold">{classItem.class_name}</div>
                    <div>
                      <img
                        className="w-20 h-20 rounded-full"
                        src={classItem.class_img_url}
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem.name}</div>
                    <div className="font-bold">{classItem.email}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">
                      {classItem.available_seats} seats
                    </div>
                    <div className="font-bold">${classItem.price} USD</div>
                  </div>
                </td>
                <td>{classItem.status}</td>
                <th>
                  <div className="flex flex-col justify-center gap-1">
                    <div onClick={() => setCurrentClass(classItem)}>
                      <button
                        onClick={() => window.class_modal.showModal()}
                        className="btn btn-outline btn-secondary btn-xs w-full"
                      >
                        View Details
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => approveClass(classItem._id, "approved")}
                        disabled={
                          classItem.status === "denied" ||
                          classItem.status === "approved"
                        }
                        className="btn btn-outline btn-secondary btn-xs w-full"
                      >
                        Allow
                      </button>
                    </div>
                    <div onClick={() => window.class_denial_modal.showModal()}>
                      <button
                        onClick={() => setDenyClass(classItem)}
                        disabled={
                          classItem.status === "denied" ||
                          classItem.status === "approved"
                        }
                        className="btn btn-outline btn-secondary btn-xs w-full"
                      >
                        Deny
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            ))}

          {/* Instructor Data */}
          {classes &&
            location.pathname === "/dashboard/instructor-classes" &&
            classes.map((classItem, index) => (
              <tr key={classItem._id}>
                <th>
                  <span>{index + 1}</span>
                </th>
                <td>
                  <div>
                    <div className="font-bold">{classItem.class_name}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{classItem.name}</div>
                  </div>
                </td>
                <td>{classItem.email}</td>
                <td>{classItem.status}</td>
                <th>
                  <div
                    onClick={() => setCurrentClass(classItem)}
                    className="flex flex-col justify-center"
                  >
                    <button
                      onClick={() => window.class_modal.showModal()}
                      className="btn btn-outline btn-secondary btn-xs"
                    >
                      View Details
                    </button>
                    {location.pathname === "/dashboard/all-classes" && (
                      <>
                        <button className="btn btn-outline btn-secondary btn-xs">
                          Details
                        </button>
                      </>
                    )}
                  </div>
                </th>
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            {/* <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th> */}
          </tr>
        </tfoot>
      </table>

      {/* Class Details Modal */}

      {currentClass && (
        <dialog id="class_modal" className="modal">
          <form method="dialog" className="modal-box ">
            <button
              onClick={() => setCurrentClass({})}
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-secondary"
            >
              ✕
            </button>
            <div>
              <h3 className="font-bold text-lg mb-3">
                {currentClass.class_name}
              </h3>
              <div>
                <div>
                  <img
                    className="rounded w-full h-48 object-cover"
                    src={currentClass.class_img_url}
                    alt="class-cover"
                  />
                </div>
                <div className="flex justify-between items-center gap-2 mt-3">
                  <div>
                    <p>Instructor Name: {currentClass.name}</p>
                    <p>Instructor Email: {currentClass.email}</p>
                  </div>
                  <div>
                    <p>Available Seats: {currentClass.available_seats}</p>
                    <p>Class Fee: ${currentClass.price}</p>
                  </div>
                </div>
                <div>
                  {currentClass.status === "denied" ? (
                    <div>
                      <p>Feedback: {currentClass?.feedback}</p>
                    </div>
                  ) : (
                    <div>
                      <p>Description: {currentClass.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </dialog>
      )}

      {/* Class Denial Modal */}
      {/* TODO :: Make Modal Close */}
      {denyClass && (
        <dialog id="class_denial_modal" className="modal">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="dialog"
              className="modal-box "
            >
              <button
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-secondary"
              >
                ✕
              </button>
              <div>
                <div className="flex flex-col lg:flex-row items-center gap-1">
                  <div className="form-control w-full lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Class Id</span>
                    </label>
                    <input
                      {...register("class_id", { required: true })}
                      readOnly
                      defaultValue={denyClass?._id}
                      type="text"
                      placeholder="Class Id"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control  w-full lg:w-1/2">
                    <label className="label">
                      <span className="label-text">Class Status</span>
                    </label>
                    <input
                      {...register("status", { required: true })}
                      readOnly
                      defaultValue={"denied"}
                      type="text"
                      placeholder="status"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Feedback</span>
                  </label>
                  <textarea
                    {...register("feedback", {
                      required: true,
                    })}
                    className="textarea textarea-bordered"
                    placeholder="Feedback"
                  ></textarea>
                  {errors.feedback?.type === "required" && (
                    <span className="text-red-500">
                      Can't Deny Without Feedback
                    </span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-secondary">
                    Deny & Send Feedback
                  </button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ClassTable;
