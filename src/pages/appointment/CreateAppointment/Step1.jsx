// styling
import styled from "styled-components";
import { flex, breakpoints } from "utils/styles";

// styled components
import { Header } from "components/custom/Widget/style";

// components
import Widget from "components/custom/Widget";
import WidgetBody from "components/custom/Widget/WidgetBody";
import WidgetHeader from "components/custom/Widget/WidgetHeader";
import CustomSelect from "ui/Select";
import SearchBar from "ui/SearchBar";
import NoDataPlaceholder from "components/custom/NoDataPlaceholder";
import ServiceCard from "components/custom/ServiceCard";

import { useState } from "react";

import medicalDepartments from "db/medicalDepartments";

export const ListHeader = styled(Header)`
  padding: 24px 0 20px;

  .wrapper {
    padding: 0 24px;
    ${flex.col};
    gap: 20px;
  }

  .wrapper,
  form {
    flex-grow: 1;
    width: 100%;
  }

  ${breakpoints.tablet} {
    .wrapper {
      flex-direction: row;
      ${flex.between};

      .gender {
        width: 300px;
      }
    }
  }
`;

const Step1 = ({ variant, onSelect = () => {} }) => {
  const [departmentsOptions, setDepartmentsOptions] =
    useState(medicalDepartments);
  const [department, setDepartment] = useState(medicalDepartments[0]);
  const [search, setSearch] = useState("");
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleDepartmentChange = (department) => {
    console.log(department);
    setDepartment(department);
    setServices(department.services);
  };

  const handleSearchChange = (e) => {
    setSearch(e);
    console.log(e);
    if (services == "") {
      return;
    }
    const filteredServices = services.filter(
      (service) =>
        service.label.toLowerCase().includes(e.toLowerCase()) ||
        service.description.toLowerCase().includes(e.toLowerCase()),
    );
    setServices(filteredServices);
  };

  return (
    <Widget name="DoctorsList">
      <ListHeader>
        <div className="wrapper">
          <CustomSelect
            placeholder={"Select a department"}
            options={departmentsOptions}
            variant="minimal"
            value={department}
            changeHandler={(e) => handleDepartmentChange(e)}
          />
          {/* <GenderNav state={gender} handler={setGender} /> */}
        </div>
        <SearchBar
          placeholder="Search a medical service"
          handler={(e) => handleSearchChange(e)}
          value={search}
        />
      </ListHeader>
      <WidgetBody style={{ padding: 0 }}>
        {services.length !== 0 ? (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServiceId === service.id}
              onSelect={() => setSelectedServiceId(service.id)}
            />
          ))
        ) : (
          <NoDataPlaceholder />
        )}
      </WidgetBody>
    </Widget>
  );
};

export default Step1;
