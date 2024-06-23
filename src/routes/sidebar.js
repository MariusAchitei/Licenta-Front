// src/routes/sidebar.ts
const routes = [
  {
    path: "/app/home",
    icon: "HomeIcon",
    name: "Home",
    roles: ["user", "medic", "admin"], // accessible to all roles
    public: true, // accessible without login
  },
  {
    path: "/app/medic-search",
    icon: "MedicIcon",
    name: "Search Medics",
    roles: ["user", "medic", "admin"], // accessible to all roles
    public: true, // accessible without login
  },
  {
    path: "/app/clinics",
    icon: "ClinicIcon",
    name: "Search Clinics",
    roles: ["user", "medic", "admin"], // accessible to all roles
    public: true, // accessible without login
  },
  {
    path: "/app/medical-history",
    icon: "MedicalHistoryIcon",
    name: "Medical History",
    roles: ["user", "admin"], // accessible to users and admins only
    public: false, // accessible only after login
  },
  {
    path: "/app/manage-schedule",
    icon: "ScheduleIcon",
    name: "Manage Schedule",
    roles: ["medic"], // accessible to medics only
    public: false, // accessible only after login
  },
  {
    path: "/app/see-patients",
    icon: "PatientsIcon",
    name: "See Patients",
    roles: ["medic"], // accessible to medics only
    public: false, // accessible only after login
  },
  {
    path: "/app/my-calendar",
    icon: "CalendarIcon",
    name: "My Calendar",
    roles: ["medic"], // accessible to medics only
    public: false, // accessible only after login
  },
];

export default routes;
