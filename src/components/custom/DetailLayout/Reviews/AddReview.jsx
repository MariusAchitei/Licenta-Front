import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const AddReview = ({ onSubmit, checkPermission = () => true }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (checkPermission()) {
      onSubmit({ rating, comment });
      setRating(0);
      setComment("");
      setError("");
    } else {
      setError(
        "You don't have permission to add a review. You did not interact with this product yet.",
      );
    }
  };

  return (
    <div className="mt-4 rounded-lg border bg-gray-50 p-4">
      <h3 className="text-lg font-semibold text-gray-900">Add your feedback</h3>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-2">
        <textarea
          className="w-full rounded-lg border border-gray-300 p-2"
          placeholder="Write your review here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="mt-2 flex items-center">
        <p className="text-lg font-medium text-gray-700">Rating:</p>
        <div className="ml-2 flex">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-5 w-5 cursor-pointer ${i < rating ? "text-yellow-300" : "text-gray-300"}`}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>
      </div>
      <button
        className="mt-4 rounded-lg bg-yellow-300 px-4 py-2 text-white"
        onClick={handleSubmit}
      >
        Submit Review
      </button>
    </div>
  );
};

export default AddReview;
