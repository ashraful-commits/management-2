import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "@/components/forms/SignupForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SignUpFormWrapper from "@/components/forms/wrapper/SignUpFormWrapper";

export default function Loginpage() {
  return (
    <div className="bg-darkblue h-screen flex">
      <div className="w-8/12 max-lg:w-6/12 max-sm:hidden p-10 bg-[url(/inrange-girls.jpg)] bg-cover bg-center">
        <Link href="/">
          <Image
            src="/Logo.svg"
            width={130}
            height={100}
            alt="smash golf logo"
          />
        </Link>
      </div>
      <div className="w-4/12 max-lg:w-6/12 max-sm:w-full p-10 flex flex-col justify-center">
        <h4 className="text-3xl mb-4">Sign up</h4>
        <p>
          Already have an account?{" "}
          <Link href="/signin" className="text-[#3F83F8] underline">
            Login here.
          </Link>
        </p>
        <SignUpFormWrapper />
      </div>
    </div>
  );
}

export const metadata = {
  title: "Sign Up | Smashers Golf Tour",
  description: "Get started by creating an account",
};
