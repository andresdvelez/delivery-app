"use client";

import React from "react";

function Slider() {
  const [count, setCount] = React.useState(0);

  const handleNext = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-screen h-screen p-5">
      {/* Slides */}
      {count}
      {/* Pagination icons */}
      <button
        className="bg-main-color rounded-xl h-10 w-full"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

export default Slider;
