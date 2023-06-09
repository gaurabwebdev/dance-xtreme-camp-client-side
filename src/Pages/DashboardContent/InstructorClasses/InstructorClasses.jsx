import React, { useEffect, useState } from "react";
import getInstructorClasses from "../../../Hooks/getInstructorClasses";

const InstructorClasses = () => {
  const [classes] = getInstructorClasses();
  console.log(classes);
  return (
    <div>
      <p>Instructor Classes</p>
    </div>
  );
};

export default InstructorClasses;
