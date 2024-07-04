import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Button } from "@windmill/react-ui";
import { FaPlus, FaTrash } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import FilesGallery from "components/FileGallery";
import Dropzone from "react-dropzone";

const mockClinicData = {
  name: "Hyperclinica Iasi",
  address: "Strada Alexandru cel Bun nr. 12, Iasi, Romania",
  hours: "Monday - Friday 09:00 - 19:00",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykS2ypRll9Cg0OcC605mMt8JSGv7dJaSGWQ&s",
  description:
    "Palace Hyperclinica Iasi is a renowned medical facility located in the heart of Iasi, offering a wide range of high-quality medical services. Our team of specialized doctors and dedicated staff ensure that each patient receives the best possible care.",
  specialties: [
    "Gynecology",
    "Cardiology",
    "Pediatrics",
    "Dermatology",
    "Orthopedics",
    "Neurology",
  ],
  gallery: [
    { id: 1, name: "Lobby Area.jpg", type: "jpg" },
    { id: 2, name: "Consultation Room.jpg", type: "jpg" },
    { id: 3, name: "Radiology Department.jpg", type: "jpg" },
    { id: 4, name: "Laboratory.jpg", type: "jpg" },
  ],
  coordinates: { lat: 47.1585, lng: 27.6014 },
  mapLink: "https://maps.google.com/?q=Palace+Hall+Clinic",
  contact: {
    phone: "+40 21 123 4567",
    email: "contact@hyperclinica-iasi.ro",
    website: "https://www.hyperclinica-iasi.ro",
  },
  services: [
    "General Consultations",
    "Specialized Consultations",
    "Laboratory Tests",
    "X-rays and Ultrasounds",
    "Outpatient Treatment",
    "Vaccinations",
  ],
  insuranceAccepted: [
    "Allianz",
    "Signal Iduna",
    "Generali",
    "Uniqa",
    "Groupama",
  ],
};

