import React from "react";
import "../global.css";
import { useFetchRestaurants } from "./hooks/useFetchRestaurants";

// Logo
import Slider from "./slider/page";

function page() {
  return (
    <>
      <Slider />
    </>
  );
}

export default page;
