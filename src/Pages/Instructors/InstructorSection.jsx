import React from "react";
import getInstructor from "../../Hooks/getInstructors";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const InstructorSection = () => {
  const [allInstructors] = getInstructor();
  const ceo = allInstructors.find(
    (instructor) => instructor.name === "Programming Hero"
  );
  console.log(ceo);
  const sectionInfo = {
    sub_title: "all instructors",
    title: "Meet With Our Instructors",
    text: "= = =Learn from the best= = =",
  };
  console.log(allInstructors);
  return (
    <div className="px-5">
      {/* CEO Section */}
      <div className="mt-20 mx-16 flex flex-col md:flex-row justify-around gap-5 md:gap-20">
        <div>
          <img className="rounded-lg" src={ceo.photo_url} alt="ceo-image" />
        </div>
        <div className="flex-grow ">
          <h1 className="mt-8 text-3xl md:text-4xl  text-secondary  font-bold uppercase">
            {ceo.name}
          </h1>
          <p className="text-xl uppercase font-semibold mt-3">
            CO-Founder | Instructor
          </p>
          <div className="my-3 flex items-center gap-2 mt-5">
            <div className="p-2 hover:bg-gray-800  transition-all rounded-full">
              <FaFacebook className="text-2xl text-secondary hover:text-white cursor-pointer" />
            </div>
            <div className="p-2 hover:bg-gray-800 hover:text-white transition-all rounded-full">
              <FaInstagram className="text-2xl text-secondary hover:text-white cursor-pointer" />
            </div>
            <div className="p-2 hover:bg-gray-800 hover:text-white transition-all rounded-full">
              <FaTwitter className="text-2xl text-secondary hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SectionTitle sectionInfo={sectionInfo} />
      </div>

      {/* All Instructors Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-20">
        {allInstructors &&
          allInstructors
            .filter((instructor) => instructor.name !== "Programming Hero")
            .map((instructor) => (
              <div
                key={instructor._id}
                className={`m-2  shadow-2xl rounded-t-xl`}
              >
                <div className="relative">
                  <img
                    className="w-full h-[420px] object-cover rounded-lg"
                    src={instructor.photo_url}
                    alt={`${instructor?.name}`}
                  />
                  <div className="absolute -bottom-20 p-4 bg-slate-700 text-white w-full rounded-b-xl ">
                    <div className="m-3">
                      <div className="text-lg ">
                        <p>
                          <span className="text-xl font-medium">
                            {instructor.name}
                          </span>
                        </p>
                        <p className="flex items-center gap-2">
                          <FaEnvelope className="text-xl text-white" />
                          <span className="text-lg">{instructor.email}</span>
                        </p>
                      </div>
                    </div>
                    <div className="m-3 flex items-center gap-2">
                      <FaFacebook className="text-2xl text-secondary cursor-pointer" />
                      <FaInstagram className="text-2xl text-secondary cursor-pointer" />
                      <FaTwitter className="text-2xl text-secondary cursor-pointer" />
                    </div>
                  </div>
                  <div className="badge bg-gray-800 text-white absolute top-2 right-2">
                    Instructor
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default InstructorSection;