const EditClinicModal = ({ isOpen, onClose, onSave, createMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    schedule: [],
    description: "",
    contact: {
      phone: "",
      email: "",
      website: "",
    },
    gallery: [],
    coordinates: {
      lat: 44.437926,
      lng: 26.096306,
    },
    specialties: [],
    services: [],
    mainPhoto: null,
  });

  const [markerPosition, setMarkerPosition] = useState({
    lat: 44.437926,
    lng: 26.096306,
  });

  const [previewMainPhoto, setPreviewMainPhoto] = useState(null);

  useEffect(() => {
    const fetchClinicData = async () => {
      try {
        const response = await axios.get("/api/clinic"); // Replace with actual API URL
        setFormData(response.data);
        setMarkerPosition({
          lat: response.data.coordinates.lat,
          lng: response.data.coordinates.lng,
        });
      } catch (error) {
        console.error("Error fetching clinic data:", error);
        setFormData(mockClinicData); // Fallback to mock data
      }
    };

    if (isOpen && !createMode) {
      fetchClinicData();
    }
  }, [isOpen, createMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.split(".").length > 1) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleArrayChange = (e, index, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [key]: updatedArray,
    }));
  };

  const handleAddItem = (key) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: [...(prevData[key] || []), ""],
    }));
  };

  const handleRemoveItem = (key, index) => {
    const updatedArray = formData[key].filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      [key]: updatedArray,
    }));
  };

  const handleMarkerDragEnd = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setMarkerPosition({ lat, lng });
    setFormData((prevData) => ({
      ...prevData,
      coordinates: { lat, lng },
    }));
  };

  const handleFileUpload = (newFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      gallery: [...(prevData.gallery || []), ...newFiles],
    }));
  };

  const handleFileRemove = (index) => {
    const updatedGallery = formData.gallery.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      gallery: updatedGallery,
    }));
  };

  const handleMainPhotoUpload = (files) => {
    console.log("BAAADSFLKNDSOGNDSFKLAFNDSFN");
    const file = files[0];
    setFormData((prevData) => ({
      ...prevData,
      mainPhoto: file,
    }));
    setPreviewMainPhoto(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    try {
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${formData.coordinates.lat},${formData.coordinates.lng}&key=${"AIzaSyC6qvAEkBdH88CSgYmIGMDYKdjJRhJXCm8"}`;

      const geocodeResponse = await axios.get(geocodeUrl);
      const addressComponents =
        geocodeResponse.data.results[0].address_components;

      let city = "";
      let county = "";

      addressComponents.forEach((component) => {
        if (component.types.includes("locality")) {
          city = component.long_name;
        }
        if (component.types.includes("administrative_area_level_2")) {
          county = component.long_name;
        }
      });

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("phone", formData.contact.phone);
      formDataToSend.append("email", formData.contact.email);
      formDataToSend.append("website", formData.contact.website);
      formDataToSend.append("lat", formData.coordinates.lat);
      formDataToSend.append("lng", formData.coordinates.lng);
      formDataToSend.append(
        "specialties",
        JSON.stringify(formData.specialties),
      );
      formDataToSend.append("services", JSON.stringify(formData.services));
      formDataToSend.append("city", city);
      formDataToSend.append("county", county);
      if (formData.mainPhoto) {
        formDataToSend.append("mainPhoto", formData.mainPhoto);
      }
      for (let i = 0; i < formData.gallery.length; i++) {
        if (formData.gallery[i].file)
          formDataToSend.append("files", formData.gallery[i].file);
      }

      const response = await axios.post(
        "http://localhost:8080/api/v1/clinics",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      onSave(response.data);
      onClose();
    } catch (error) {
      console.error("Error saving clinic data:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Clinic"
      className="z-50 m-auto h-full w-[85vw] rounded-md p-6 shadow-lg lg:max-w-2xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="max-h-[90vh] overflow-auto rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          {createMode ? "Add Clinic" : "Edit Clinic"}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block h-48 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Phone
            </label>
            <input
              type="text"
              name="contact.phone"
              value={formData.contact.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Email
            </label>
            <input
              type="email"
              name="contact.email"
              value={formData.contact.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Website
            </label>
            <input
              type="text"
              name="contact.website"
              value={formData.contact.website}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Main Photo
            </label>
            <Dropzone onDrop={handleMainPhotoUpload}>
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="mt-1 flex cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 px-6 py-4"
                >
                  <input {...getInputProps()} />
                  {previewMainPhoto ? (
                    <img
                      src={previewMainPhoto}
                      alt="Preview"
                      className="h-24 w-24 object-cover"
                    />
                  ) : (
                    <p>Drag 'n' drop a file here, or click to select file</p>
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Coordinates
            </label>
            <div className="mb-2 flex items-center">
              <input
                type="number"
                name="lat"
                value={formData.coordinates.lat}
                onChange={(e) => handleChange(e)}
                className="mr-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <input
                type="number"
                name="lng"
                value={formData.coordinates.lng}
                onChange={(e) => handleChange(e)}
                className="ml-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <LoadScript googleMapsApiKey="AIzaSyC6qvAEkBdH88CSgYmIGMDYKdjJRhJXCm8">
              <GoogleMap
                mapContainerStyle={{ height: "200px", width: "100%" }}
                center={markerPosition}
                zoom={13}
              >
                <Marker
                  position={markerPosition}
                  draggable
                  onDragEnd={(e) => handleMarkerDragEnd(e)}
                />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gallery
            </label>
            <FilesGallery
              files={formData.gallery}
              onFileUpload={handleFileUpload}
              onFileRemove={handleFileRemove}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Specialties
            </label>
            {formData.specialties.map((specialty, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  type="text"
                  value={specialty}
                  onChange={(e) => handleArrayChange(e, index, "specialties")}
                  className="mr-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <Button
                  layout="link"
                  onClick={() => handleRemoveItem("specialties", index)}
                >
                  <FaTrash className="text-red-500" />
                </Button>
              </div>
            ))}
            <Button layout="link" onClick={() => handleAddItem("specialties")}>
              <FaPlus className="text-green-500" />
              Add Specialty
            </Button>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Services
            </label>
            {formData.services.map((service, index) => (
              <div key={index} className="mb-2 flex items-center">
                <input
                  type="text"
                  value={service}
                  onChange={(e) => handleArrayChange(e, index, "services")}
                  className="mr-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <Button
                  layout="link"
                  onClick={() => handleRemoveItem("services", index)}
                >
                  <FaTrash className="text-red-500" />
                </Button>
              </div>
            ))}
            <Button layout="link" onClick={() => handleAddItem("services")}>
              <FaPlus className="text-green-500" />
              Add Service
            </Button>
          </div>

          <div className="mt-6 flex justify-end">
            <Button layout="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="ml-4" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditClinicModal;
