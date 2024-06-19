import React from "react";
import DoctorProfileHeader from "./DoctorProfileHeader";
import DoctorInfoSection from "./DoctorInfoSection";
import DoctorBio from "./DoctorBio";
import PracticeExperience from "./PracticeExperience";
import InsuranceAccepted from "./InsuranceAccepted";
import ServicesPricing from "./ServicesPricing";
import Availability from "./Availability";
import ClinicsLocations from "./ClinicsLocations";
import Membership from "./Membership";
import Awards from "./Awards";
import BusinessHours from "./BusinessHours";
import Reviews from "./Reviews";
import Footer from "./Footer";

const MedicDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DoctorProfileHeader />
      <div className="container mx-auto p-4">
        <DoctorInfoSection />
        <DoctorBio />
        <PracticeExperience />
        <InsuranceAccepted />
        <ServicesPricing />
        <Availability />
        <ClinicsLocations />
        <Membership />
        <Awards />
        <BusinessHours />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default MedicDetail;
