"use client";

import Image from "next/image";

// Assets
import { TfiLocationPin } from "react-icons/tfi";
import { CiPizza } from "react-icons/ci";
import Promo1 from "/public/promo-1.png";
import Promo2 from "/public/promo-2.png";
import FastFoodIcon from "/public/categories/fast-food.svg";
import PizzaIcon from "/public/categories/pizza.svg";
import MainLayout from "./layout";
import { useFetchRestaurants } from "../hooks/useFetchRestaurants";
import RestaurantsList from "../components/RestaurantsList";

function MainPage() {
  const categories = [
    {
      id: 1,
      name: "All",
      icon: FastFoodIcon,
    },
    {
      id: 2,
      name: "Fast food",
      icon: FastFoodIcon,
    },
    {
      id: 3,
      name: "Pizza",
      icon: FastFoodIcon,
    },
    {
      id: 4,
      name: "Pizza",
      icon: FastFoodIcon,
    },
  ];

  return (
    <MainLayout>
      <main className="pt-11 px-4">
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <figure className="h-full">
              <TfiLocationPin className="text-[#FFE031] text-4xl" />
            </figure>
            <div>
              <h2 className="text-[#FFE031] text-xs uppercase">Deliver To</h2>
              <address className="text-dark not-italic font-normal text-sm">
                882 Well St, New-York
              </address>
            </div>
          </div>
          <aside className="flex gap-4">
            <Image src={Promo1} alt="Prom 1" />
            <Image src={Promo2} alt="Prom 2" />
          </aside>
          <p className="text-sm font-light">Restaurants and cafes</p>
          <div className="flex gap-3">
            {categories.map((category) => (
              <div
                className="flex items-center gap-4 py-3 px-4 rounded-md bg-white"
                key={category.id}
              >
                <Image width={20} height={20} src={category?.icon} />
                <h3 className="text-xs text-[#6c6c6c]">{category.name}</h3>
              </div>
            ))}
          </div>
        </header>
        <RestaurantsList />
      </main>
    </MainLayout>
  );
}

export default MainPage;
