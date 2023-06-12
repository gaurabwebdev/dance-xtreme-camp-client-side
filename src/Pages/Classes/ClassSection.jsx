import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const ClassSection = ({ classInfo }) => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useAxios();
  const navigate = useNavigate();
  const [allApprovedClasses] = classInfo;
  const selectClass = (currentClass) => {
    if (currentClass && user?.email) {
      const selectedClassData = {
        classId: currentClass._id,
        className: currentClass.class_name,
        instructorName: currentClass.name,
        price: currentClass.price,
        userEmail: user.email,
        status: "pending",
      };
      axiosSecure
        .post("/selected-classes", { selectedClassData })
        .then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              title: "Class Added Successfully!",
              text: "",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              cancelButtonText: "Continue Adding!",
              confirmButtonText: "Go To Cart",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/dashboard/my-selected-classes");
              }
            });
          }
        });
    }
  };
  const sectionInfo = {
    sub_title: "our classes",
    title: "choose your dance style",
    text: "Feel the music, get the rhythm and dance like Xtreme",
  };
  return (
    <div className="my-32 mx-8">
      <SectionTitle sectionInfo={sectionInfo} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {allApprovedClasses &&
          allApprovedClasses.map((classItem) => (
            <div
              key={classItem._id}
              className={`m-2 p-3 shadow-2xl rounded-lg ${
                classItem.available_seats === 0 && "bg-red-600 text-white"
              }`}
            >
              <div className="relative">
                <img
                  className="w-full h-72 object-cover rounded-lg"
                  src={classItem.class_img_url}
                  alt=""
                />
                <div className="absolute top-2 right-2">
                  <p className=" btn btn-xs">
                    <Link>
                      <span className=" font-semibold">
                        {" "}
                        {classItem.name.split(" ")[0]}
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="m-3">
                <div className="">
                  <h2 className="text-2xl">{classItem.class_name}</h2>
                </div>

                <div className="text-lg ">
                  <p>
                    Price:{" "}
                    <span className="text-xl font-medium">
                      ${classItem.price}
                    </span>
                  </p>
                  <p>
                    Available Seats:{" "}
                    <span className="text-xl font-medium">
                      {classItem.available_seats}
                    </span>
                  </p>
                </div>
              </div>
              <div className="m-3">
                <button
                  onClick={() => selectClass(classItem)}
                  disabled={
                    classItem.available_seats < 1 || isAdmin || isInstructor
                  }
                  className="btn btn-active btn-secondary btn-sm "
                >
                  Select
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ClassSection;
