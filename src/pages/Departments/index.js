import React, { useState, useEffect } from "react";
import axiosInstance from "utils/axiosInstance";
import DepartmentRow from "./DepartmentRow";
import DepartmentModal from "./DepartmentModal";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Button } from "@windmill/react-ui";

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosInstance("admin/departments");
      setDepartments(result.data);
    };
    fetchData();
  }, []);

  const handleAddClick = () => {
    console.log("Add department clicked");
    setSelectedDepartment(null); // Reset selected department for creating new
    setModalOpen(true);
  };

  const handleSave = async (department) => {
    if (selectedDepartment) {
      // Update existing department
      await axiosInstance.put(
        `/admin/departments/${selectedDepartment.id}`,
        department,
      );
    } else {
      // Create new department
      await axiosInstance.post("/admin/departments", department);
    }
    setModalOpen(false);
    const result = await axiosInstance("/admin/departments");
    setDepartments(result.data);
  };

  return (
    <div className="relative flex min-h-[80vh] flex-col space-y-10 overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
      <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="w-full md:w-1/2">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <FaSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                id="simple-search"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Search"
                required=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
          <Button type="button" onClick={handleAddClick}>
            <FaPlus className="mr-2 h-3.5 w-3.5" />
            Add Department
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-4">
                Department Name
              </th>
              <th scope="col" className="px-4 py-3">
                Description
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {departments
              .filter((department) =>
                department.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()),
              )
              .map((department) => (
                <DepartmentRow key={department.id} department={department} />
              ))}
          </tbody>
        </table>
      </div>
      {modalOpen && (
        <DepartmentModal
          department={selectedDepartment}
          onSave={handleSave}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DepartmentTable;
