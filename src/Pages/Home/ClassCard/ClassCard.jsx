import React from "react";

const ClassCard = ({ classItem }) => {
  const { class_img_url, class_name } = classItem;
  return (
    <div className="card w-full h-[200px] bg-base-100 shadow-xl image-full ">
      <figure>
        <img className="w-full" src={class_img_url} alt="class-cover-image" />
      </figure>
      <div className="card-body justify-end ">
        <h2 className="card-title">{class_name}</h2>
        <div className="card-actions justify-start">
          <button className="btn btn-neutral btn-xs">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
