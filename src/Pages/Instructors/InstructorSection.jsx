import React from "react";
import getInstructor from "../../Hooks/getInstructors";
import SectionTitle from "../../Components/Shared/SectionTitle/SectionTitle";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const InstructorSection = () => {
  const [allInstructors] = getInstructor();
  const location = useLocation();
  const ceo = allInstructors?.filter(
    (instructor) => instructor.name === "Programming Hero"
  );

  const sectionInfo = {
    sub_title: "all instructors",
    title: "Meet With Our Instructors",
    text: "= = =Learn from the best= = =",
  };
  return (
    <div className="px-5 mb-32">
      {/* CEO Section */}
      <div className="my-20 mx-16 flex flex-col md:flex-row justify-around items-center gap-5 md:gap-20">
        <div>
          <img
            className="rounded-lg  border-y-4 border-gray-800 w-full lg:max-w-lg"
            src={ceo?.photo_url || "https://i.ibb.co/9N2FzW0/ceo.jpg"}
            alt="ceo-image"
          />
        </div>
        <div className="flex-grow">
          <h1 className="mt-8 text-3xl md:text-4xl  text-gray-800  font-bold uppercase">
            {ceo.name}
          </h1>
          <p className="text-xl uppercase font-semibold mt-3">
            CO-Founder | Instructor
          </p>
          <div className="my-3 flex items-center gap-2 mt-5 ">
            <div className="p-2 hover:bg-gray-800 text-secondary hover:text-white cursor-pointer  transition-all  rounded-full">
              <FaFacebook className="text-2xl  " />
            </div>
            <div className="p-2 hover:bg-gray-800 text-secondary hover:text-white cursor-pointer  transition-all rounded-full">
              <FaInstagram className="text-2xl  " />
            </div>
            <div className="p-2 hover:bg-gray-800 text-secondary hover:text-white cursor-pointer  transition-all rounded-full">
              <FaTwitter className="text-2xl  " />
            </div>
          </div>
          <div className="max-w-[500px]">
            <p className="text-xl font-thin mt-5">
              Welcome to danceXtreme, the ultimate dance school where passion
              meets movement. As the CEO, I am delighted to introduce you to our
              exceptional summer camp program, offering an incredible array of
              dance classes that cater to every dancer's dreams.
            </p>
            <p className="text-xl font-thin mt-5">
              Join us at danceXtreme, where we believe that dance has the power
              to inspire and empower. Unleash your passion, ignite your
              creativity, and let your spirit soar. Together, let's make every
              step count in the extraordinary world of dance.
            </p>
            <p className="text-xl font-thin mt-5">
              Enroll today and embark on a dance journey like no other!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <SectionTitle sectionInfo={sectionInfo} />
      </div>

      {/* All Instructors Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-20 my-20">
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
