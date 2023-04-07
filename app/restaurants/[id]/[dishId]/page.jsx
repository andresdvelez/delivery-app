"use client";

import { getDish, useGetRestaurantById } from "@/app/hooks/useFetchRestaurants";
import React from "react";

function Dish({ params }) {
  const { id, dishId } = params;

  const restaurant = useGetRestaurantById(id);

  const dish = getDish(restaurant?.restaurant?.dishes, dishId);
  console.log(dish);

  return (
    <section>
      <img src="" alt="" />
    </section>
  );
}

export default Dish;
