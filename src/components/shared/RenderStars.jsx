import React from "react";
import { FaStar } from "react-icons/fa6";

const RenderStars = ({ rating }) => {
  return (
    <div className="flex">
      {Array(5)
        .fill()
        .map((_, index) => (
          <FaStar
            key={index}
            className="w-5 h-5 mr-1"
            style={{
              color: index < rating ? "#FF912C" : "#737373",
            }}
          />
        ))}
    </div>
  );
};

export default RenderStars;
