import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DepartmentRow = ({ department }) => {
  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
      >
        {department.name}
      </th>
      <td className="max-w-[12rem] truncate px-4 py-3">
        {department.description}
      </td>
      <td className="flex items-center justify-end space-x-2 px-4 py-3">
        <button
          type="button"
          data-modal-target="updateDepartmentModal"
          data-modal-toggle="updateDepartmentModal"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit className="h-4 w-4" />
        </button>
        <button type="button" className="text-red-500 hover:text-red-700">
          <FaTrash className="h-4 w-4" />
        </button>
      </td>
    </tr>
  );
};

export default DepartmentRow;
