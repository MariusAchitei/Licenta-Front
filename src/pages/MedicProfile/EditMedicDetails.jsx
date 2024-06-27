import React, { useState } from "react";
import { Input, Label, Button } from "@windmill/react-ui";

const EditMedicDetails = ({ doctor, setDoctor }) => {
  // const [data, setData] = useState(doctor?.data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setData({ ...data, [name]: value });
    const prevData = { ...doctor.data };
    setDoctor({ ...doctor, data: { ...prevData, [name]: value } });
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
          <span>Experience</span>
          <Input
            className="mt-1"
            name="experience"
            value={doctor?.data.experience}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <span>Studies</span>
          <Input
            className="mt-1"
            name="studies"
            value={doctor?.data.studies}
            onChange={handleChange}
          />
        </Label>
        <Label>
          <span>Date of Birth</span>
          <Input
            className="mt-1"
            type="date"
            name="dateOfBirth"
            value={doctor?.data.dateOfBirth}
            onChange={handleChange}
          />
        </Label>
        <Button className="mt-4" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditMedicDetails;
