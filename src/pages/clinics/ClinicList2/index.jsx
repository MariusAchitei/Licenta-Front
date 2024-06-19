import React from "react";
import ClinicList from "./ClinicList.jsx";

export default function Clinics2() {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-[80vw] px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="clinics-heading" className="pb-24 pt-6">
          <h2 id="clinics-heading" className="sr-only">
            Clinics
          </h2>
          <div className="flex flex-col gap-x-8 gap-y-10">
            <ClinicList />
          </div>
        </section>
      </main>
    </div>
  );
}
