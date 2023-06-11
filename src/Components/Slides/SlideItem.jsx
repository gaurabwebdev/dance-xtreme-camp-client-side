import React from "react";

const SlideItem = ({ slideContent }) => {
  const { cover_url, cover_title } = slideContent;

  return (
    <div className="relative w-full h-[600px]">
      <div
        className="absolute inset-0 bg-black opacity-10 p-5"
        style={{ zIndex: 10 }}
      ></div>
      <div
        className={`h-full bg-cover bg-center flex flex-col justify-center items-start`}
        style={{ backgroundImage: `url(${cover_url})` }}
      >
        <div className="h-[300px] max-w-xl p-5 z-50 text-start">
          <h1 className="text-6xl font-semibold leading-relaxed text-start">
            {cover_title}
          </h1>
          <button className="btn btn-secondary mt-5">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
