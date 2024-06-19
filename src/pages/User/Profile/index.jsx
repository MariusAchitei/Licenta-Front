import React from "react";
import Sidebar from "./Sidebar";
import AccountInfo from "./AccountInfo";
import Authentication from "./Authentication";
import AssociatedCards from "./AssociatedCards";
import PersonalInfo from "./PersonalInfo";
import AccountConfirmation from "./AccountConfirmation";
import DeleteAccount from "./DeleteAccount";
import Section from "./Section";
import { data } from "db/cure";
// Replace this with the correct import path or remove if it's not needed
// import { data } from "db/cure";

const UserProfile = () => {
  const mockData = {
    accountInfo: {
      patientCode: "2042353281",
      subscriptions: [
        "LEV 9 GLOBAL SOURCING EALIAN MINI (1AN)",
        "LEV 9 GLOBAL SOURCING EALIAN DEPOZIT COMPLETE (3ANI)",
        "LEV 9 GLOBAL SOURCING EALIAN CONTINUT MACHETE ECHELEER 1000 (3ANI)",
      ],
      phoneNumber: "0786758239",
      email: "marius.achitei020@gmail.com",
    },
    authentication: {
      lastPasswordChange: "01.01.2021",
      socialAuth: {
        apple: false,
        google: true,
        facebook: false,
      },
    },
    personalInfo: {
      fullName: "Marius Dumitru Achitei",
      gender: "Male",
      dateOfBirth: "29.10.2002",
      nationality: "Romanian",
      placeOfBirth: "Iasi",
      currentResidence: "Iasi",
      address: "Sat.Romanesti, Com.Mirosanesti, Str.Exterioara, Nr.12",
    },
    accountConfirmation: {
      emailConfirmed: true,
      phoneConfirmed: true,
      marketingConsent: true,
    },
  };

  const sections = [
    {
      id: "account-info",
      title: "Account Info",
      component: AccountInfo,
      data: mockData.accountInfo,
    },
    {
      id: "authentication",
      title: "Authentication",
      component: Authentication,
      data: mockData.authentication,
    },
    {
      id: "associated-cards",
      title: "Associated Cards",
      component: AssociatedCards,
      data: { test: 25 },
    },
    {
      id: "personal-info",
      title: "Personal Info",
      component: PersonalInfo,
      data: mockData.personalInfo,
    },
    {
      id: "account-confirmation",
      title: "Account Confirmation",
      component: AccountConfirmation,
      data: mockData.accountConfirmation,
    },
    {
      id: "delete-account",
      title: "Delete Account",
      component: DeleteAccount,
      data: { test: 25 },
    },
  ];

  return (
    <div className="m-auto flex min-h-screen flex-col bg-gray-50 px-5 lg:max-w-[70vw] lg:flex-row">
      <Sidebar sections={sections} />
      <div className="flex-1 p-6">
        <h1 className="mb-6 text-3xl font-bold">My Profile</h1>
        {sections.map(
          ({ id, title, component: Component, data = { test: 25 } }) => (
            <Section key={id} title={title}>
              {Component({ data })}
            </Section>
          ),
        )}
      </div>
    </div>
  );
};

export default UserProfile;
