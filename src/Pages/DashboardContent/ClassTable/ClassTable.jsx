import React, { useState } from "react";
import getInstructorClasses from "../../../Hooks/getInstructorClasses";

const ClassTable = () => {
  const [classes] = getInstructorClasses();
  const [currentClass, setCurrentClass] = useState({});
  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>S.N</th>
            <th> Class Name</th>
            <th> Instructor Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {classes &&
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
                      Details
                    </button>
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
      <>
        {currentClass && (
          <dialog id="class_modal" className="modal">
            <form method="dialog" className="modal-box ">
              <button
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
      </>
    </div>
  );
};

export default ClassTable;
