"use client";

import Image from "next/image";
import React from "react";
import { sliderData } from "./data";
import { motion } from "framer-motion";

function Slider() {
  const [count, setCount] = React.useState(0);

  const handleNext = () => {
    setCount(count + 1);
  };

  return (
    <section className="w-screen h-screen p-5 relative">
      <motion.div
        key={count}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
      >
        <figure>
          <Image
            width={80}
            height={80}
            src={sliderData[Math.abs(count) % 3].img}
          />
        </figure>
        <p>{sliderData[Math.abs(count) % 3].text}</p>
      </motion.div>
      {/* Pagination icons */}
      <button
        className="bg-main-color rounded-xl h-10 w-full"
        onClick={handleNext}
      >
        Next
      </button>
    </section>
  );
}

export default Slider;
