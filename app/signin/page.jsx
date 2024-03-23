import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignInFormWrapper from "@/components/forms/wrapper/SignInFormWrapper";

export default function Loginpage() {
  return (
    <div className="flex h-screen bg-darkblue">
      <div className="w-8/12 max-lg:w-6/12 max-sm:hidden p-10 bg-[url(/inrange-crowd.jpg)] bg-cover bg-center">
        <Link href="/">
          <Image
            src="/Logo.svg"
            width={130}
            height={100}
            alt="smash golf logo"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center w-4/12 p-10 max-lg:w-6/12 max-sm:w-full">
        <h4 className="mb-4 text-3xl">Sign in</h4>
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#F20093] underline">
            Register Here.
          </Link>
        </p>
        <SignInFormWrapper />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Login | Smashers Golf Tour",
  description: "Get started by logging in to your personal smashers account",
};
