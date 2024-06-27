import Sidebar from "./Sidebar";
import AccountInfo from "./AccountInfo";
import Authentication from "./Authentication";
import PersonalInfo from "./PersonalInfo";
import Section from "./Section";
import AdditionalInformation from "./AdditionalInformation";

const UserProfile = () => {
  const mockData = {
    accountInfo: {
      accountId: "1",
      phoneNumber: "0786758239",
      email: "marius.achitei020@gmail.com",
    },
    personalInfo: {
      firstName: "Marius",
      lastName: "Achitei",
      personalId: "5021025226727",
      dateOfBirth: "25.10.2002",
      county: "Botosani",
      city: "Romanesti",
    },
    generalInformation: {
      gender: "Male",
      nationality: "Romanian",
      placeOfBirth: "Iasi",
      currentResidence: "Iasi",
      address: "Sat.Romanesti, Com.Mirosanesti, Str.Exterioara, Nr.12",
    },
    additionalInfo: {
      bloodType: "A+",
      weight: "70",
      height: "180",
      profession: "Student",
      maritalStatus: "Single",
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
      id: "personal-info",
      title: "Personal Info",
      component: PersonalInfo,
      data: mockData.personalInfo,
    },
    {
      id: "general-information",
      title: "General Information",
      component: Authentication,
      data: mockData.generalInformation,
    },
    {
      id: "additional-info",
      title: "Additional Information",
      component: AdditionalInformation,
      data: mockData.additionalInfo,
    },
  ];

  return (
    <div className="m-auto flex min-h-screen flex-col bg-gray-50 px-5 lg:max-w-[90vw] lg:flex-row">
      <Sidebar sections={sections} data={mockData} />
      <div className="flex-1 p-6">
        <h1 className="mb-6 text-3xl font-bold">My Profile</h1>
        {sections.map(
          ({ id, title, component: Component, data = { test: 25 } }) => (
            <Section id={id} key={id} title={title}>
              {Component({ data })}
            </Section>
          ),
        )}
      </div>
    </div>
  );
};

export default UserProfile;
