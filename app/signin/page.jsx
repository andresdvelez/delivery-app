import Logo from "@/public/logo.svg";
import Image from "next/image";

function SignIn() {
  return (
    <section className="flex flex-col justify-between px-4 py-14 h-screen w-screen">
      <div className="flex flex-col items-center">
        <figure className="w-24 h-16 mb-6">
          <Image src={Logo} />
        </figure>
        <h3 className="text-dark text-xl mb-3">Sign in</h3>
        <p className="text-dark text-sm w-56 text-center mb-8">
          Login or create an account with your phone number to start ordering
        </p>
        <input placeholder="+1" className="border-[1px] border-b-[#FFE031] w-full text-xl pb-[3px]" />
      </div>
      <div>
        <p className="font-light text-[10px]">By clicking the button next you accept</p>
        <p className="font-light text-[10px] border-[1px] border-b-dark border-l-0 border-t-0 border-r-0 mb-4 w-max">Terms of use</p>
        <button className="bg-main-color rounded-xl h-10 w-full">Next</button>
      </div>
    </section>
  );
}

export default SignIn;
