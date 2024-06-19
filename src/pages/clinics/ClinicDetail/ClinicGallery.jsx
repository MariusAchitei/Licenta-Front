import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ClinicGallery({ data }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(image) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Gallery</h3>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {data.gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="h-32 w-full cursor-pointer rounded-lg object-cover"
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex h-full items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
      >
        <div className="relative rounded-lg bg-white p-4 shadow-lg">
          <button
            onClick={closeModal}
            className="absolute right-0 top-0 m-2 text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="mt-4 h-full w-full rounded-lg object-cover"
            />
          )}
        </div>
      </Modal>
    </div>
  );
}
