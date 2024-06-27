import { useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

import DoctorList from "./DoctorList";
import { Button } from "@windmill/react-ui";

import CreateMedicModal from "./CreateMedicModal";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "gender",
    name: "Gender",
    options: [
      { value: "male", label: "Male", checked: false },
      { value: "female", label: "Female", checked: false },
    ],
  },
  {
    id: "county",
    name: "County",
    options: [
      { value: "alba", label: "Alba", checked: false },
      { value: "arad", label: "Arad", checked: false },
      { value: "arges", label: "Argeș", checked: false },
      { value: "bacau", label: "Bacău", checked: false },
      { value: "bihor", label: "Bihor", checked: false },
      { value: "bistrita-nasaud", label: "Bistrița-Năsăud", checked: false },
      { value: "botosani", label: "Botoșani", checked: false },
      { value: "braila", label: "Brăila", checked: false },
      { value: "brasov", label: "Brașov", checked: false },
      { value: "bucuresti", label: "București", checked: false },
      { value: "buzau", label: "Buzău", checked: false },
      { value: "calarasi", label: "Călărași", checked: false },
      { value: "caras-severin", label: "Caraș-Severin", checked: false },
      { value: "cluj", label: "Cluj", checked: false },
      { value: "constanta", label: "Constanța", checked: false },
      { value: "covasna", label: "Covasna", checked: false },
      { value: "dambovita", label: "Dâmbovița", checked: false },
      { value: "dolj", label: "Dolj", checked: false },
      { value: "galati", label: "Galați", checked: false },
      { value: "giurgiu", label: "Giurgiu", checked: false },
      { value: "gorj", label: "Gorj", checked: false },
      { value: "harghita", label: "Harghita", checked: false },
      { value: "hunedoara", label: "Hunedoara", checked: false },
      { value: "ialomita", label: "Ialomița", checked: false },
      { value: "iasi", label: "Iași", checked: false },
      { value: "ilfov", label: "Ilfov", checked: false },
      { value: "maramures", label: "Maramureș", checked: false },
      { value: "mehedinti", label: "Mehedinți", checked: false },
      { value: "mures", label: "Mureș", checked: false },
      { value: "neamt", label: "Neamț", checked: false },
      { value: "olt", label: "Olt", checked: false },
      { value: "prahova", label: "Prahova", checked: false },
      { value: "salaj", label: "Sălaj", checked: false },
      { value: "satu-mare", label: "Satu Mare", checked: false },
      { value: "sibiu", label: "Sibiu", checked: false },
      { value: "suceava", label: "Suceava", checked: false },
      { value: "teleorman", label: "Teleorman", checked: false },
      { value: "timis", label: "Timiș", checked: false },
      { value: "tulcea", label: "Tulcea", checked: false },
      { value: "valcea", label: "Vâlcea", checked: false },
      { value: "vaslui", label: "Vaslui", checked: false },
      { value: "vrancea", label: "Vrancea", checked: false },
    ],
  },
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "today", label: "Today", checked: false },
      { value: "tomorrow", label: "Tomorrow", checked: false },
      {
        value: "next-7-days",
        label: "Next 7 Days",
        checked: false,
      },
      {
        value: "next-30-days",
        label: "Next 30 Days",
        checked: false,
      },
    ],
  },
  {
    id: "specialty",
    name: "Specialty",
    options: [
      { value: "allergy", label: "Allergy", checked: false },
      { value: "cardiology", label: "Cardiology", checked: false },
      { value: "dermatology", label: "Dermatology", checked: false },
      { value: "pediatrics", label: "Pediatrics", checked: false },
      { value: "orthopedics", label: "Orthopedics", checked: false },
      { value: "endocrinology", label: "Endocrinology", checked: false },
      { value: "neurology", label: "Neurology", checked: false },
      { value: "gastroenterology", label: "Gastroenterology", checked: false },
      { value: "urology", label: "Urology", checked: false },
      { value: "oncology", label: "Oncology", checked: false },
      { value: "rheumatology", label: "Rheumatology", checked: false },
      { value: "pulmonology", label: "Pulmonology", checked: false },
      { value: "ophthalmology", label: "Ophthalmology", checked: false },
      { value: "psychiatry", label: "Psychiatry", checked: false },
      { value: "nephrology", label: "Nephrology", checked: false },
      { value: "hematology", label: "Hematology", checked: false },
    ],
  },
  {
    id: "experience",
    name: "Experience",
    options: [
      { value: "0-5", label: "0-5 Years", checked: false },
      { value: "5-10", label: "5-10 Years", checked: false },
      { value: "10-20", label: "10-20 Years", checked: false },
      { value: "20", label: "20+ Years", checked: false },
    ],
  },
  {
    id: "online-consultation",
    name: "Online Consultation",
    options: [
      { value: "video", label: "Video", checked: false },
      { value: "chat", label: "Chat", checked: false },
    ],
  },
  {
    id: "ratings",
    name: "Ratings",
    options: [
      { value: "1", label: "1 Star & Up", checked: false },
      { value: "2", label: "2 Stars & Up", checked: false },
      { value: "3", label: "3 Stars & Up", checked: false },
      { value: "4", label: "4 Stars & Up", checked: false },
      { value: "5", label: "5 Stars", checked: false },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    options: [
      { value: "english", label: "English", checked: false },
      { value: "french", label: "French", checked: false },
      { value: "spanish", label: "Spanish", checked: false },
      { value: "german", label: "German", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MediSearch3() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleCreateClick = () => {
    setModalOpen(true);
  };

  const handleSave = (formData) => {};

  return (
    <>
      <div className="bg-white px-2 text-xl">
        {/* Mobile filter dialog */}
        {MobileFilter(mobileFiltersOpen, setMobileFiltersOpen)}

        <main className="mx-auto px-2 sm:px-2 lg:max-w-[90vw]">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Doctors
            </h1>

            <div className="flex items-center">
              <div className="mr-5">
                <Button onClick={handleCreateClick}>Create</Button>
              </div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center  font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 ",
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Doctors
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:flex">
              {/* Filters */}
              <form className="hidden lg:block">
                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3  text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3  text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="flex-1">
                <DoctorList />
              </div>
            </div>
          </section>
        </main>
      </div>
      <CreateMedicModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
function MobileFilter(mobileFiltersOpen, setMobileFiltersOpen) {
  return (
    <>
      <Transition show={mobileFiltersOpen}>
        <Dialog
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className=" font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-t border-gray-200 px-4 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
