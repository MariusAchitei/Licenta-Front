import React from "react";

const ratings = [
  { stars: 5, count: 1, color: "bg-green-500" },
  { stars: 4, count: 1, color: "bg-yellow-400" },
  { stars: 3, count: 2, color: "bg-yellow-300" },
  { stars: 2, count: 1, color: "bg-yellow-200" },
  { stars: 1, count: 0, color: "bg-red-500" },
];

const totalReviews = ratings.reduce((sum, rating) => sum + rating.count, 0);

export default function RatingBars({ reviews }) {
  return (
    <div className="mt-4">
      {ratings.map((rating) => (
        <div key={rating.stars} className="mb-2 flex items-center">
          <div className="w-1/6  text-gray-600">{rating.stars} stars</div>
          <div className="h-4 w-4/6 overflow-hidden rounded-lg bg-gray-200">
            <div
              className={`${rating.color} h-full`}
              style={{ width: `${(rating.count / totalReviews) * 100}%` }}
            ></div>
          </div>
          <div className="w-1/6 text-right  text-gray-600">{rating.count}</div>
        </div>
      ))}
    </div>
  );
}
