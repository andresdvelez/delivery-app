import Image from "next/image";
import React from "react";
import "../global.css";

// Logo
import Logo from "@/public/logo.svg";
import Link from "next/link";

function page() {
  return (
    <main className="bg-main-gradient w-screen h-screen flex items-center justify-center">
      <section className="flex flex-col items-center gap-4 py-10 px-9 initial-form w-3/4">
        <figure className="bg-white w-max rounded-lg py-4 px-2">
          <Image height={70} src={Logo} alt="Logo" priority />
        </figure>
        <h2 className="text-dark text-2xl mt-3">Atreus delivery</h2>
        <Link href='/signin' className="text-dark bg-main-color px-5 py-2 rounded-xl w-full mt-3 text-center hover:bg-amber-300">
          Sign in
        </Link>
        <Link href='/signup' className="text-dark bg-main-color px-5 py-2 rounded-xl w-full text-center hover:bg-amber-300">
          Sign up
        </Link>
      </section>
    </main>
  );
}

export default page;
