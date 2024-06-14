import React from "react";

import { StyledForm, Container } from "widgets/UserSettings/style";

import LabeledFormInput from "ui/LabeledFormInput";
import CustomSelect from "ui/Select";

import romanianCounties from "db/counties";
import romanianClinics from "db/clinics";
import romanianMedics from "db/romanianMedics";

// hooks
import { useState } from "react";
import useNotistack from "hooks/useNotistack";

const Step2 = ({ type }) => {
  const { notify } = useNotistack(
    "Your changes have been successfully saved.",
    "success",
  );

  const [selectedCounty, setSelectedCounty] = useState();
  const [selectedClinic, setSelectedClinic] = useState();
  const [clinicOptions, setClinicOptions] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedMedic, setSelectedMedic] = useState();
  const [medicOptions, setMedicOptions] = useState([]);

  const handleCountyChange = (county) => {
    setSelectedCounty(county);
    setSelectedClinic(null);
    setSelectedMedic(null);
    console.log(
      romanianClinics.filter((c) => c.countyId === county.id)[0].clinics,
    );
    setClinicOptions(
      romanianClinics.filter((c) => c.countyId === county.id)[0].clinics,
    );
  };
  const handleClinicChange = (clinic) => {
    setSelectedClinic(clinic);
    const medics = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * romanianMedics.length);
      medics.push(romanianMedics[randomIndex]);
    }
    setMedicOptions(medics);
    setSelectedMedic(null);
  };
  const handleMedicChange = (medic) => {
    setSelectedMedic(medic);
  };
  return (
    <StyledForm
      action="#"
      method="post"
      id={`settings_${type}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="wrapper flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-col justify-center align-middle">
          <p>Step 2</p>
          <p className="text-3xl">
            Where and when do you want your appointment?
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <LabeledFormInput
            id={`${type}CountyName`}
            title="County"
            placeholder="County"
            customInput={
              <CustomSelect
                label={`${type}County`}
                placeholder="County"
                options={romanianCounties}
                value={selectedCounty}
                variant="basic"
                changeHandler={(e) => handleCountyChange(e)}
              />
            }
          />
          <LabeledFormInput
            id={`${type}ClinicName`}
            title="Clinic"
            placeholder="Clinic"
            customInput={
              <CustomSelect
                label={`${type}Clinic`}
                placeholder="Clinic"
                options={clinicOptions}
                value={selectedClinic}
                variant="basic"
                changeHandler={(e) => handleClinicChange(e)}
              />
            }
          />
          <LabeledFormInput
            id={`${type}MedicName`}
            title="Medic"
            placeholder="Medic"
            customInput={
              <CustomSelect
                label={`${type}Medic`}
                placeholder="Medic"
                options={medicOptions}
                value={selectedMedic}
                variant="basic"
                changeHandler={(e) => handleMedicChange(e)}
              />
            }
          />
        </div>
      </div>
      {/* <Btn text="Save" handler={notify} type="submit" /> */}
    </StyledForm>
  );
};

export default Step2;
