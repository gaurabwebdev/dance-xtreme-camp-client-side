import React from "react";
import getClasses from "../../Hooks/getClasses";
import ClassTable from "./ClassTable/ClassTable";

const AllClasses = () => {
  const [allClasses, refetch] = getClasses();
  return (
    <div>
      <p>Total Classes: {allClasses?.length}</p>
      <div>
        <ClassTable classes={allClasses} refetch={refetch} />
      </div>
    </div>
  );
};

export default AllClasses;
