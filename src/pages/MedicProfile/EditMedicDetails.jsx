import React, { useState } from "react";
import { Input, Label, Button } from "@windmill/react-ui";

const EditMedicDetails = ({ doctor, setDoctor }) => {
  // const [data, setData] = useState(doctor?.data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setData({ ...data, [name]: value });
    const prevData = { ...doctor };
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSave = () => {
    // onSave(medicData);
  };

  return (
    <div className="p-6">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Edit Medic Details
      </h3>
      <div className="mt-4 space-y-4">
        <Label>
          <span>University</span>
          <Input
            className="mt-1"
            name="university"
            value={doctor.university}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <span>Employment date</span>
          <Input
            className="mt-1"
            type="date"
            name="employmentDate"
            value={doctor?.employmentDate}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <span>Date of Birth</span>
          <Input
            className="mt-1"
            type="date"
            name="birthDate"
            value={doctor?.birthDate}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <span>Phone</span>
          <Input
            className="mt-1"
            name="phone"
            value={doctor.phone}
            onChange={handleChange}
          />
        </Label>
      </div>
    </div>
  );
};

export default EditMedicDetails;
