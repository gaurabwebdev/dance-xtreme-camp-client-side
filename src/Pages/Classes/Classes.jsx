import React from "react";
import approvedClasses from "../../Hooks/approvedClasses";
import PageCover from "../../Components/Shared/PageCover/PageCover";
import ClassSection from "./ClassSection";

const Classes = () => {
  const [allApprovedClasses, refetch] = approvedClasses();
  console.log(allApprovedClasses);
  const coverDetails = {
    title: "our classes",
    sub_title: "classes",
    cover_url: "https://i.ibb.co/CVSwc2y/class-page-cover-1.jpg",
  };
  return (
    <div>
      <PageCover coverDetails={coverDetails} />
      <ClassSection classInfo={[allApprovedClasses, refetch]} />
    </div>
  );
};

export default Classes;
