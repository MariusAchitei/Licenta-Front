import React from "react";

const FilterSidebar = () => {
  return (
    <div className="w-1/4 rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-blue-600">Filters</h2>

      {/* Gender Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Gender</h3>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Male Gender</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Female Gender</span>
          </label>
        </div>
      </div>

      {/* Availability Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Availability</h3>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Available Today</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Available Tomorrow</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Available in Next 7 Days</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Available in Next 30 Days</span>
          </label>
        </div>
      </div>

      {/* Consultation Fee Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Consultation Fee</h3>
        <input type="range" min="10" max="10000" className="w-full" />
        <div className="mt-2 flex justify-between text-sm">
          <span>$10</span>
          <span>$10000</span>
        </div>
      </div>

      {/* Speciality Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Speciality</h3>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Urology</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Ophthalmology</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Cardiology</span>
          </label>
        </div>
      </div>

      {/* Experience Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Experience</h3>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">1-5 Years</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">5+ Years</span>
          </label>
        </div>
      </div>

      {/* Online Consultation Filter */}
      <div className="mb-6">
        <h3 className="mb-2 text-xl font-medium">Online Consultation</h3>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Video Call</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Audio Call</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Chat</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">Instant Consulting</span>
          </label>
        </div>
      </div>

      {/* By Rating Filter */}
      <div>
        <h3 className="mb-2 text-xl font-medium">By Rating</h3>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">5 Stars</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">4 Stars</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">3 Stars</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">2 Stars</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="ml-2">1 Star</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
