import React from "react";
import getClasses from "../../Hooks/getClasses";
import ClassTable from "./ClassTable/ClassTable";

const AllClasses = () => {
  const [allClasses] = getClasses();
  console.log(allClasses);
  return (
    <div>
      <p>Total Classes: {allClasses?.length}</p>
      <div>
        <ClassTable classes={allClasses} />
      </div>
    </div>
  );
};

export default AllClasses;
