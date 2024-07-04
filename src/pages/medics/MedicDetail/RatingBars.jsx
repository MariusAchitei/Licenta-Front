import React, { useEffect, useState } from "react";
export default function RatingBars({ reviews }) {
  const [ratings, setRatings] = useState([
    { stars: 5, count: 0, color: "bg-green-500" },
    { stars: 4, count: 0, color: "bg-yellow-400" },
    { stars: 3, count: 0, color: "bg-yellow-300" },
    { stars: 2, count: 0, color: "bg-yellow-200" },
    { stars: 1, count: 0, color: "bg-red-500" },
  ]);
  const [totalReviews, setTotalReviews] = useState(0);
  useEffect(() => {
    const newRatings = ratings.map((rating) => {
      const count = reviews.filter(
        (review) => review.rating === rating.stars,
      ).length;
      return { ...rating, count };
    });
    setTotalReviews(reviews.length);
    setRatings(newRatings);
  }, []);
  return (
    <div className="mt-4">
      {ratings.map((rating) => (
        <div key={rating.stars} className="mb-2 flex items-center">
          <div className="w-1/6  text-gray-600">{rating.stars} stars</div>
          <div className="h-4 w-4/6 overflow-hidden rounded-lg bg-gray-200">
            <div
              className={`${rating.color} h-full`}
              style={{
                width: `${totalReviews ? (rating.count / totalReviews) * 100 : 0}%`,
              }}
            ></div>
          </div>
          <div className="w-1/6 text-right  text-gray-600">{rating.count}</div>
        </div>
      ))}
    </div>
  );
}
