import { Button } from "@windmill/react-ui";
import TreatmentPlanPlaceholder from "assets/images/treatment-plan-placeholder.png";
import { getStatusClass } from ".";

export default function TreatmentPlanCard(plan) {
  return (
    <div className="mx-auto my-4 w-full overflow-hidden rounded-xl bg-white shadow-md">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={plan.photo || TreatmentPlanPlaceholder}
            alt="Plan Image"
          />
        </div>
        <div className="p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {plan.title}
          </div>
          <p className="mt-1 block text-lg font-medium leading-tight text-black">
            {plan.diagnostic}
          </p>
          <p className="mt-2 text-gray-500">
            <span className="text-sm">Start:</span> {plan.startDate} <br />
            <span className="text-sm">End:</span> {plan.endDate} <br />
          </p>
          <div className="mt-4">
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${getStatusClass(plan.status)}`}
            >
              {plan.status}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8">
          <p className="mb-3 mt-2 text-gray-500">
            <span className="text-sm">Next:</span> {plan.nextAppointment} <br />
            <span className="text-sm">Appointments:</span>{" "}
            {plan.appointmentCount}
          </p>
          <a href="/app/treatment-plan">
            <Button>See details</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
