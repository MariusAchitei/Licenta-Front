import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import Container from "components/custom/Container";

const Sidebar = ({ sections, data }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full">
          <LuUser className="size-40" />
        </div>
        <div className="mt-4 text-center">
          <h2 className="font-semibold">{`${data?.personalInfo.lastName} ${data?.personalInfo.firstName}`}</h2>
          <p className="text-gray-500">{data?.personalInfo.personalId}</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-3 p-6">
        {sections.map((section) => (
          <div className="flex w-full justify-center space-x-5 border-t border-gray-200 py-2 align-middle">
            <div>
              <IoIosArrowDown />
            </div>
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left"
            >
              {section.title}
            </button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Sidebar;
