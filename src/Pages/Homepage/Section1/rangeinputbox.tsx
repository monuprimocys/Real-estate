import React, { useState } from "react";
import "./range.css"; // Import the CSS file

const RangeSlider: React.FC = () => {
  const [value, setValue] = useState<number>(4000); // Initial value for the range

  // Handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value)); // Update the state with the new value
  };

  // Calculate the position of the value indicator
  const position = ((value - 1000) / (7000 - 1000)) * 100; // Calculate the position percentage

  // Calculate the background style for the range input
  const trackStyle = {
    background: `linear-gradient(to right, #B5843F ${position}%, #9B9B9B ${position}%)`, // Selected color and gray for unselected
  };

  return (
    <div className="relative mb-6">
      <label htmlFor="labels-range-input" className="sr-only">
        Labels range
      </label>
      <input
        id="labels-range-input"
        type="range"
        value={value}
        min={1000}
        max={7000}
        onChange={handleChange}
        className="range-slider"
        style={trackStyle} // Apply the calculated background style
      />
      {/* Value indicator */}
      <div
        style={{
          position: "absolute",
          left: `${position}%`,
          transform: "translateX(50%)",
          backgroundColor: "#B5843F",
          color: "#fff",
          padding: "2px 8px",
          borderRadius: "4px",
          whiteSpace: "nowrap",
          bottom: "-25px",
          
          fontSize: "10px",
        }}

        className="ml-[-3rem] z-50 "
      >
        ${value}
      </div>
      <span className="absolute left-0 text-sm text-gray-500 dark:text-gray-400 -bottom-6">
        $1000
      </span>

      <span className="absolute right-0 text-sm text-gray-500 dark:text-gray-400 -bottom-6">
        $7000
      </span>
    </div>
  );
};

export default RangeSlider;
