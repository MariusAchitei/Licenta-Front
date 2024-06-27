import React, { useState, useEffect } from "react";
import { Input, Button, Pagination, Select } from "@windmill/react-ui";
import PatientCard from "./PatientCard";
import { patients as mockPatients } from "./mockData";

const PatientList = () => {
  const [patients, setPatients] = useState(mockPatients);
  const [filteredPatients, setFilteredPatients] = useState(mockPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    handleSort(sortKey);
  }, [sortKey]);

  const handleSearch = (term) => {
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredPatients(filtered);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    const sorted = [...filteredPatients].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setFilteredPatients(sorted);
    setSortKey(key);
  };

  const currentData = filteredPatients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    // <></>
    <div className="p-6">
      <div className="mb-4 flex justify-between">
        <Input
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3"
        />
        <Select
          className="w-1/3"
          value={sortKey}
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="age">Sort by Age</option>
        </Select>
      </div>
      <div className="flex flex-col">
        {currentData.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Pagination
          totalResults={filteredPatients.length}
          resultsPerPage={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
          label="Patients navigation"
        />
      </div>
    </div>
  );
};

export default PatientList;
