// src/components/StarRating.jsx
import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0); // Current rating (0 to 5)
  const [hover, setHover] = useState(0); // Hover state for stars

  return (
    <div className="flex items-center">
      {/* Label */}
      <span className="text-sm font-medium text-gray-700 mr-2">Rate:</span>

      {/* Stars */}
      <div className="flex">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;

          return (
            <button
              key={index}
              type="button"
              className="focus:outline-none"
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              <svg
                className={`w-5 h-5 ${
                  starValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                } fill-current`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3 1-5.5L2 8l5.5-1L10 2l2.5 5 5.5 1-3.5 4.5 1 5.5z" />
              </svg>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
