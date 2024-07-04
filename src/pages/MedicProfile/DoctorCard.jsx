import React, { useEffect, useState, useContext } from "react";
import { Button } from "@windmill/react-ui";
import { NavLink } from "react-router-dom";
import axiosInstance from "utils/axiosInstance";
import { UserContext } from "contexts/UserContext";

// public class Doctor {
//     private String lastName;
//     private String firstName;
//     private String phone;
//     private String bio;
//     private String professionalTitle;
//     private String university;
//     private Long departmentId;
//     private String departmentName;
//     private String role;
//     private LocalDate birthDate;
//     private LocalDate employmentDate;
//     private String photo;
//     private String clinicPhoto;
//     private String clinicName;
//     private String clinicAddress;
// }

export default function DoctorCard({ doctor, setDoctor }) {
  const { getIdentity } = useContext(UserContext);
  const [departments, setDepartments] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePhoto(file);
      setDoctor((prevDoctor) => ({
        ...prevDoctor,
        photo: URL.createObjectURL(file),
      }));
    }
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await axiosInstance.get("/public/departments");
      setDepartments(result.data);
    };
    fetchDepartments();
  }, []);

  const handleSave = async () => {
    const medic = await getIdentity();
    const formData = new FormData();
    // formData.append(
    //   "medic",
    //   new Blob([JSON.stringify(doctor)], { type: "application/json" }),
    // );
    formData.append("lastName", doctor.lastName);
    formData.append("firstName", doctor.firstName);
    formData.append("professionalTitle", doctor.professionalTitle);
    formData.append("role", doctor.role);
    formData.append("departmentId", doctor.departmentId);
    formData.append("role", doctor.role);
    formData.append("phone", doctor.phone);
    formData.append("bio", doctor.bio);
    formData.append("university", doctor.university);
    formData.append("birthDate", doctor.birthDate);
    formData.append("employmentDate", doctor.employmentDate);
    formData.append("medicalServicesIds", doctor.medicalServicesIds || []);
    if (profilePhoto) {
      formData.append("photo", profilePhoto);
    }

    await axiosInstance.put(`/medics/${medic.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <div className="flex items-center rounded-lg bg-white px-10 py-10 shadow-lg">
        <div className="relative h-36 w-36 flex-shrink-0 rounded-lg bg-gray-200">
          <img
            src={doctor.photo}
            alt={doctor.lastName}
            className="h-full w-full cursor-pointer rounded-lg object-cover"
            onClick={() => document.getElementById("profilePhotoInput").click()}
          />
          <input
            type="file"
            id="profilePhotoInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handlePhotoChange}
          />
        </div>
        <div className="ml-4 flex-1 space-y-3">
          <div className="flex space-x-5">
            <input
              type="text"
              placeholder="Professional Title"
              name="professionalTitle"
              value={doctor.professionalTitle}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 text-2xl font-bold text-gray-900 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={doctor.lastName}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 text-2xl font-bold text-gray-900 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={doctor.firstName}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 text-2xl font-bold text-gray-900 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <hr />
          <div className="flex space-x-5 align-middle">
            <label htmlFor="">Role:</label>
            <input
              type="text"
              name="role"
              value={doctor.role}
              onChange={handleInputChange}
              className="w-full rounded-md border-gray-300 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <label htmlFor="">Departament:</label>
            <select
              name="departmentId"
              id="departmentId"
              value={doctor.departmentId}
              onChange={handleInputChange}
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
          <img
            src={doctor.clinicPhoto}
            alt={doctor.clinicName}
            className="size-16 rounded-full"
          />
          <div>
            <p className="text-gray-600">{doctor.clinicName}</p>
            <p className="text-gray-600">{doctor.clinicAddress}</p>
          </div>
        </div>
        <div className="ml-4 flex flex-col space-y-2">
          <NavLink to={"/app/create-appointment"}>
            <Button>Book Appointment</Button>
          </NavLink>
          <NavLink to="/app/medic-detail">
            <Button layout="outline">See details</Button>
          </NavLink>
        </div>
      </div>
      <div>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  );
}
