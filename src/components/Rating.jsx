import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value }) => {
  const fullStars = Math.floor(value); // Full stars
  const hasHalfStar = value % 1 >= 0.5; // Half star condition
  const emptyStars = 5 - Math.ceil(value); // Remaining empty stars

  return (
    <div className="flex justify-center items-center gap-1 mt-2">
      {/* Full stars */}
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}

      {/* Half star */}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}

      {/* Empty stars */}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
        ))}
    </div>
  );
};

export default Rating;
