import { lazy } from "react";

const MedicDetail = lazy(() => import("pages/medics/MedicDetail"));
const ClinicsPage = lazy(() => import("pages/clinics/ClinicList"));
const MedicSearch = lazy(() => import("pages/medics/MedicSearch"));
const Clinics2 = lazy(() => import("pages/clinics/ClinicList2"));
const ClinicDetail = lazy(() => import("pages/clinics/ClinicDetail/index"));
const Profile = lazy(() => import("pages/User/Profile"));
const MedicalHistory = lazy(() => import("pages/MedicalHistory"));
const TreatmentPlanDetail = lazy(() => import("pages/TreatmentPlan"));
const AppointmentDetail = lazy(
  () => import("pages/appointment/AppointmentDetail"),
);
const Home = lazy(() => import("pages/Home"));
const CreateAppointment = lazy(
  () => import("pages/appointment/CreateAppointment"),
);
const ManageSchedule = lazy(() => import("pages/ManageSchedule"));
const PatientsList = lazy(() => import("pages/PatientsList"));
const MyCalendar = lazy(() => import("pages/MyCalendar"));
const UserDataForm = lazy(() => import("pages/UserDataForm"));
const MedicProfile = lazy(() => import("pages/MedicProfile"));

const DepartmentTable = lazy(() => import("pages/Departments"));
const MedicalServiceTable = lazy(() => import("pages/MedicalServices"));
// type RouteType = {
//   path: string;
//   component: React.LazyExoticComponent<() => JSX.Element>;
//   roles?: string[];
//   public?: boolean;
// };

const routes = [
  {
    path: "/departments",
    component: DepartmentTable,
    roles: ["admin"],
  },
  {
    path: "/medical-services",
    component: MedicalServiceTable,
    roles: ["admin"],
  },
  {
    path: "/user-data-form",
    component: UserDataForm,
    roles: ["user", "medic", "admin"],
  },
  {
    path: "/home",
    component: Home,
    roles: ["user", "medic", "admin"],
    public: true,
  },
  {
    path: "/appointment-detail",
    component: AppointmentDetail,
    roles: ["user", "medic", "admin"],
  },
  {
    path: "/treatment-plan",
    component: TreatmentPlanDetail,
    roles: ["user", "medic", "admin"],
  },
  {
    path: "/medical-history",
    component: MedicalHistory,
    roles: ["user", "admin", "medic"],
  },
  {
    path: "/medic-search",
    component: MedicSearch,
    roles: ["user", "medic", "admin"],
    public: true,
  },
  {
    path: "/medic-detail",
    component: MedicDetail,
    roles: ["user", "medic", "admin"],
    public: true,
  },
  {
    path: "/clinics",
    component: Clinics2,
    roles: ["user", "medic", "admin"],
    public: true,
  },
  {
    path: "/clinics2",
    component: Clinics2,
    roles: ["user", "medic", "admin"],
    public: true,
  },
  {
    path: "/clinic-detail/:id",
    component: ClinicDetail,
    roles: ["user", "medic", "admin"],
    public: true,
  },
  {
    path: "/profile",
    component: Profile,
    roles: ["user", "medic", "admin"],
  },
  {
    path: "/create-appointment",
    component: CreateAppointment,
    roles: ["user", "medic", "admin"],
  },
  {
    path: "/manage-schedule",
    component: ManageSchedule,
    roles: ["medic"],
  },
  {
    path: "/see-patients",
    component: PatientsList,
    roles: ["medic"],
  },
  {
    path: "/my-calendar",
    component: MyCalendar,
    roles: ["medic"],
  },
  {
    path: "/medic-profile",
    component: MedicProfile,
    roles: ["medic"],
  },
  // Public routes
  // {
  //   path: "/public-page",
  //   component: PublicPage,
  //   public: true,
  // },
  // {
  //   path: "/another-public-page",
  //   component: AnotherPublicPage,
  //   public: true,
  // },
];

export default routes;
