import React from "react";
import FilterSidebar from "./FilterSidebar";
import DoctorList from "./DoctorList";
import Header from "./Header";
import SortingBar from "./SortingBar";

const MedicSearch = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto flex">
        <FilterSidebar />
        <div className="flex-grow">
          <SortingBar />
          <DoctorList />
        </div>
      </div>
    </div>
  );
};

export default MedicSearch;
