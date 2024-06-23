import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      className="fixed inset-0 z-50 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onRequestClose}
            className="rounded-md bg-gray-200 px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
