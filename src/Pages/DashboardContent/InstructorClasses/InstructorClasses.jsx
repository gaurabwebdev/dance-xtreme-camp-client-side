import React, { useEffect, useState } from "react";
import getInstructorClasses from "../../../Hooks/getInstructorClasses";
import ClassTable from "../ClassTable/ClassTable";

const InstructorClasses = () => {
  const [classes] = getInstructorClasses();
  console.log(classes);
  return (
    <div>
      <p>Instructor Classes</p>
      <div>
        <ClassTable />
      </div>
    </div>
  );
};

export default InstructorClasses;
