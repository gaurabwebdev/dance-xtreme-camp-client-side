import React from "react";

const SectionTitle = ({ sectionInfo }) => {
  const { sub_title, title, text } = sectionInfo;

  return (
    <div className="mt-3 mb-5 flex flex-col justify-center items-center ">
      <p className="text-lg md:text-xl uppercase font-medium">{sub_title}</p>
      <h1 className="text-3xl md:text-4xl text-center  text-secondary font-bold uppercase mt-3">
        {title}
      </h1>
      <p className="flex justify-center items-center gap-2 mt-2 text-base">
        {text}
      </p>
    </div>
  );
};

export default SectionTitle;
