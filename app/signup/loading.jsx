import Image from "next/image";

import Logo from "@/public/logo.svg";

function Loading() {
  
  return (
    <div className="bg-main-color w-screen h-screen flex items-center justify-center">
      <figure className="bg-white w-max h-max rounded-lg py-4 px-2">
        <Image src={Logo} alt="logo" priority />
      </figure>
    </div>
  );
}

export default Loading;
