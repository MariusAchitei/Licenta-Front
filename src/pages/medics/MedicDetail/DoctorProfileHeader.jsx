import React from "react";

const DoctorProfileHeader = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Doctor Profile</h1>
        <nav className="text-sm">
          <a href="#" className="text-white hover:underline">
            Home
          </a>{" "}
          /{" "}
          <a href="#" className="text-white hover:underline">
            Doctor
          </a>{" "}
          / Profile
        </nav>
      </div>
    </header>
  );
};

export default DoctorProfileHeader;
