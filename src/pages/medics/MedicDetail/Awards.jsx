import React from "react";

const Awards = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Awards</h3>
      <div className="space-y-2">
        <p className="text-gray-700">Award Name (Year)</p>
        {/* Repeat for other awards */}
      </div>
    </div>
  );
};

export default Awards;
