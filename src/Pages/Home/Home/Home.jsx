import React from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import CounterSection from "../CounterSection/CounterSection";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopularClasses />
      <CounterSection />
      <PopularInstructors />
    </div>
  );
};

export default Home;
