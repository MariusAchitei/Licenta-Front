import React, { useState } from "react";
import axiosInstance from "utils/axiosInstance";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { Button } from "@windmill/react-ui";

const DepartmentModal = ({ department, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance
      .post("/admin/departments", formData)
      .then((res) => {
        onSave();
      })
      .catch((err) => {
        console.log(err);
        onClose();
      });
    onClose();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => {}}
      contentLabel="Edit Clinic"
      className="z-50 m-auto h-full w-[85vw] rounded-md p-6 shadow-lg lg:max-w-2xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div
        id="updateDepartmentModal"
        // tabIndex="20"
        aria-hidden="true"
        className="max-h-[90vh] overflow-auto rounded-2xl bg-white p-6 shadow-lg"
      >
        <div className="relative max-h-full w-full max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg bg-white shadow dark:bg-gray-800"
          >
            <div className="flex items-start justify-between rounded-t border-b p-4 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Update Department
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="updateDepartmentModal"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label
                    htmlFor="department-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Department Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="department-name"
                    value={formData.name}
                    onChange={handleChange}
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Type department name"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Department description"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="items-center rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
              <Button
                type="submit"
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
              >
                Update Department
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default DepartmentModal;
