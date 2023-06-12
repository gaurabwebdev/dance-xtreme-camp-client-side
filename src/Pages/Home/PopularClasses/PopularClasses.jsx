import React from "react";
import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import ClassCard from "../ClassCard/ClassCard";

const PopularClasses = () => {
  const { data: popularClass = [] } = useQuery({
    queryKey: ["popularClass"],
    queryFn: async () => {
      const res = await fetch(
        `https://dance-xtreme-school-server-site.vercel.app/get-popular-classes`
      );
      const data = res.json();
      return data;
    },
  });
  console.log(popularClass);
  const sectionInfo = {
    sub_title: "Classes On High Demand",
    title: "Xtremer's Popular Classes",
    text: "Learn Dance And Make Yourself Stronger",
  };
  return (
    <div className="py-16 px-8">
      <div className="mt-16 mb-12">
        <SectionTitle sectionInfo={sectionInfo} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {popularClass.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
