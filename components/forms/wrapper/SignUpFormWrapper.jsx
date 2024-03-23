"use client";

import ReduxProvider from "@/redux/store/ReduxProvider";
import SignupForm from "../SignupForm";

export default function SignUpFormWrapper() {
  return (
    <ReduxProvider>
      <SignupForm />
    </ReduxProvider>
  );
}