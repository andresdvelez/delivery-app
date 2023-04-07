import React from "react";

// Assets
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiSearchLine, RiHistoryLine } from "react-icons/ri";

function NavigationBar() {
  return (
    <div className="absolute bottom-4 flex flex-row justify-around w-full h-6">
      <button className="h-full">
        <figure className="h-full w-full">
          <IoHomeOutline className="h-full w-full" />
        </figure>
      </button>
      <button className="h-full">
        <figure className="h-full w-full">
          <RiSearchLine className="h-full w-full" />
        </figure>
      </button>
      <button className="h-full">
        <figure className="h-full w-full">
          <RiHistoryLine className="h-full w-full" />
        </figure>
      </button>
      <button className="h-full">
        <figure className="h-full w-full">
          <FaRegUser className="h-full w-full" />
        </figure>
      </button>
    </div>
  );
}

export default NavigationBar;
