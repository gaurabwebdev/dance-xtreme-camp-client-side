import React from "react";

const EnrolledClassDetails = ({ enrolledClasses }) => {
  return (
    <div className="overflow-x-auto mt-12 mx-10 p-3">
      <table className="table text-center">
        {/* head */}
        <thead>
          <tr>
            <th>S.N</th>
            <th>Class Name</th>
            <th>Enrollment Date</th>
            <th>Enrollment Fee</th>
          </tr>
        </thead>
        <tbody>
          {enrolledClasses &&
            enrolledClasses.map((classItem, index) => (
              <tr key={classItem._id} className="bg-base-200">
                <td>{index + 1}</td>
                <td>
                  {classItem.className.map((name) => (
                    <p key={name}>{name}</p>
                  ))}
                </td>
                <td className="font-semibold">
                  {classItem.paymentDate.split("T")[0]}
                </td>
                <td className="font-semibold">${classItem.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClassDetails;
