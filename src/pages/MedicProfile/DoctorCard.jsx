import React from "react";
import { Button } from "@windmill/react-ui";
import { NavLink } from "react-router-dom";
import { Select } from "@windmill/react-ui";

const departments = [
  { id: 1, name: "Cardiology" },
  { id: 2, name: "Dermatology" },
  { id: 3, name: "Endocrinology" },
  { id: 4, name: "Gastroenterology" },
  { id: 5, name: "Gynecology" },
  { id: 6, name: "Hematology" },
  { id: 7, name: "Infectious Diseases" },
  { id: 8, name: "Nephrology" },
  { id: 9, name: "Neurology" },
  { id: 10, name: "Oncology" },
  { id: 11, name: "Ophthalmology" },
];

export default function DoctorCard({ doctor, setDoctor }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center rounded-lg bg-white px-10 py-10 shadow-lg">
      <div className="h-36 w-36 flex-shrink-0 rounded-lg bg-gray-200">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="ml-4 flex-1 space-y-3">
        <input
          type="text"
          name="name"
          value={doctor.name}
          onChange={handleInputChange}
          className="w-full rounded-md border-gray-300 text-2xl font-bold text-gray-900 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <hr />
        <div className="flex space-x-5 align-middle">
          <label htmlFor="">Rank:</label>
          <input
            type="text"
            name="rank"
            value={doctor.rank}
            onChange={handleInputChange}
            className="w-full rounded-md border-gray-300 text-gray-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <label htmlFor="">Departament:</label>
          <Select
            className="mt-2"
            value={doctor.department}
            onChange={(value) =>
              setDoctor((prevDoctor) => ({
                ...prevDoctor,
                department: value,
              }))
            }
          >
            {departments.map((department) => (
              <option key={department.id} value={department}>
                {department.name}
              </option>
            ))}
          </Select>
        </div>
        <img
          src={doctor.clinic.logo}
          alt={doctor.clinic.name}
          className="size-16 rounded-full"
        />
        <div>
          <p className="text-gray-600">{doctor.clinic.name}</p>
          <p className="text-gray-600">{doctor.clinic.location}</p>
        </div>
        <div className="mt-2 flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg
                key={i}
                className={`h-5 w-5 ${
                  i < doctor.rating.score ? "text-yellow-500" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.336 4.098a1 1 0 00.95.691h4.316c.969 0 1.371 1.24.588 1.81l-3.49 2.545a1 1 0 00-.364 1.118l1.337 4.097c.3.921-.755 1.688-1.54 1.118l-3.49-2.545a1 1 0 00-1.175 0l-3.49 2.545c-.784.57-1.839-.197-1.54-1.118l1.337-4.097a1 1 0 00-.364-1.118l-3.49-2.545c-.784-.57-.38-1.81.588-1.81h4.316a1 1 0 00.95-.691l1.336-4.098z" />
              </svg>
            ))}
          <span className="ml-2 text-gray-600">({doctor.reviews} reviews)</span>
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
  );
}
