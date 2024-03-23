"use client";

import ReduxProvider from "@/redux/store/ReduxProvider";
import SigninForm from "../SigninForm";

export default function SignInFormWrapper() {
  return (
    <ReduxProvider>
      <SigninForm />
    </ReduxProvider>
  );
}