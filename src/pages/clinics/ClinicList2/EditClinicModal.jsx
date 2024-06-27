import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { Button } from "@windmill/react-ui";
import { FaPlus, FaTrash, FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import FilesGallery from "components/FileGallery";

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
    { id: 1, name: "Consultation Room.jpg", type: "jpg" },
    { id: 1, name: "Radiology Department.jpg", type: "jpg" },
    { id: 1, name: "Laboratory.jpg", type: "jpg" },
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
  const [clinicData, setClinicData] = useState(null);
  const [formData, setFormData] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: 44.437926,
    lng: 26.096306,
  });

  useEffect(() => {
    const fetchClinicData = () => {
      try {
        console.log("Try");
        // const response = await axios.get("/api/clinic"); // Replace with actual API URL
        // setClinicData(response.data);
        // setFormData(response.data);
        // setMarkerPosition({
        //   lat: response.data.coordinates.lat,
        //   lng: response.data.coordinates.lng,
        // });
        setFormData(mockClinicData); // Fallback to mock data
      } catch (error) {
        console.error("Error fetching clinic data:", error);
        setFormData(mockClinicData); // Fallback to mock data
        console.log("error", formData);
        // Handle error
      }
    };

    if (isOpen && !createMode) {
      console.log("isOpen", isOpen);
      fetchClinicData();
    }
    console.log("formData", formData);
  }, [isOpen]);

  const handleChange = (e) => {
    if (formData == null) setFormData({});
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, index, key) => {
    if (!formData) setFormData({});
    if (!formData[key]) {
      setFormData({ ...formData, [key]: [] });
    }
    const updatedArray = [...formData[key]];
    updatedArray[index] = e.target.value;
    setFormData({ ...formData, [key]: updatedArray });
  };

  const handleAddItem = (key) => {
    console.log("Deci nu te cred 1", formData);
    if (!formData) {
      setFormData({ [key]: [""] });
      return;
    }
    console.log("Deci nu te cred 2", formData);
    if (!formData[key]) {
      console.log("formData BAGAMIAS PUL", formData, "key", formData[key]);
      setFormData({ ...formData, [key]: [] });
    }
    console.log("AM IESIT");
    setFormData({ ...formData, [key]: [...formData[key], ""] });
  };

  const handleRemoveItem = (key, index) => {
    const updatedArray = formData[key].filter((_, i) => i !== index);
    setFormData({ ...formData, [key]: updatedArray });
  };

  const handleMarkerDragEnd = (e) => {
    const { latLng } = e;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setMarkerPosition({ lat, lng });
    setFormData({ ...formData, coordinates: { lat, lng } });
  };

  if (!formData && !createMode) {
    return null; // or a loading spinner
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Clinic"
      className="z-50 m-auto h-full w-[85vw] rounded-md  p-6 shadow-lg lg:max-w-2xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
    >
      <div className="max-h-[90vh] overflow-auto rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          {createMode ? "Add Clinic" : "Edit Clinic"}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData?.name}
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
              value={formData?.address}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Hours
            </label>
            <input
              type="text"
              name="hours"
              value={formData?.hours}
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
              value={formData?.description}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Phone
            </label>
            <input
              type="text"
              name="contactPhone"
              value={formData?.contact?.phone}
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
              name="contactEmail"
              value={formData?.contact?.email}
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
              name="contactWebsite"
              value={formData?.contact?.website}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Gallery
            </label>
            <FilesGallery files={formData?.gallery} onFileUpload={() => {}}>
              {/* {formData?.gallery?.map((url, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => handleArrayChange(e, index, "gallery")}
                    className="mr-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <Button
                    layout="link"
                    onClick={() => handleRemoveItem("gallery", index)}
                  >
                    <FaTrash className="text-red-500" />
                  </Button>
                </div>
              ))} */}
            </FilesGallery>
            {/* <Button layout="link" onClick={() => handleAddItem("gallery")}>
              <FaPlus className="text-green-500" />
              Add Image
            </Button> */}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Coordinates
            </label>
            <div className="mb-2 flex items-center">
              <input
                type="number"
                name="lat"
                value={formData?.coordinates?.lat}
                onChange={(e) => handleChange(e)}
                className="mr-2 flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <input
                type="number"
                name="lng"
                value={formData?.coordinates?.lng}
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
              Specialties
            </label>
            {formData?.specialties?.map((specialty, index) => (
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
            {formData?.services?.map((service, index) => (
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
            <Button className="ml-4" onClick={() => onSave(formData)}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditClinicModal;
