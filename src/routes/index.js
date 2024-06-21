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

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/appointment-detail",
    component: AppointmentDetail,
  },
  {
    path: "/treatment-plan",
    component: TreatmentPlanDetail,
  },
  {
    path: "/medical-history",
    component: MedicalHistory,
  },
  {
    path: "/medic-search",
    component: MedicSearch,
  },
  {
    path: "/medic-detail",
    component: MedicDetail,
  },
  {
    path: "/clinics",
    component: Clinics2,
  },
  {
    path: "/clinics2",
    component: Clinics2,
  },
  {
    path: "/clinic-detail",
    component: ClinicDetail,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/create-appointment",
    component: CreateAppointment,
  },
];

export default routes;
