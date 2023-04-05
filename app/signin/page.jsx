import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

function SignIn() {
  return (
    <section className="flex flex-col justify-between px-4 py-14 h-screen w-screen">
      <div className="flex flex-col items-center">
        <figure className="w-24 h-16 mb-6">
          <Image src={Logo} alt="Logo" />
        </figure>
        <h3 className="text-dark text-xl mb-3">Sign in</h3>
        <p className="text-dark text-sm w-56 text-center mb-8">
          Login or create an account with your phone number to start ordering
        </p>
        {/* Phone input */}
      </div>
      <div>
        <p className="font-light text-[10px]">
          By clicking the button next you accept
        </p>
        <p className="font-light text-[10px] border-[1px] border-b-dark border-l-0 border-t-0 border-r-0 mb-4 cursor-pointer w-max">
          Terms of use
        </p>
        <button className="bg-main-color rounded-xl h-10 w-full relative">
          <Link
            className="absolute bottom-0 top-2 right-0 w-full h-full"
            href="/signin/verify"
          >
            Login
          </Link>
        </button>
      </div>
    </section>
  );
}

export default SignIn;
