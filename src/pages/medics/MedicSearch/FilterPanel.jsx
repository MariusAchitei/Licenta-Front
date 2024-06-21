import { useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

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
    id: "availability",
    name: "Availability",
    options: [
      { value: "today", label: "Available Today", checked: false },
      { value: "tomorrow", label: "Available Tomorrow", checked: false },
      {
        value: "next-7-days",
        label: "Available in Next 7 Days",
        checked: false,
      },
      {
        value: "next-30-days",
        label: "Available in Next 30 Days",
        checked: false,
      },
    ],
  },
  {
    id: "consultation-fee",
    name: "Consultation Fee",
    options: [
      { value: "0-50", label: "$0 - $50", checked: false },
      { value: "50-100", label: "$50 - $100", checked: false },
      { value: "100-200", label: "$100 - $200", checked: false },
      { value: "200-500", label: "$200 - $500", checked: false },
      { value: "500-1000", label: "$500 - $1000", checked: false },
    ],
  },
  {
    id: "specialty",
    name: "Specialty",
    options: [
      { value: "allergy", label: "Allergy", checked: false },
      { value: "cardiology", label: "Cardiology", checked: false },
      // add more specialties as needed
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

export default function FilterPanel({
  mobileFiltersOpen,
  setMobileFiltersOpen,
}) {
  return (
    <Transition show={false}>
      <Dialog
        className="relative z-40 lg:hidden"
        onClose={() => setMobileFiltersOpen(false)}
      >
        <Transition.Child
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
