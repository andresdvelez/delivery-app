"use client";

import Image from "next/image";
import React from "react";
import { sliderData } from "./data";
import { motion } from "framer-motion";
import activeFigure from "@/public/pagination/active.svg";
import circle from "@/public/pagination/circle.svg";
import Link from "next/link";

const variants = {
  initial: { x: -32 },
  second: { x: 0 },
  third: { x: 30 },
};

function Slider() {
  const [count, setCount] = React.useState(0);

  const handleNext = () => {
    setCount(count + 1);
  };

  return (
    <section className="w-screen h-screen flex flex-col justify-center">
      <motion.div
        key={count}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
        className="flex flex-col gap-2 mb-56 mt-20"
      >
        <figure className="w-screen h-80 flex justify-center">
          <Image
            width={300}
            height={300}
            src={sliderData[count].img}
            alt="Slide"
          />
        </figure>
        <p className="px-[122px] text-center font-normal text-base">
          {sliderData[count].text}
        </p>
      </motion.div>
      <div className="flex items-center gap-3 justify-center mb-4">
        <figure>
          <Image src={circle} />
        </figure>
        <motion.figure
          className="absolute"
          animate={
            count === 0
              ? "initial"
              : count === 1
              ? "second"
              : count === 2
              ? "third"
              : ""
          }
          variants={variants}
        >
          <Image src={activeFigure} />
        </motion.figure>
        <figure>
          <Image src={circle} />
        </figure>
        <figure>
          <Image src={circle} />
        </figure>
      </div>
      <div className="px-4">
        {count === 2 ? (
          <button className="bg-main-color rounded-xl h-10 w-full">
            <Link href="/signin">Next</Link>
          </button>
        ) : (
          <button
            className="bg-main-color rounded-xl h-10 w-full"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
}

export default Slider;
