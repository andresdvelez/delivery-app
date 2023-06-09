"use client";

import { getDish, useGetRestaurantById } from "@/app/hooks/useFetchRestaurants";
import React from "react";

function Dish({ params }) {
  const { id, dishId } = params;

  const restaurant = useGetRestaurantById(id);

  const dish = getDish(restaurant?.restaurant?.dishes, dishId);
  console.log(dish);

  const ingredients = [
    {
      id: 1,
      label: "Tomatoes",
      selected: true,
      price: 2,
    },
    {
      id: 2,
      label: "Grain",
      selected: false,
      price: 1,
    },
    {
      id: 3,
      label: "Lettuce leaf",
      selected: false,
      price: 1,
    },
  ];

  return (
    <section>
      {dish && (
        <>
          <img className="borderBottom mb-4" src={dish?.img} alt={dish?.name} />
          <div className="px-4">
            <div className="flex justify-between mb-3">
              <h1 className="text-dark text-xl">{dish?.name}</h1>
              <p className="text-dark font-light text-[10px]">
                {dish?.deliveryTime}
              </p>
            </div>
            <p className="text-dark text-sm font-light mb-4">
              {dish?.description}
            </p>
            <div>
              <h3 className="text-sm text-[#A7A7A7]">Additional Ingredients</h3>
              <ul>
                {ingredients.map((ingredient) => {
                  return (
                    <li key={ingredient.id} className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-md p-1 flex items-center justify-center text-dark text-xs ${
                            ingredient.selected ? "bg-main-color" : "bg-white"
                          }`}
                        >
                          {ingredient.selected ? "✓" : ""}
                        </div>
                        <p className="text-dark font-light text-sm">
                          {ingredient.label}
                        </p>
                      </div>
                      <p className={`${ ingredient.selected ? 'text-[#FFE031]' : 'text-dark'}`}>+{ingredient.price}$</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Dish;
