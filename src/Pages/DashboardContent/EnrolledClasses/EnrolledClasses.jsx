import React from "react";
import getEnrolledClasses from "../../../Hooks/getEnrolledClasses";
import EnrolledClassDetails from "./EnrolledClassDetails";

const EnrolledClasses = () => {
  const [enrolledClasses] = getEnrolledClasses();
  return (
    <div>
      <p>Total Enrolled Classes: {enrolledClasses?.length}</p>

      <div>
        <EnrolledClassDetails enrolledClasses={enrolledClasses} />
      </div>
    </div>
  );
};

export default EnrolledClasses;
