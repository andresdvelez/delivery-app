import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Verify() {
  return (
    <section className="flex flex-col justify-between px-4 py-14 h-screen w-screen">
      <div className="flex flex-col items-center">
        <figure className="w-24 h-16 mb-6">
          <Image src={Logo} alt="Logo" />
        </figure>
        <h3 className="text-dark text-xl mb-3">Verification</h3>
        <p className="text-dark text-sm w-56 text-center mb-8">
          Enter the four-digit code from SMS SMS not received.{" "}
          {/* Add handle click */}
          <strong className="cursor-pointer">Send again?</strong>
        </p>
        {/* OTP Code input */}
      </div>
      <div>
        <button className="bg-main-color rounded-xl h-10 w-full relative">
          <Link
            className="absolute bottom-0 top-2 right-0 w-full h-full"
            href="/signup"
          >
            Verify
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Verify;
