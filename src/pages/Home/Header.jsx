import React from "react";
import "./Header.css";

const Header = ({ title, subtitle }) => {
  return (
    <>
      <div className="static">
        <div className="z-1 absolute inset-0 h-96 bg-gradient-to-b from-purple-800 to-white bg-cover bg-center"></div>
      </div>
    </>
  );
};

export default Header;
