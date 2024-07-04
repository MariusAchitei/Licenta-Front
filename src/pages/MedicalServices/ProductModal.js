import React, { useState, useEffect } from "react";
import axiosInstance from "utils/axiosInstance";
import { FaTimes } from "react-icons/fa";
import Modal from "react-modal";
import { Button } from "@windmill/react-ui";

const axios = axiosInstance;

const ProductModal = ({ product, onSave, onClose }) => {
  const [departments, setDepartments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    departmentId: "",
    description: "",
    duration: "",
    image: null,
  });

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await axios.get("/admin/departments");
      setDepartments(result.data);
    };
    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("departmentId", formData.departmentId);
    data.append("description", formData.description);
    data.append("duration", formData.duration);
    if (formData.image) {
      data.append("photo", formData.image);
    }
    await axios.post("/admin/medical-services", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    onSave();
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
                Update medical-service
              </h3>
              <Button onClick={onClose}>
                <FaTimes className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="product-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="product-name"
                    value={formData.name}
                    onChange={handleChange}
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Type name"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="department"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Department
                  </label>
                  <select
                    name="departmentId"
                    id="department"
                    value={formData.departmentId}
                    onChange={handleChange}
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    required
                  >
                    <option value="">Select a department</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
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
                    placeholder="description"
                    required
                  ></textarea>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="duration"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    id="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Product duration"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="image"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleFileChange}
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="items-center rounded-b border-t border-gray-200 p-6 dark:border-gray-700">
              <Button type="submit">Update product</Button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
