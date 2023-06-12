import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen text-center py-8">
      <div className="flex flex-col justify-center items-center">
        <img
          className="max-w-xs pb-8 md:max-w-lg"
          src="https://i.ibb.co/hBH5Kv9/error-404.png"
          alt=""
        />
      </div>

      <Link to={"/"}>
        <button className="btn btn-secondary">Go Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
