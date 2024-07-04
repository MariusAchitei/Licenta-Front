import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ProductRow = ({ product }) => {
  return (
    <tr className="border-b dark:border-gray-700">
      <td className="px-4 py-3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-16 w-16 object-cover"
        />
      </td>
      <th
        scope="row"
        className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
      >
        {product.name}
      </th>
      <td className="px-4 py-3">{product.category}</td>
      <td className="px-4 py-3">{product.brand}</td>
      <td className="max-w-[12rem] truncate px-4 py-3">
        {product.description}
      </td>
      <td className="px-4 py-3">${product.price}</td>
      <td className="flex items-center justify-end space-x-2 px-4 py-3">
        <button
          type="button"
          data-modal-target="updateProductModal"
          data-modal-toggle="updateProductModal"
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

export default ProductRow;
