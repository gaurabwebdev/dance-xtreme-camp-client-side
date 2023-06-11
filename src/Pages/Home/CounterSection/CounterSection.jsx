import React from "react";

const CounterSection = () => {
  return (
    <div className="stats shadow rounded-none py-20 px-20 w-full bg-gray-900 text-center flex flex-col md:flex-row justify-between items-center">
      <div className="stat text-white">
        <div className="stat-title text-white text-2xl">
          Total Active Students
        </div>
        <div className="stat-value text-white">1.3k</div>
      </div>

      <div className="stat text-white">
        <div className="stat-title text-white text-2xl">New Users</div>
        <div className="stat-value">3.5k</div>
      </div>

      <div className="stat text-white">
        <div className="stat-title text-white text-2xl">New Registers</div>
        <div className="stat-value text-white">2k</div>
      </div>
    </div>
  );
};

export default CounterSection;
