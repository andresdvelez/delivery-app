"use client";

import { getRestaurantById } from "@/app/hooks/useFetchRestaurants";
import React from "react";

function Restaurant({ params }) {
  const { id } = params;

  const restaurant = getRestaurantById(id);

  console.log(restaurant?.restaurant);

  return <div>Restaurant {id}</div>;
}

export default Restaurant;
