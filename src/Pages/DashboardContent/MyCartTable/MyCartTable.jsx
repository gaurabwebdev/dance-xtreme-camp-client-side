import React from "react";
import useCart from "../../../Hooks/useCart";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const MyCartTable = () => {
  const [axiosSecure] = useAxios();
  const [refetch, myCart, isLoading] = useCart();
  const deleteClass = (classId) => {
    if (classId) {
      Swal.fire({
        title: "Are you sure?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/selected-classes/${classId}`).then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class removed from list.",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
    }
  };
  return (
    <div className="overflow-x-auto mt-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>Class Id</th>
            <th>Class Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Selected Classes Info */}
          {myCart &&
            myCart.map((cartItem) => (
              <tr className="text-center" key={cartItem._id}>
                <th>{cartItem.classId}</th>
                <td>{cartItem.className}</td>
                <td>${cartItem.price}</td>
                <td>{cartItem.status}</td>
                <td>
                  <div>
                    <button
                      onClick={() => deleteClass(cartItem._id)}
                      className="btn btn-outline btn-secondary btn-xs w-full"
                    >
                      Remove Class
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCartTable;
