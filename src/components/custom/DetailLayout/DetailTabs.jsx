import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailTabs({ tabs, data, props = {} }) {
  const [currentTab, setCurrentTab] = useState("Overview");

  const CurrentComponent =
    tabs.find((tab) => tab.name === currentTab)?.component || tabs[0].component;

  return (
    <>
      <div className="mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setCurrentTab(tab.name)}
                className={classNames(
                  tab.name === currentTab
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 py-4 font-medium",
                )}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <CurrentComponent data={data} />
      </div>
    </>
  );
}
