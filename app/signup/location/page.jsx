"use client"

import Image from "next/image";
import React from "react";

import map from "@/public/map.png";
import { useRouter } from "next/navigation";

function location() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/restaurants");
  };

  return (
    <section className="px-4 pt-24 flex flex-col items-center">
      <p className="text-sm text-center w-60 mb-8">
        Allow access to geo data on the device mark your address on the map
      </p>
      <div>
        <figure className="w-full">
          <Image src={map} alt="Mapa" width="120%" height="100%" />
        </figure>
        <p className="text-end w-full text-[10px] mt-3">Where am i?</p>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-main-color rounded-xl h-10 mt-60 w-full"
      >
        Submit
      </button>
    </section>
  );
}

export default location;
