import React from "react";
import approvedClasses from "../../Hooks/approvedClasses";

const Classes = () => {
  const [allApprovedClasses, refetch] = approvedClasses();
  console.log(allApprovedClasses);
  return (
    <div>
      <p>All Classes</p>
    </div>
  );
};

export default Classes;
