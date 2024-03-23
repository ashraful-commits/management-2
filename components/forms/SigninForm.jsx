"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, LockKeyhole } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { loginSchema } from "./zod/schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import toast from "react-hot-toast";

export default function SigninForm() {
  const router = useRouter();
  const { value: count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const session = useSession();
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data) {
    // Replace this with a server action or fetch an API endpoint to authenticate
    const res = await signIn("credentials", { ...data, redirect: false });
    if (res.error && !res.ok) {
      toast.error("Could not log you in, Please check email & password");
    } else {
      toast.success("You have logged in sucessfully");
      router.push("/dashboard");
    }
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
          <Mail className="absolute" size={20} />
          <input
            {...register("email", { required: true })}
            id="email"
            name="email"
            type="email"
            className="px-8 w-full bg-transparent border-r-0 border-l-0 placeholder:text-white focus-visible:!outline-none focus-visible:outline-b-1 py-2 border-t-0 !border-b border-white"
            placeholder="Enter your email address"
          />
        </div>

        {errors?.email && (
          <p className="text-red-600 text-sm">{errors?.email?.message}</p>
        )}
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password" className="text-sm">
          Password
        </Label>
        <div className="relative w-full flex items-center">
          <LockKeyhole className="absolute" size={20} />
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            name="password"
            className="pl-8 w-full bg-transparent text-white border-r-0 border-l-0 placeholder:text-white  focus-visible:!outline-none focus-visible:outline-b-1 py-2 border-t-0 !border-b border-white"
            placeholder="Enter your password"
          />
        </div>
        {errors?.password && (
          <p className="text-red-600 text-sm">{errors?.password?.message}</p>
        )}
      </div>
      <Button
        className="bg-[#3F83F8] text-white w-full mt-10 hover:bg-white hover:text-black"
        disabled={isSubmitting}
        type="submit"
      >
        Sign In
      </Button>
    </form>
  );
}
