import Image from "next/image";
import React from "react";
import Dish from "/public/restaurant/dish-1.png";

function DishesList({ dishes }) {
  console.log(dishes);

  return (
    <ul className="w-full overflow-y-scroll mt-12 flex flex-wrap">
      {dishes?.map((dish) => (
        <li
          key={dish.id}
          className="rounded-xl p-2 shadow-md flex flex-col gap-2"
        >
          <Image className="rounded-xl" src={Dish} alt={dish.name} />
          <p className="text-sm text-dark">{dish.name}</p>
          <p className="text-[#A7A7A7]">{dish.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default DishesList;
