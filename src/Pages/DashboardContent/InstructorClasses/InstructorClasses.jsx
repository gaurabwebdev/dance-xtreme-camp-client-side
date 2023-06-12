import React, { useEffect, useState } from "react";
import getInstructorClasses from "../../../Hooks/getInstructorClasses";
import ClassTable from "../ClassTable/ClassTable";

const InstructorClasses = () => {
  const [classes] = getInstructorClasses();
  return (
    <div>
      <p>Instructor Classes</p>
      <div>
        <ClassTable classes={classes} />
      </div>
    </div>
  );
};

export default InstructorClasses;
