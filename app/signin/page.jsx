import Logo from "@/public/logo.svg";
import Image from "next/image";

function SignIn() {
  return (
    <section className="">
      <div>
        <figure>
          <Image src={Logo} />
        </figure>
        <h3>Sign In</h3>
        <p>
          Login or create an account with your phone number to start ordering
        </p>
      </div>
      <div></div>
    </section>
  );
}

export default SignIn;
