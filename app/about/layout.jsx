import Header from "@/components/homepage/Header";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Header title="About The Tour" />
      {children}
    </div>
  );
}
