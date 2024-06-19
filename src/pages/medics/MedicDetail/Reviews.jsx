import React from "react";

const Reviews = () => {
  return (
    <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
      <h3 className="mb-4 text-xl font-bold">Reviews</h3>
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h4 className="font-semibold">John Doe</h4>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm text-gray-500">Posted 1 day ago</p>
        </div>
        {/* Repeat for other reviews */}
      </div>
    </div>
  );
};

export default Reviews;
