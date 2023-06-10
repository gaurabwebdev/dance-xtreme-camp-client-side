import React from "react";
import approvedClasses from "../../Hooks/approvedClasses";
import PageCover from "../../Components/Shared/PageCover/PageCover";

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
      <p>All Classes</p>
    </div>
  );
};

export default Classes;
