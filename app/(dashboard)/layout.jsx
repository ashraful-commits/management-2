"use client";
import { Saira, Russo_One } from "next/font/google";
import { usePathname } from "next/navigation";

// app/(dashboard)/layout.jsx

import React from "react";
import DashboardHeader from "@/components/newsfeed/DashboardHeader";
import Sidebar from "@/components/newsfeed/Sidebar";

export default function RootDashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-black">
      <div className="z-50">
        <DashboardHeader />
      </div>
      <section className="flex w-full justify-between">
        <div className="z-40 basis-2">
          <Sidebar />
        </div>
        <div className="overflow-y-auto pt-[93px] pb-16 w-full hide-scrollbar">
          {children}
        </div>
      </section>
    </div>
  );
}
