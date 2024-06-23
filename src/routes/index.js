// src/routes/index.ts
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
const SeePatients = lazy(() => import("pages/SeePatients"));
const MyCalendar = lazy(() => import("pages/MyCalendar"));
const UserDataForm = lazy(() => import("pages/UserDataForm"));

// type RouteType = {
//   path: string;
//   component: React.LazyExoticComponent<() => JSX.Element>;
//   roles?: string[];
//   public?: boolean;
// };

const routes = [
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
    roles: ["user", "admin"],
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
    path: "/clinic-detail",
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
    component: SeePatients,
    roles: ["medic"],
  },
  {
    path: "/my-calendar",
    component: MyCalendar,
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
