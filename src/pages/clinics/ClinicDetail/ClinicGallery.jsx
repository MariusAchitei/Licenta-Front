import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { Galleria } from "primereact/galleria";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

Modal.setAppElement("#root");

export default function ClinicGallery({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleria = useRef(null);

  const images = data.gallery.map((photo, index) => ({
    itemImageSrc: photo,
    thumbnailImageSrc: photo,
    alt: `Image ${index + 1}`,
    title: `Title ${index + 1}`,
  }));

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <div className="space-y-10">
      <h3 className="text-center text-lg font-medium text-gray-900">Gallery</h3>
      <Galleria
        ref={galleria}
        value={images}
        numVisible={7}
        // style={{ maxWidth: "850px" }}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        circular
        fullScreen
        showItemNavigators
        showThumbnails={false}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        closeIcon={<i className="pi pi-times text-white"></i>}
        nextThumbnailButton={
          <MdNavigateBefore className="bg-white text-white"></MdNavigateBefore>
        }
        prevThumbnailButton={
          <MdNavigateNext className="bg-white text-white"></MdNavigateNext>
        }
      />

      <div className="grid w-full grid-cols-3 gap-4">
        {images &&
          images.map((image, index) => {
            let imgEl = (
              <img
                src={image.thumbnailImageSrc}
                onClick={() => {
                  setActiveIndex(index);
                  galleria.current.show();
                }}
                style={{ cursor: "pointer", width: "100%", display: "block" }}
                alt={image.alt}
              />
            );
            return (
              <div className="col-span-1" key={index}>
                {imgEl}
              </div>
            );
          })}
      </div>
    </div>
  );
}
