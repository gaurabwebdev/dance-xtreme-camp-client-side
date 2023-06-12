import React from "react";

const PageCover = ({ coverDetails }) => {
  const { title, sub_title, cover_url } = coverDetails;
  return (
    <div
      className="bg-cover bg-top bg-no-repeat h-[450px]"
      style={{ backgroundImage: `url(${cover_url})` }}
    >
      <div className="w-full h-full backdrop-brightness-50 flex flex-col justify-center items-center">
        <div className="uppercase p-5 bg-slate-800 bg-opacity-25 rounded-lg text-center text-white">
          <h2 className=" text-4xl md:text-6xl font-semibold">{title}</h2>
          <h4 className="text-xl md:text-3xl font-normal mt-5 mb-3 lett tracking-wider">
            Home | {sub_title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
