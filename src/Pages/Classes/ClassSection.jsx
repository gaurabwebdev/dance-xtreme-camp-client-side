import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const ClassSection = ({ classInfo }) => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [allApprovedClasses, refetch] = classInfo;
  console.log(allApprovedClasses);
  const sectionInfo = {
    sub_title: "our classes",
    title: "choose your dance style",
    text: "Feel the music, get the rhythm and dance like Xtreme",
  };
  return (
    <div className="my-12 mx-8">
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
                  disabled={
                    classItem.available_seats < 1 || !isAdmin || isInstructor
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
