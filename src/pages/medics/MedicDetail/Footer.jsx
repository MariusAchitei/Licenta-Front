import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6 bg-blue-600 p-6 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="mb-4 lg:mb-0">
            <h4 className="font-bold">DocCare</h4>
            <p className="text-sm">For Patients | For Doctors</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:underline">
              About Us
            </a>
            <a href="#" className="text-white hover:underline">
              Contact Us
            </a>
            <a href="#" className="text-white hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-sm">
          © 2023 DocCare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
