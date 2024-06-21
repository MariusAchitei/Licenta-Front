import React from "react";
import RatingBars from "../../../../pages/medics/MedicDetail/RatingBars";
import { FaStar, FaCheckCircle } from "react-icons/fa";

export default function Reviews({ data }) {
  const { reviews, rating } = data;

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">Recenzii</h2>
      <div className="mb-6 flex flex-col space-x-10 lg:flex-row">
        <div className="flex-2 mt-2 flex flex-col items-center">
          <span className="text-4xl font-bold text-yellow-300">
            {rating.score.toFixed(2)}
          </span>
          <span className="ml-2 text-xl text-gray-600">of 5</span>
          <span className="ml-4 flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="h-5 w-5 text-yellow-300" />
            ))}
          </span>
          <span className="ml-2 text-gray-600">({reviews.length} ratings)</span>
          <button className="mt-4 rounded-lg bg-yellow-300 px-4 py-2 text-white">
            Add your feedback
          </button>
        </div>
        <div className="max-w-[50vw] flex-1">
          <RatingBars />
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <label className="text-lg font-medium text-gray-700">Sort:</label>
          <select className="ml-2 block rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-lg text-gray-700 focus:border-indigo-500 focus:ring-indigo-500">
            <option>Most recent</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="flex items-center">
          <label className="text-lg font-medium text-gray-700">Show:</label>
          <select className="ml-2 block rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-lg text-gray-700 focus:border-indigo-500 focus:ring-indigo-500">
            <option>All Reviews</option>
            <option>5 stars</option>
            <option>4 stars</option>
            <option>3 stars</option>
            <option>2 stars</option>
            <option>1 star</option>
          </select>
        </div>
      </div>

      {reviews.map((review, index) => reviewComponent(index, review))}
    </div>
  );

  function reviewComponent(index, review) {
    return (
      <div key={index} className="space-y-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium text-gray-900">{review.name}</p>
            <p className="text-lg text-gray-600">{review.date}</p>
            {review.verifiedPurchase && (
              <p className="flex items-center text-lg text-green-500">
                <FaCheckCircle className="h-5 w-5 text-yellow-300" />
                Verified Interaction
              </p>
            )}
          </div>
          <div className="flex items-center">
            {[...Array(review.rating)].map((_, i) => (
              <FaStar key={i} className="h-5 w-5 text-yellow-300" />
            ))}
          </div>
        </div>
        <p className="mt-2 text-lg text-gray-600">{review.comment}</p>
        <div className="mt-2 flex items-center">
          <p className="text-lg text-gray-600">Was it helpful?</p>
          <div className="ml-2 flex items-center">
            <input
              type="radio"
              id={`helpfulYes-${index}`}
              name={`helpful-${index}`}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor={`helpfulYes-${index}`}
              className="ml-1 text-lg text-gray-600"
            >
              Yes: {review.helpful.yes}
            </label>
          </div>
          <div className="ml-4 flex items-center">
            <input
              type="radio"
              id={`helpfulNo-${index}`}
              name={`helpful-${index}`}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor={`helpfulNo-${index}`}
              className="ml-1 text-lg text-gray-600"
            >
              No: {review.helpful.no}
            </label>
          </div>
        </div>
      </div>
    );
  }
}
