"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, LockKeyhole, User2Icon } from "lucide-react";
import { signupSchema } from "./zod/schema/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerUser } from "@/lib/apis";
import toast from "react-hot-toast";

export default function SignupForm() {
  const router = useRouter();
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data) {
    // Replace this with a server action or fetch an API endpoint to authenticate
    const res = await registerUser(data);
    if (res && res.message) toast.success(res.message);
    router.push("/signin");
  }
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <form className="mt-10" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-1.5 mb-10">
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <div className="relative w-full flex items-center">
          <Mail className="absolute" size={16} />
          <input
            {...register("email", { required: true })}
            id="email"
            name="email"
            type="email"
            className="pl-8 w-full bg-transparent rounded-none text-white border-r-0 border-l-0 placeholder:text-white focus-visible:!outline-none focus-visible:outline-b-1 py-2 border-t-0 !border-b border-white"
            placeholder="Enter your email address"
          />
        </div>

        {errors?.email && (
          <p className="text-red-600 text-sm">{errors?.email?.message}</p>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5 mb-10">
        <Label htmlFor="username" className="text-sm">
          Username
        </Label>
        <div className="relative w-full flex items-center">
          <User2Icon className="absolute" size={16} />
          <input
            {...register("username", { required: true })}
            id="username"
            name="username"
            type="text"
            className="pl-8 w-full bg-transparent rounded-none text-white border-r-0 border-l-0 placeholder:text-white focus-visible:!outline-none focus-visible:outline-b-1 py-2 border-t-0 !border-b border-white"
            placeholder="Enter your unique username"
          />
        </div>

        {errors?.username && (
          <p className="text-red-600 text-sm">{errors?.username?.message}</p>
        )}
      </div>

      <div className="grid w-full items-center gap-1.5 mb-10">
        <Label htmlFor="password" className="text-sm">
          Password
        </Label>
        <div className="relative w-full flex items-center">
          <LockKeyhole className="absolute" size={16} />
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            name="password"
            className="pl-8 w-full bg-transparent rounded-none text-white border-r-0 border-l-0 placeholder:text-white  focus-visible:!outline-none focus-visible:outline-b-1 py-2 border-t-0 !border-b border-white"
            placeholder="Enter your password"
          />
        </div>
        {errors?.password && (
          <p className="text-red-600 text-sm">{errors?.password?.message}</p>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="confirmPassword" className="text-sm">
          Confirm Password
        </Label>
        <div className="relative w-full flex items-center">
          <LockKeyhole className="absolute" size={16} />
          <input
            {...register("confirmPassword", { required: true })}
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            className="pl-8 w-full bg-transparent rounded-none text-white border-r-0 border-l-0 placeholder:text-white  focus-visible:!outline-none focus-visible:outline-b-1 py-2 border-t-0 !border-b border-white"
            placeholder="Re-enter the same password"
          />
        </div>
        {errors?.confirmPassword && (
          <p className="text-red-600 text-sm">
            {errors?.confirmPassword?.message}
          </p>
        )}
      </div>
      <Button
        className="bg-[#3F83F8] text-white w-full mt-10 hover:bg-white hover:text-black"
        disabled={isSubmitting}
        type="submit"
      >
        Sign Up
      </Button>
    </form>
  );
}
