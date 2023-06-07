import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Shared/Header/Header";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-92px-224px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
