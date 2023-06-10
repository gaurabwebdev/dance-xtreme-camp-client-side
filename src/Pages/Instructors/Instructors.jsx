import React from "react";
import PageCover from "../../Components/Shared/PageCover/PageCover";
import InstructorSection from "./InstructorSection";

const Instructors = () => {
  const coverDetails = {
    title: "our instructors",
    sub_title: "instructors",
    cover_url: "https://i.ibb.co/YD3QdKj/instructor-cover.jpg",
  };
  return (
    <div>
      <PageCover coverDetails={coverDetails} />
      <InstructorSection />
    </div>
  );
};

export default Instructors;
